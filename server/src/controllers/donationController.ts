import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { db } from '../config/database';
import { sendDonationConfirmation } from '../utils/email';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const donationValidation = [
  body('name').trim().notEmpty().withMessage('Nama harus diisi'),
  body('email').isEmail().withMessage('Email tidak valid'),
  body('amount').isNumeric().withMessage('Jumlah donasi harus berupa angka'),
  body('phone').optional().trim(),
  body('message').optional().trim(),
];

export const createDonation = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, amount, phone, message, isAnonymous } = req.body;
    const donationId = uuidv4();
    const transactionId = `TRX-${Date.now()}`;

    await db.query(
      `INSERT INTO donations (id, transaction_id, name, email, phone, amount, message, is_anonymous, status, created_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())`,
      [donationId, transactionId, name, email, phone || null, amount, message || null, isAnonymous || false, 'pending']
    );

    const paymentUrl = `${process.env.FRONTEND_URL}/payment/${transactionId}`;

    res.status(201).json({
      success: true,
      message: 'Donasi berhasil dibuat',
      data: {
        donationId,
        transactionId,
        paymentUrl,
      },
    });
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal membuat donasi. Silakan coba lagi.',
    });
  }
};

export const getDonations = async (req: Request, res: Response) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    
    const result = await db.query(
      `SELECT id, transaction_id, name, amount, message, is_anonymous, status, created_at 
       FROM donations 
       WHERE status = 'completed' AND is_anonymous = false
       ORDER BY created_at DESC 
       LIMIT $1 OFFSET $2`,
      [limit, offset]
    );

    const countResult = await db.query(
      'SELECT COUNT(*) FROM donations WHERE status = $1',
      ['completed']
    );

    res.json({
      success: true,
      data: result.rows,
      total: parseInt(countResult.rows[0].count),
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil data donasi',
    });
  }
};

export const updateDonationStatus = async (req: Request, res: Response) => {
  try {
    const { transactionId } = req.params;
    const { status } = req.body;

    const result = await db.query(
      'UPDATE donations SET status = $1, updated_at = NOW() WHERE transaction_id = $2 RETURNING *',
      [status, transactionId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Donasi tidak ditemukan',
      });
    }

    const donation = result.rows[0];

    if (status === 'completed') {
      await sendDonationConfirmation(
        donation.email,
        donation.name,
        donation.amount,
        donation.transaction_id
      );
    }

    res.json({
      success: true,
      message: 'Status donasi berhasil diupdate',
      data: donation,
    });
  } catch (error) {
    console.error('Error updating donation status:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengupdate status donasi',
    });
  }
};

export const getDonationStats = async (req: Request, res: Response) => {
  try {
    const totalResult = await db.query(
      'SELECT SUM(amount) as total, COUNT(*) as count FROM donations WHERE status = $1',
      ['completed']
    );

    const monthlyResult = await db.query(
      `SELECT SUM(amount) as total, COUNT(*) as count 
       FROM donations 
       WHERE status = $1 AND created_at >= NOW() - INTERVAL '30 days'`,
      ['completed']
    );

    res.json({
      success: true,
      data: {
        total: parseFloat(totalResult.rows[0].total || 0),
        count: parseInt(totalResult.rows[0].count || 0),
        monthly: {
          total: parseFloat(monthlyResult.rows[0].total || 0),
          count: parseInt(monthlyResult.rows[0].count || 0),
        },
      },
    });
  } catch (error) {
    console.error('Error fetching donation stats:', error);
    res.status(500).json({
      success: false,
      message: 'Gagal mengambil statistik donasi',
    });
  }
};
