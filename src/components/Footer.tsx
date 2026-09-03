import React from 'react';
import { Dumbbell, Phone, MapPin, ArrowUp } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Floor Experience', href: '#experience' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Plans', href: '#memberships' },
  { name: 'Book Visit', href: '#book' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050507] text-zinc-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Clean Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          {/* Left: JM FITNESS wordmark + tagline */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-[#ff3269]" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                JM FITNESS
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-normal">
              Nagpur's Premier Unisex Fitness Center &bull; Wadi
            </p>
          </div>

          {/* Center: Fast Navigation Anchors */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-250"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Location & Phone Direct */}
          <div className="flex flex-col items-center lg:items-end text-xs text-zinc-400 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff3269]" />
              <span>Opp. Wadi Police Station, Amravati Road</span>
            </div>
            <a
              href="tel:+917769956689"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>+91 77699 56689</span>
            </a>
          </div>

        </div>

        {/* Minimal Sub-Row */}
        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} JM FITNESS WADI. Cult.fit &bull; Apple Editorial Design Standard.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ff3269]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
