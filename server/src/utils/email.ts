import nodemailer from 'nodemailer';
import { config } from '../config';

const transporter = nodemailer.createTransport({
  service: config.email.service,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: config.email.from,
      to,
      subject,
      html,
    });
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendContactFormEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const html = `
    <h2>Pesan Kontak Baru dari Website</h2>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subjek:</strong> ${subject}</p>
    <p><strong>Pesan:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  return sendEmail(config.email.user, `Pesan Kontak: ${subject}`, html);
};

export const sendDonationConfirmation = async (
  email: string,
  donorName: string,
  amount: number,
  transactionId: string
) => {
  const html = `
    <h2>Terima Kasih atas Donasi Anda</h2>
    <p>Halo ${donorName},</p>
    <p>Kami dengan tulus mengucapkan terima kasih atas donasi Anda sebesar <strong>Rp ${amount.toLocaleString('id-ID')}</strong>.</p>
    <p><strong>ID Transaksi:</strong> ${transactionId}</p>
    <p>Donasi Anda akan membantu kami dalam melanjutkan program-program pengelolaan hutan berkelanjutan dan pemberdayaan masyarakat.</p>
    <p>Salam hormat,<br>Tim Yayasan AMAL</p>
  `;

  return sendEmail(email, 'Konfirmasi Donasi - Yayasan AMAL', html);
};
