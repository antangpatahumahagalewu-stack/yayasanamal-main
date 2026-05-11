import { createContext, useContext } from 'react';

interface ChatContextType {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const ChatContext = createContext<ChatContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useChatContext = () => useContext(ChatContext);
