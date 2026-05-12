import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Trash2, Power, RotateCcw } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { useChatContext } from '../context/ChatContext';

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

const ENDED_MESSAGES: Record<string, string[]> = {
  id: [
    "Obrolan sudah berakhir. Terima kasih ya sudah ngobrol! Kalau ada pertanyaan lagi, aku di sini kok 👋",
    "Chat selesai! Senang bisa bantu. Sampai jumpa lagi ya! 😊",
    "Wah, seru ngobrolnya! Kalau butuh info lagi, langsung aja buka chat. Sampai nanti! ✨",
  ],
  en: [
    "Chat ended. Thanks for chatting! I'm always here if you need anything 👋",
    "This chat has ended. It was great talking with you! Come back anytime 😊",
    "Chat complete! Feel free to reach out whenever you need info. See you! ✨",
  ],
  ja: [
    "チャットが終了しました。お話しできて嬉しかったです！また質問があればいつでもどうぞ 👋",
    "チャット終了です。またお会いしましょう！😊",
  ],
  zh: [
    "聊天已结束。感谢你的交流！如果还有问题，随时找我哦 👋",
    "对话结束啦。很高兴能帮到你！下次见 😊",
  ],
  fr: [
    "La conversation est terminée. Merci d'avoir échangé avec moi ! Si tu as d'autres questions, je suis là 👋",
    "Chat terminé ! C'était un plaisir de t'aider. À bientôt ! 😊",
  ],
  de: [
    "Der Chat ist beendet. Danke fürs Gespräch! Bei weiteren Fragen bin ich jederzeit für dich da 👋",
    "Chat beendet! Hat mich gefreut, dir zu helfen. Bis bald! 😊",
  ],
  it: [
    "La chat è terminata. Grazie per aver chiacchierato con me! Se hai altre domande, sono qui 👋",
    "Chat conclusa! È stato un piacere aiutarti. A presto! 😊",
  ],
  es: [
    "El chat ha terminado. ¡Gracias por conversar conmigo! Si tienes más preguntas, aquí estoy 👋",
    "Chat finalizado. ¡Me encantó ayudarte! Hasta pronto 😊",
  ],
};

function loadHistory(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed.slice(-MAX_HISTORY);
    }
  } catch { /* ignore */ }
  return [];
}

function saveHistory(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY)));
  } catch { /* ignore */ }
}

function detectWelcomeLanguage(): string {
  const stored = localStorage.getItem('i18nextLng');
  if (stored) {
    const lang = stored.replace(/"/g, '').split('-')[0];
    if (WELCOME_MESSAGES[lang]) return lang;
  }
  const navLang = navigator.language?.split('-')[0] || 'en';
  if (WELCOME_MESSAGES[navLang]) return navLang;
  return 'en';
}

function getEndedMessage(lang: string): string {
  const msgs = ENDED_MESSAGES[lang] || ENDED_MESSAGES.en;
  return msgs[Math.floor(Math.random() * msgs.length)];
}

export default function Chatbot() {
  const { isOpen, setIsOpen } = useChatContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatEnded, setChatEnded] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
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
    if (isOpen) {
      setShowPanel(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPanelVisible(true));
      });
    } else {
      setPanelVisible(false);
      const timer = setTimeout(() => {
        setShowPanel(false);
        setShowConfirm(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      const history = loadHistory();
      if (history.length > 0) {
        setMessages(history);
      } else {
        setChatEnded(false);
        const lang = detectWelcomeLanguage();
        setMessages([{ role: 'assistant', content: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.en }]);
      }
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    if (isOpen && !chatEnded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, chatEnded]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || isLoading || chatEnded) return;

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
    setChatEnded(false);
    const lang = detectWelcomeLanguage();
    setMessages([{ role: 'assistant', content: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.en }]);
  }

  function handleEndChat() {
    setShowConfirm(false);
    setChatEnded(true);
    localStorage.removeItem(STORAGE_KEY);
  }

  function handleStartNewChat() {
    setChatEnded(false);
    const lang = detectWelcomeLanguage();
    setMessages([{ role: 'assistant', content: WELCOME_MESSAGES[lang] || WELCOME_MESSAGES.en }]);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  const userMsgCount = messages.filter(m => m.role === 'user').length;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[45] w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse-glow ${
          isOpen ? 'md:right-[444px]' : ''
        }`}
        aria-label="Buka chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Side Panel */}
      {showPanel && (
        <div
          className={`fixed top-0 right-0 z-[55] w-full md:w-[420px] h-full bg-forest-deep/95 backdrop-blur-xl border-l border-white/10 shadow-2xl shadow-black/50 flex flex-col transition-transform duration-300 ${
            panelVisible ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex-shrink-0 bg-emerald-600/20 border-b border-white/10 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {chatEnded ? 'Chat Berakhir' : 'Tanya AMAL'}
                </h3>
                <p className="text-[10px] text-forest-light/60">
                  {chatEnded ? 'Obrolan telah selesai' : 'AI Assistant • Online'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {!chatEnded && userMsgCount > 0 && (
                <>
                  <button
                    onClick={clearHistory}
                    className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-forest-light/50 hover:text-red-400"
                    title="Hapus chat"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setShowConfirm(true)}
                    className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-forest-light/50 hover:text-amber-400"
                    title="Akhiri chat"
                  >
                    <Power className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-forest-light/50 hover:text-white"
                title="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content: Messages or Ended screen */}
          {chatEnded ? (
            <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-600/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-white/90 text-base leading-relaxed mb-2">
                {getEndedMessage(detectWelcomeLanguage())}
              </p>
              <p className="text-forest-light/40 text-xs mb-8">
                Yayasan AMAL • info@antang.org
              </p>
              <button
                onClick={handleStartNewChat}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/20"
              >
                <RotateCcw className="w-4 h-4" />
                Mulai Chat Baru
              </button>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
                {messages.map((msg, i) => (
                  <ChatMessage key={i} role={msg.role} content={msg.content} />
                ))}
                {isLoading && <ChatMessage role="assistant" content="" isLoading />}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="flex-shrink-0 border-t border-white/10 p-4">
                <div className="flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-emerald-500/50 transition-colors">
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
                    autoComplete="off"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    className="flex-shrink-0 w-9 h-9 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600/30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[10px] text-forest-light/30 text-center mt-2">
                  Yayasan AMAL • info@antang.org
                </p>
              </div>
            </>
          )}

          {/* End Chat Confirmation Modal */}
          {showConfirm && (
            <div
              className="absolute inset-0 z-10 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
              onClick={() => setShowConfirm(false)}
            >
              <div
                className="glass-card p-6 text-center max-w-[280px]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                  <Power className="w-6 h-6 text-amber-400" />
                </div>
                <p className="text-white text-sm mb-1 font-medium">Yakin ingin mengakhiri chat?</p>
                <p className="text-forest-light/50 text-xs mb-5">
                  Riwayat chat akan dihapus dan obrolan akan berakhir.
                </p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="bg-white/10 hover:bg-white/20 text-white/80 text-sm px-5 py-2 rounded-lg transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleEndChat}
                    className="bg-amber-600 hover:bg-amber-500 text-white text-sm px-5 py-2 rounded-lg transition-colors"
                  >
                    Ya, Akhiri
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
