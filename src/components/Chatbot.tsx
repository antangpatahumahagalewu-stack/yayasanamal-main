import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Trash2, MinusCircle } from 'lucide-react';
import ChatMessage from './ChatMessage';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const STORAGE_KEY = 'yayasan_amal_chat_history';
const MAX_HISTORY = 40;

const WELCOME_MESSAGES: Record<string, string> = {
  en: "Hey there! I'm AMAL's virtual assistant. Got questions about our carbon programs, HHBK, partnerships, or anything about Yayasan AMAL? Feel free to ask — I'm here to help!",
  id: "Halo! Aku asisten virtual Yayasan AMAL. Ada yang bisa aku bantu soal program karbon, HHBK, kemitraan, atau apapun tentang Yayasan AMAL? Tanya aja ya!",
  ja: "こんにちは！Yayasan AMALのバーチャルアシスタントです。カーボンプログラム、HHBK、パートナーシップ、その他AMALについて何か質問があれば、お気軽にどうぞ！",
  zh: "你好！我是Yayasan AMAL的虚拟助手。有关于碳项目、HHBK、合作伙伴关系或任何关于AMAL的问题吗？随时问我！",
  fr: "Salut ! Je suis l'assistant virtuel d'AMAL. Des questions sur nos programmes carbone, HHBK, partenariats, ou quoi que ce soit sur Yayasan AMAL ? N'hésite pas, je suis là !",
  de: "Hey! Ich bin der virtuelle Assistent von AMAL. Fragen zu unseren Kohlenstoffprogrammen, HHBK, Partnerschaften oder irgendetwas über Yayasan AMAL? Frag einfach — ich helfe gern!",
  it: "Ciao! Sono l'assistente virtuale di AMAL. Hai domande sui nostri programmi di carbonio, HHBK, partnership o qualsiasi cosa su Yayasan AMAL? Chiedi pure, sono qui per aiutarti!",
  es: "¡Hola! Soy el asistente virtual de AMAL. ¿Tienes preguntas sobre nuestros programas de carbono, HHBK, alianzas o cualquier cosa sobre Yayasan AMAL? ¡Pregunta con confianza, estoy aquí para ayudar!",
};

function detectLanguage(text: string): string {
  const patterns: [string, RegExp][] = [
    ['ja', /[\u3040-\u309f\u30a0-\u30ff]/],
    ['zh', /[\u4e00-\u9fff]/],
    ['fr', /\b(bonjour|salut|merci|oui|non|je|tu|vous|nous|elle|elles?|ils?|suis|es|est|sommes|êtes|sont|avec|pour|dans|sur)\b/i],
    ['de', /\b(hallo|danke|bitte|ja|nein|ich|du|wir|ihr|sie|er|es|bin|bist|ist|sind|seid|mit|für|auf|von)\b/i],
    ['it', /\b(ciao|grazie|prego|sì|no|io|tu|lui|lei|noi|voi|loro|sono|sei|è|siamo|siete|con|per|su|di)\b/i],
    ['es', /\b(hola|gracias|por favor|sí|no|yo|tú|usted|nosotros|ellos|ellas|soy|eres|es|somos|son|estoy|estás|está|estamos|están|con|para|en|de)\b/i],
    ['id', /\b(halo|hai|saya|aku|kamu|gua|lo|gue|lu|lu\b|dia|kita|kami|mereka|ini|itu|yang|dan|atau|tidak|iya|nggak|gak|aja|dong|sih|deh|kok|lho|nih|tuh|kan|ya|dong|banget|sekali|gimana|kenapa|kapan|dimana|darimana)\b/i],
  ];

  const lower = text.toLowerCase();

  for (const [lang, pattern] of patterns) {
    if (pattern.test(text) || pattern.test(lower)) {
      return lang;
    }
  }

  return 'en';
}

function loadHistory(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.slice(-MAX_HISTORY);
      }
    }
  } catch { /* ignore */ }
  return [];
}

function saveHistory(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY)));
  } catch { /* ignore */ }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasOpened, setHasOpened] = useState(false);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      const history = loadHistory();
      if (history.length > 0) {
        setMessages(history);
      } else {
        const lang = detectWelcomeLanguage();
        const welcomeMsg: Message = {
          role: 'assistant',
          content: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.en,
        };
        setMessages([welcomeMsg]);
      }
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  function detectWelcomeLanguage(): string {
    if (typeof window === 'undefined') return 'en';
    const stored = localStorage.getItem('i18nextLng');
    if (stored) {
      const lang = stored.replace(/"/g, '').split('-')[0];
      if (WELCOME_MESSAGES[lang]) return lang;
    }
    const navLang = navigator.language?.split('-')[0] || 'en';
    if (WELCOME_MESSAGES[navLang]) return navLang;
    return 'en';
  }

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: 'user', content: trimmed };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const historyForApi = newMessages
        .filter(m => m.role === 'user' || m.role === 'assistant')
        .slice(-20);

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          history: historyForApi.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      if (data.success && data.reply) {
        const botMsg: Message = { role: 'assistant', content: data.reply };
        const updated = [...newMessages, botMsg];
        setMessages(updated);
        saveHistory(updated);
      } else {
        const errorMsg: Message = {
          role: 'assistant',
          content: data.message || 'Ups, ada gangguan nih. Coba lagi ya!',
        };
        const updated = [...newMessages, errorMsg];
        setMessages(updated);
        saveHistory(updated);
      }
    } catch {
      const errorMsg: Message = {
        role: 'assistant',
        content: 'Wah, koneksinya lagi bermasalah nih. Coba lagi sebentar ya, atau kamu bisa langsung email ke info@antang.org!',
      };
      const updated = [...newMessages, errorMsg];
      setMessages(updated);
      saveHistory(updated);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function clearHistory() {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
    const lang = detectWelcomeLanguage();
    setMessages([{ role: 'assistant', content: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.en }]);
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow"
        aria-label="Buka chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
          {messages.filter(m => m.role === 'user').length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {messages.filter(m => m.role === 'user').length}
            </span>
          )}
        </button>
      </div>
    );
  }

  const userMsgCount = messages.filter(m => m.role === 'user').length;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-6rem)] glass-card flex flex-col overflow-hidden shadow-2xl shadow-black/40">
      {/* Header */}
      <div className="flex-shrink-0 bg-emerald-600/20 border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Tanya AMAL</h3>
            <p className="text-[10px] text-forest-light/60">AI Assistant • Online</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {userMsgCount > 0 && (
            <button
              onClick={clearHistory}
              className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-forest-light/60 hover:text-red-400"
              title="Hapus chat"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            onClick={() => setIsMinimized(true)}
            className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-forest-light/60 hover:text-white"
            title="Minimize"
          >
            <MinusCircle className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-forest-light/60 hover:text-white"
            title="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
        {isLoading && <ChatMessage role="assistant" content="" isLoading />}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 border-t border-white/10 p-3">
        <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ketik pesan..."
            maxLength={1000}
            disabled={isLoading}
            className="flex-1 bg-transparent text-white text-sm placeholder:text-forest-light/30 outline-none border-none"
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600/30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-[10px] text-forest-light/30 text-center mt-1.5">
          Yayasan AMAL • info@antang.org
        </p>
      </div>
    </div>
  );
}
