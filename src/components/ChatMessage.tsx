import { MessageSquare } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}

export default function ChatMessage({ role, content, isLoading }: ChatMessageProps) {
  if (isLoading) {
    return (
      <div className="flex items-start gap-3 mb-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600/30 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    );
  }

  const isUser = role === 'user';

  return (
    <div className={`flex items-start gap-3 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
        isUser
          ? 'bg-emerald-600 text-white'
          : 'bg-white/10 text-emerald-400'
      }`}>
        {isUser ? 'U' : (
          <MessageSquare className="w-4 h-4" />
        )}
      </div>
      <div className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm leading-relaxed ${
        isUser
          ? 'bg-emerald-600 text-white rounded-tr-sm'
          : 'bg-white/10 text-forest-light/90 rounded-tl-sm'
      }`}>
        {content.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < content.split('\n').length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}
