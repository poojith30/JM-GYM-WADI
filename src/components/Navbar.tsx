import React, { useState, useEffect } from 'react';
import { Dumbbell, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './motion/MagneticButton';

const NAV_LINKS = [
  { name: 'Experience', href: '#experience' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Memberships', href: '#memberships' },
  { name: 'Book Tour', href: '#book' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active link highlight detector
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050507]/80 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80'
          : 'bg-[#050507]/40 backdrop-blur-md border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
          >
            {/* Stylized Apple Emblem */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#ff3269]/60 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(255,50,105,0.25)]">
              <div className="absolute inset-0 rounded-xl bg-[#ff3269]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Dumbbell className="w-4 h-4 text-white group-hover:text-[#ff3269] transition-colors duration-300" />
            </div>

            {/* Brand Titles */}
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                JM <span className="text-white">FITNESS</span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3269] animate-pulse" />
                <span className="text-[9.5px] font-semibold tracking-widest text-zinc-400 uppercase">
                  WADI &bull; NAGPUR
                </span>
              </div>
            </div>
          </a>

          {/* Center Apple-Style Pill Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-2xl">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/15"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Cult.fit Signature Coral) */}
          <div className="hidden sm:flex items-center gap-3">
            <MagneticButton
              href="https://wa.me/917769956689"
              target="_blank"
              rel="noopener noreferrer"
              glowColor="rgba(255, 50, 105, 0.4)"
            >
              <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(255,50,105,0.35)] hover:shadow-[0_0_35px_rgba(255,50,105,0.5)] transition-all duration-250 group overflow-hidden">
                <MessageCircle className="w-3.5 h-3.5 text-white fill-white relative z-10" />
                <span className="relative z-10 font-bold">Chat Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white relative z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <motion.a
              href="https://wa.me/917769956689"
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              aria-label="Direct WhatsApp"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4 text-[#ff3269] fill-[#ff3269]" />
            </motion.a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-b border-white/[0.08] bg-[#050507]/95 backdrop-blur-2xl px-5 pt-3 pb-6"
          >
            <div className="flex flex-col gap-2 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-zinc-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="https://wa.me/917769956689"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(255,50,105,0.35)]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-white" />
                  Chat Direct (+91 77699 56689)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
