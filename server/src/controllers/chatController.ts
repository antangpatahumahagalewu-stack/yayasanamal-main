import { Request, Response } from 'express';
import axios from 'axios';
import { config } from '../config';
import { WEBSITE_KNOWLEDGE, SYSTEM_PROMPT_BASE } from '../data/chatKnowledge';

const SYSTEM_PROMPT = `${SYSTEM_PROMPT_BASE}\n\n${WEBSITE_KNOWLEDGE}`;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export const handleChat = async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!config.deepseek.apiKey) {
      console.error('DEEPSEEK_API_KEY is empty! Check server/.env');
      return res.status(500).json({
        success: false,
        message: 'Konfigurasi AI belum lengkap. Hubungi admin.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Pesan tidak boleh kosong',
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Pesan terlalu panjang (maks 1000 karakter)',
      });
    }

    const messages: ChatMessage[] = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];

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

    const response = await axios.post(
      `${config.deepseek.baseUrl}/chat/completions`,
      {
        model: config.deepseek.model,
        messages,
        temperature: 0.8,
        max_tokens: 800,
        top_p: 0.95,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.deepseek.apiKey}`,
        },
        timeout: 30000,
      }
    );

    const reply = response.data?.choices?.[0]?.message?.content;

    if (!reply) {
      throw new Error('Empty response from AI');
    }

    res.json({
      success: true,
      reply,
    });
  } catch (error: unknown) {
    console.error('Chat error:', error);

    if (axios.isAxiosError(error)) {
      console.error('DeepSeek API error detail:', JSON.stringify({
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        headers: error.response?.headers,
        requestUrl: error.config?.url,
        requestData: error.config?.data?.slice(0, 200),
      }, null, 2));

      if (error.response?.status === 401 || error.response?.status === 403) {
        return res.status(500).json({
          success: false,
          message: 'Layanan chat sedang tidak tersedia. Silakan hubungi info@antang.org.',
        });
      }
      if (error.response?.status === 429) {
        return res.status(429).json({
          success: false,
          message: 'Terlalu banyak permintaan. Silakan tunggu sebentar.',
        });
      }
    }

    const detail = error instanceof Error ? error.message : String(error);
    res.status(500).json({
      success: false,
      message: `Ups, ada gangguan nih (${detail.slice(0, 100)}). Coba lagi ya, atau email ke info@antang.org!`,
    });
  }
};
