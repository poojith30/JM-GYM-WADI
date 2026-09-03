import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  ArrowUpRight, 
  Calendar,
  Clock,
  MapPin,
  Award
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionText?: string;
}

const QUICK_CHIPS = [
  {
    label: 'Timings & Shifts',
    icon: Clock,
    response: 'Mon–Sat: 5:00 AM – 11:00 AM & 4:00 PM – 10:00 PM. Sundays Closed.',
  },
  {
    label: 'Exact Location',
    icon: MapPin,
    response: 'Plot No. 13, Shivshakti Nagar, Opposite Wadi Police Station, Amravati Road.',
  },
  {
    label: 'Personal Training',
    icon: Award,
    response: 'Yes! Certified 1-on-1 coaching & custom nutrition charts available.',
  },
  {
    label: 'Book Visit',
    icon: Calendar,
    response: 'Taking you to our scheduling form to claim your 1-day VIP pass!',
    isBookAction: true,
  },
];

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: 'Hello! Welcome to JM Fitness. How can I assist you today?',
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleChipClick = (chip: typeof QUICK_CHIPS[number]) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: chip.label,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: chip.response,
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, botMsg]);

      if (chip.isBookAction) {
        setTimeout(() => {
          setIsOpen(false);
          const bookEl = document.getElementById('book');
          if (bookEl) {
            bookEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      }
    }, 350);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: `Thanks for asking! For "${query}", our front-desk manager is available for an instant direct chat on WhatsApp:`,
        timestamp: 'Just now',
        actionUrl: `https://wa.me/917769956689?text=${encodeURIComponent('Hi JM Fitness, ' + query)}`,
        actionText: 'Chat on WhatsApp (+91 77699 56689)',
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  return (
    <>
      {/* Floating Toggle Button with z-[9999] */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 bg-[#ff3269] text-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(255,50,105,0.6)] cursor-pointer transition-all focus:outline-none"
          aria-label="Toggle JM Fitness Concierge"
        >
          {/* Pulsing Outer Ring Animation */}
          <span className="animate-ping absolute -inset-1 rounded-full bg-[#ff3269] opacity-75 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageSquare className="w-6 h-6 text-white" />
            )}
          </div>
        </motion.button>
      </div>

      {/* Expandable Chat Window with z-[9999] */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[380px] h-[480px] bg-[#0d0d12] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl z-[9999]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full bg-[#ff3269]/15 border border-[#ff3269]/40 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-[#ff3269]" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-[#0d0d12]" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                    JM Fitness Concierge
                    <Sparkles className="w-3 h-3 text-[#ff3269]" />
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-zinc-400 font-medium">Online 24/7</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Chat History Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#ff3269] text-white font-medium rounded-br-none shadow-[0_0_15px_rgba(255,50,105,0.2)]'
                        : 'bg-white/[0.05] border border-white/[0.08] text-zinc-200 rounded-bl-none'
                    }`}
                  >
                    {msg.text}

                    {msg.actionUrl && (
                      <div className="mt-2.5 pt-2 border-t border-white/10">
                        <a
                          href={msg.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#ff3269] hover:underline"
                        >
                          <span>{msg.actionText || 'Open Link'}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-zinc-600 mt-1 px-1">{msg.timestamp}</span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* 4 Quick Reply Chips */}
            <div className="p-3 border-t border-white/[0.06] bg-black/30 flex-shrink-0">
              <div className="text-[9.5px] uppercase font-semibold tracking-wider text-zinc-500 mb-1.5">
                Quick Answers
              </div>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_CHIPS.map((chip, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/90 text-[10.5px] transition-colors text-left"
                  >
                    <chip.icon className="w-3 h-3 text-[#ff3269]" />
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Text Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/[0.08] bg-[#050507] flex items-center gap-2 flex-shrink-0">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-white/[0.04] border border-white/10 text-white rounded-xl px-3 py-2 text-xs focus:border-[#ff3269] focus:outline-none transition-all placeholder:text-zinc-600"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white transition-colors cursor-pointer focus:outline-none"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
