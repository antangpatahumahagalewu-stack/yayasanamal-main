import { WEBSITE_KNOWLEDGE, SYSTEM_PROMPT_BASE } from './_chatKnowledge.js';

const SYSTEM_PROMPT = `${SYSTEM_PROMPT_BASE}\n\n${WEBSITE_KNOWLEDGE}`;

const API_KEY = process.env.DEEPSEEK_API_KEY || '';
const API_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-chat';
const API_BASE = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1';

const rateMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const window = 60000;
  const maxRequests = 10;

  const entry = rateMap.get(ip);
  if (!entry || now - entry.start > window) {
    rateMap.set(ip, { start: now, count: 1 });
    return true;
  }
  entry.count++;
  if (entry.count > maxRequests) return false;
  rateMap.set(ip, entry);
  return true;
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');

  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      success: false,
      message: 'Terlalu banyak pesan. Silakan tunggu sebentar ya.',
    });
  }

  if (!API_KEY) {
    console.error('DEEPSEEK_API_KEY not configured');
    return res.status(500).json({
      success: false,
      message: 'Layanan chat sedang tidak tersedia. Silakan hubungi info@antang.org.',
    });
  }

  try {
    const { message, history } = req.body || {};

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ success: false, message: 'Pesan tidak boleh kosong' });
    }

    if (message.length > 1000) {
      return res.status(400).json({ success: false, message: 'Pesan terlalu panjang (maks 1000 karakter)' });
    }

    const messages = [{ role: 'system', content: SYSTEM_PROMPT }];

    if (Array.isArray(history)) {
      for (const msg of history.slice(-20)) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          messages.push({
            role: msg.role,
            content: String(msg.content).slice(0, 2000),
          });
        }
      }
    }

    messages.push({ role: 'user', content: message.trim() });

    const aiResponse = await fetch(`${API_BASE}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: API_MODEL,
        messages,
        temperature: 0.8,
        max_tokens: 800,
        top_p: 0.95,
      }),
      signal: AbortSignal.timeout(30000),
    });

    if (!aiResponse.ok) {
      const errText = await aiResponse.text().catch(() => '');
      console.error('DeepSeek API error:', aiResponse.status, errText.slice(0, 500));

      if (aiResponse.status === 401 || aiResponse.status === 403) {
        return res.status(500).json({
          success: false,
          message: 'Layanan chat sedang tidak tersedia. Silakan hubungi info@antang.org.',
        });
      }
      if (aiResponse.status === 429) {
        return res.status(429).json({
          success: false,
          message: 'Terlalu banyak permintaan. Silakan tunggu sebentar.',
        });
      }
      return res.status(500).json({
        success: false,
        message: 'Ups, ada gangguan nih. Coba lagi ya, atau email ke info@antang.org!',
      });
    }

    const data = await aiResponse.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({
        success: false,
        message: 'Ups, AI belum bisa jawab nih. Coba tanya lagi dengan kata lain ya!',
      });
    }

    return res.status(200).json({ success: true, reply });
  } catch (error) {
    console.error('Chat error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Wah, koneksinya lagi bermasalah nih. Coba lagi sebentar ya, atau kamu bisa langsung email ke info@antang.org!',
    });
  }
}
