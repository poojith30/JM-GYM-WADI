import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ConciergeDock: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-lg"
    >
      <div className="relative rounded-full bg-[#0b0b0e]/90 backdrop-blur-2xl border border-white/[0.1] p-1.5 sm:p-2 shadow-2xl shadow-black/95 flex items-center justify-between gap-1 sm:gap-2">
        
        {/* Subtle Radial Coral Bloom behind dock */}
        <div className="absolute inset-0 rounded-full bg-[#ff3269]/[0.08] pointer-events-none blur-lg -z-10" />

        {/* Button 1: Call Front Desk */}
        <motion.a
          href="tel:+917769956689"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group"
          title="Call Front Desk at +91 77699 56689"
        >
          <div className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
            <Phone className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-200 leading-tight">
              Call Desk
            </span>
            <span className="text-[9px] text-zinc-500 hidden sm:inline">
              +91 77699...
            </span>
          </div>
        </motion.a>

        {/* Button 2: WhatsApp Instant Chat (Cult.fit Signature Hot Coral) */}
        <motion.a
          href="https://wa.me/917769956689?text=Hi%20JM%20Fitness,%20I%20want%20to%20inquire%20about%20memberships."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex-[1.2] relative flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#ff3269] hover:bg-[#ff2442] text-white font-bold shadow-[0_0_25px_rgba(255,50,105,0.4)] overflow-hidden group"
          title="Instant Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-white fill-white flex-shrink-0" />
          <span className="text-xs sm:text-xs font-bold uppercase tracking-wider leading-tight whitespace-nowrap">
            Instant Chat
          </span>
        </motion.a>

        {/* Button 3: Instagram Official Profile */}
        <motion.a
          href="https://instagram.com/jm_fitness_wadi"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group"
          title="Official Instagram @jm_fitness_wadi"
        >
          <div className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
            <InstagramIcon className="w-3.5 h-3.5 text-zinc-300 group-hover:text-white transition-colors" />
          </div>
          <div className="flex flex-col items-start text-left">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-200 leading-tight">
              Instagram
            </span>
            <span className="text-[9px] text-zinc-500 hidden sm:inline">
              @jm_fitness
            </span>
          </div>
        </motion.a>

      </div>
    </motion.div>
  );
};
