import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Name, email, subject, and message are required' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'kontak@antang.org',
        pass: process.env.SMTP_PASS,
      },
    });

    const now = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1a4332, #2d6a4f); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">📬 Pesan Baru dari Form Kontak</h1>
        </div>
        <div style="background: #fff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; width: 100px;">Nama</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #2d6a4f;">
                <a href="mailto:${escapeHtml(email)}" style="color: #2d6a4f;">${escapeHtml(email)}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;">Telepon</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(phone)}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;">Subjek</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #333;">${escapeHtml(subject)}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px; border-left: 4px solid #2d6a4f;">
            <p style="margin: 0 0 8px 0; color: #888; font-size: 13px;">Pesan:</p>
            <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top: 20px; color: #aaa; font-size: 12px; text-align: center;">
            Diterima pada ${now}
          </p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Kontak Website" <${process.env.SMTP_USER || 'kontak@antang.org'}>`,
      to: 'kontak@antang.org',
      replyTo: email,
      subject: `[Kontak Website] ${subject}`,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'Gagal mengirim pesan. Silakan coba lagi.' });
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
