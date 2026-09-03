import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Star, 
  Clock, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  ChevronDown
} from 'lucide-react';
import { AmbientOrbs } from './motion/AmbientOrbs';
import { MagneticButton } from './motion/MagneticButton';
import { AnimatedCounter } from './motion/AnimatedCounter';

const wordVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 35, 
    filter: 'blur(8px)' 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 sm:pt-40 sm:pb-28 flex flex-col justify-center items-center overflow-hidden bg-[#050507]">
      
      {/* High-End Radial Bloom (rgba(255, 50, 105, 0.12) fading completely into #050507) */}
      <AmbientOrbs intensity="high" />

      {/* Subtle Apple Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Sleek Frosted Capsule Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs tracking-wider uppercase backdrop-blur-2xl mb-8 shadow-sm"
        >
          {/* Animated Cult.fit Coral Dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3269] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3269]" />
          </span>

          <span className="font-semibold text-white/90 flex items-center gap-1.5">
            <span className="text-[#ff3269]">★ 4.9</span> PREMIER ATHLETIC CLUB &bull; WADI, NAGPUR
          </span>
        </motion.div>

        {/* Massive Editorial Headline in Pure White (#ffffff), tracked tight */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] text-white max-w-5xl flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 overflow-hidden py-1">
            <motion.span
              custom={0}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-white"
            >
              FORGE
            </motion.span>
            <motion.span
              custom={1}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-white"
            >
              YOUR
            </motion.span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 overflow-hidden py-1 mt-1">
            <motion.span
              custom={2}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-[#ff3269]"
            >
              ULTIMATE
            </motion.span>
            <motion.span
              custom={3}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-white"
            >
              PHYSIQUE
            </motion.span>
          </div>
        </h1>

        {/* Subtitle in Muted Apple Graphite */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed tracking-tight"
        >
          Experience Wadi’s most advanced athletic floor. Certified body transformation coaches, elite biomechanical equipment, and tailored sports nutrition plans.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action Button: Solid Cult.fit Signature Coral */}
          <MagneticButton
            href="#book"
            glowColor="rgba(255, 50, 105, 0.45)"
            className="w-full sm:w-auto"
          >
            <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white font-semibold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_25px_rgba(255,50,105,0.35)] hover:shadow-[0_0_35px_rgba(255,50,105,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-250 cursor-pointer">
              <Flame className="w-5 h-5 text-white fill-white" />
              <span>CLAIM 1-DAY VIP PASS</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </MagneticButton>

          {/* Secondary / Ghost Button: Apple-Style Pill Button */}
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-sm sm:text-base tracking-wider uppercase border border-white/10 backdrop-blur-md transition-all duration-250 cursor-pointer shadow-lg"
          >
            <span>EXPLORE AMENITIES</span>
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </motion.a>
        </motion.div>

        {/* Quick Trust Metrics Strip in Apple-Grade Frosted Glass */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {/* Metric 1: 4.9★ Google Rating */}
          <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden group shadow-lg">
            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Star className="w-4 h-4 text-[#ff3269] fill-[#ff3269]" />
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                <AnimatedCounter to={4.9} decimals={1} suffix="★" duration={2200} />
              </span>
            </div>
            <div className="font-semibold text-xs sm:text-sm text-white tracking-wide uppercase">
              Google Rating
            </div>
            <div className="text-[11px] text-zinc-500 mt-1 font-normal">
              Wadi & Nagpur Athletes
            </div>
          </div>

          {/* Metric 2: 5 AM - 10 PM Split Shifts */}
          <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden group shadow-lg">
            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                5 AM – 10 PM
              </span>
            </div>
            <div className="font-semibold text-xs sm:text-sm text-white tracking-wide uppercase">
              Split Shifts Available
            </div>
            <div className="text-[11px] text-zinc-500 mt-1 font-normal">
              Morning & Evening Batches
            </div>
          </div>

          {/* Metric 3: Certified Personal Coaches */}
          <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden group shadow-lg">
            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Certified
              </span>
            </div>
            <div className="font-semibold text-xs sm:text-sm text-white tracking-wide uppercase">
              Personal Coaches
            </div>
            <div className="text-[11px] text-zinc-500 mt-1 font-normal">
              Custom Form & Hypertrophy
            </div>
          </div>

          {/* Metric 4: 100% Sanitized & Modern */}
          <div className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300 flex flex-col items-center sm:items-start text-center sm:text-left relative overflow-hidden group shadow-lg">
            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                100%
              </span>
            </div>
            <div className="font-semibold text-xs sm:text-sm text-white tracking-wide uppercase">
              Sanitized & Modern
            </div>
            <div className="text-[11px] text-zinc-500 mt-1 font-normal">
              Biomechanical Lineage
            </div>
          </div>
        </motion.div>

      </div>

      {/* Downward Scroll Indicator */}
      <motion.a
        href="#experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        aria-label="Scroll to experience"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors hidden md:block cursor-pointer"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.a>

    </section>
  );
};
