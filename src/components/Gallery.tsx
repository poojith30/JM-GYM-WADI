import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { TiltCard } from './motion/TiltCard';
import { MagneticButton } from './motion/MagneticButton';

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
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

interface GymPhoto {
  id: number;
  src: string;
  title: string;
  category: string;
}

const PHOTOS: GymPhoto[] = [
  {
    id: 1,
    src: '/gym/photo-1.jpg',
    title: 'Biomechanical Lineage Machines',
    category: 'Hypertrophy Floor',
  },
  {
    id: 2,
    src: '/gym/photo-2.jpg',
    title: 'Heavy Strength & Dumbbells',
    category: 'Free Weight Zone',
  },
  {
    id: 3,
    src: '/gym/photo-3.jpg',
    title: 'Olympic Lifting & Deadlift Stations',
    category: 'Power Rack Complex',
  },
  {
    id: 4,
    src: '/gym/photo-4.jpg',
    title: 'Multi-Cable & Functional Towers',
    category: 'Conditioning Rig',
  },
  {
    id: 5,
    src: '/gym/photo-5.jpg',
    title: 'Premium Cardio & Endurance Deck',
    category: 'Stamina Arena',
  },
  {
    id: 6,
    src: '/gym/photo-6.jpg',
    title: 'Dedicated Unisex Training Atmosphere',
    category: 'Wadi Main Floor',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: index % 2 === 0 ? 20 : -20,
    scale: 0.96,
    filter: 'blur(4px)',
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Gallery: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28 relative overflow-hidden bg-[#050507]">
      
      {/* Subtle Radial Glow in Cult.fit Coral Bloom */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff3269]/[0.05] blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-white/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
        >
          {/* Frosted Capsule Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs tracking-wider uppercase backdrop-blur-2xl mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3269]" />
            <span className="font-semibold text-white/90">
              HIGH-PERFORMANCE FACILITY &bull; WADI, NAGPUR
            </span>
          </div>

          {/* Section Title in Pure White, Editorial Tracked Tight */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-none">
            THE TRAINING <span className="text-white">FLOOR</span>
          </h2>

          {/* Subtitle in Muted Apple Graphite */}
          <p className="mt-4 sm:mt-5 text-zinc-400 text-base sm:text-lg font-normal tracking-tight">
            Real energy. Modern iron. Unmatched atmosphere.
          </p>
        </motion.div>

        {/* 3-Column Visual Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              custom={index}
              variants={itemVariants}
            >
              <TiltCard
                maxTilt={7}
                scaleHover={1.03}
                showShine={true}
                className="group bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.2] shadow-2xl transition-all duration-300"
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0b0b0e]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-106"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('.jpg.png')) {
                        target.src = `${photo.src}.png`;
                      }
                    }}
                  />

                  {/* Deep Obsidian Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Subtle Apple Top Edge Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500" />
                </div>

                {/* Bottom Card Meta Details */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10.5px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3269]" />
                      {photo.category}
                    </span>
                    
                    <span className="text-[10px] font-medium tracking-wider uppercase text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      JM WADI
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-base sm:text-lg text-white group-hover:text-white transition-colors duration-300 tracking-tight">
                    {photo.title}
                  </h3>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 border border-white/[0.08] hover:border-white/[0.18] bg-white/[0.03] backdrop-blur-2xl shadow-2xl shadow-black/90 overflow-hidden group transition-all duration-500">
            
            {/* Subtle Bloom behind card */}
            <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-[#ff3269]/[0.08] blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              
              {/* Left Brand info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 shadow-sm group-hover:scale-105 transition-all duration-300">
                  <InstagramIcon className="w-6 h-6 text-white group-hover:text-[#ff3269] transition-colors" />
                </div>

                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-white font-semibold text-sm tracking-tight">Official Community</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 text-[10px] font-medium">
                      Daily Floor Reels
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                    @jm_fitness_wadi
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-md font-normal">
                    Catch daily transformation stories, workout PRs, athlete spotlights, and training tips from our head coaches.
                  </p>
                </div>
              </div>

              {/* Right CTA Button: Cult.fit signature coral */}
              <MagneticButton
                href="https://instagram.com/jm_fitness_wadi"
                target="_blank"
                rel="noopener noreferrer"
                glowColor="rgba(255, 50, 105, 0.4)"
              >
                <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,50,105,0.35)] transition-all duration-250 cursor-pointer flex-shrink-0">
                  <InstagramIcon className="w-4 h-4 text-white" />
                  <span>Follow on Instagram</span>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-80" />
                </div>
              </MagneticButton>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
