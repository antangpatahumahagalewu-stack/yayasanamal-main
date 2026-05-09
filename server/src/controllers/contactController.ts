import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { sendContactFormEmail } from '../utils/email';
import { db } from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export const contactValidation = [
  body('name').trim().notEmpty().withMessage('Nama harus diisi'),
  body('email').isEmail().withMessage('Email tidak valid'),
  body('subject').trim().notEmpty().withMessage('Subjek harus diisi'),
  body('message').trim().notEmpty().withMessage('Pesan harus diisi'),
];

export const submitContact = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, subject, message, phone } = req.body;
    const contactId = uuidv4();

    await db.query(
      `INSERT INTO contacts (id, name, email, phone, subject, message, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [contactId, name, email, phone || null, subject, message]
    );

    await sendContactFormEmail(name, email, subject, message);

    res.status(201).json({
      success: true,
      message: 'Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.',
      contactId,
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengirim pesan. Silakan coba lagi.',
    });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  try {
    const result = await db.query(
      'SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100'
    );
    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data kontak',
    });
  }
};
