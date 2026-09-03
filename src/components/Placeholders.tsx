import React from 'react';
import { motion } from 'framer-motion';
import { 
  Dumbbell, 
  Sparkles, 
  Users, 
  Flame, 
  CheckCircle2, 
  Star
} from 'lucide-react';
import { TiltCard } from './motion/TiltCard';
import { MagneticButton } from './motion/MagneticButton';
import { AnimatedCounter } from './motion/AnimatedCounter';
import { AmbientOrbs } from './motion/AmbientOrbs';

export const Placeholders: React.FC = () => {
  return (
    <div className="space-y-24 sm:space-y-36 py-16 sm:py-28 relative">
      
      {/* 1. AMENITIES & TRAINING STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3269]" />
            The Wadi Training Standard
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            ELITE TRAINING <span className="text-white">EXPERIENCE</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-normal tracking-tight">
            Engineered for beginners to elite powerlifters. Explore high-performance zones built for heavy lifting, functional endurance, and rapid hypertrophy.
          </p>
        </motion.div>

        {/* Feature Highlights Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard maxTilt={6} scaleHover={1.03} className="p-8 h-full flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 text-white">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">Heavy Strength & Free Weights</h3>
              <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed font-normal">
                Heavy-duty Olympic bars, calibrated plates, dedicated deadlift platforms, and dumbbells ranging from beginner to advanced poundage.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> Zero Waiting Time Floor Plan
            </div>
          </TiltCard>

          <TiltCard maxTilt={6} scaleHover={1.03} className="p-8 h-full flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 text-white">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">Dedicated Unisex Floor</h3>
              <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed font-normal">
                Safe, respectful, and motivating training environment with dedicated certified male and female trainers for personal attention.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> Morning & Evening Dedicated Shifts
            </div>
          </TiltCard>

          <TiltCard maxTilt={6} scaleHover={1.03} className="p-8 h-full flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 text-white">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-tight">Custom Sports Nutrition</h3>
              <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed font-normal">
                Macro-tailored diet consultations, body composition metrics, and supplement guidance aligned strictly with your physique goals.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> In-House Nutrition Consultation
            </div>
          </TiltCard>
        </div>
      </section>

      {/* 2. REVIEWS SECTION (#reviews) with Anime.js Counter & 3D Tilt */}
      <section id="reviews" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-sm">
            <Star className="w-3.5 h-3.5 fill-[#ff3269] text-[#ff3269]" />
            <span>
              <AnimatedCounter to={90} suffix="+ Verified Google Reviews" duration={2400} />
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            RATED 4.9★ BY <span className="text-white">NAGPUR ATHLETES</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-normal tracking-tight">
            Real transformations, disciplined coaching, and an unmatched athletic vibe in the heart of Wadi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Rahul Meshram',
              tag: 'Lost 14kg in 4 Months',
              text: 'Best gym in Wadi Nagpur hands down! The trainers guide you every day with correct form and diet plan. Equipment is always clean and well maintained.',
              rating: 5,
            },
            {
              name: 'Sneha Sharma',
              tag: 'Strength & Conditioning',
              text: 'Extremely safe and comfortable unisex gym in Wadi. Both morning and evening batches have great supportive coaches who genuinely care about your progress.',
              rating: 5,
            },
            {
              name: 'Amit Deshmukh',
              tag: 'Hypertrophy & Power',
              text: 'The vibe here hits different! From heavy dumbbells to biomechanical machines, JM Fitness delivers premium quality at super competitive prices.',
              rating: 5,
            }
          ].map((item, i) => (
            <TiltCard
              key={i}
              maxTilt={7}
              scaleHover={1.03}
              className="p-6 sm:p-8 h-full flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(item.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#ff3269] text-[#ff3269]" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed italic font-normal">
                  "{item.text}"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-white text-base tracking-tight">{item.name}</div>
                  <div className="text-zinc-400 text-xs font-normal mt-0.5">{item.tag}</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* 3. MEMBERSHIPS & PLANS SECTION (#memberships) */}
      <section id="memberships" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AmbientOrbs intensity="medium" />

        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-sm">
            <Flame className="w-3.5 h-3.5 text-[#ff3269]" />
            Transparent Pricing
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white">
            SELECT YOUR <span className="text-white">TRAINING TIER</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-normal tracking-tight">
            No hidden charges. Full access to training floor, cardio deck, locker facilities, and trainer orientation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Quarterly Plan */}
          <TiltCard
            maxTilt={6}
            scaleHover={1.03}
            className="p-8 h-full flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Quarterly</div>
              <h3 className="font-display font-extrabold text-2xl text-white mt-1 tracking-tight">3 MONTH PASS</h3>
              <p className="mt-2 text-zinc-400 text-xs font-normal">Ideal for habit formation and foundational hypertrophy.</p>
              <ul className="mt-6 space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Full Floor & Cardio Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Initial Diet Charting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Locker & Shower Facilities</li>
              </ul>
            </div>
            <a
              href="https://wa.me/917769956689?text=Hi%20JM%20Fitness,%20I%20am%20interested%20in%20the%203%20Month%20Pass."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full text-center py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10 block"
            >
              Inquire Quarterly Plan
            </a>
          </TiltCard>

          {/* Half Yearly Plan - Featured VIP with Cult.fit Signature Coral */}
          <TiltCard
            maxTilt={7}
            scaleHover={1.03}
            className="bg-white/[0.05] backdrop-blur-2xl border border-white/20 p-8 h-full flex flex-col justify-between relative shadow-2xl"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#ff3269] text-white font-bold text-[10px] tracking-widest uppercase shadow-md">
              MOST POPULAR
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#ff3269]">Half-Yearly</div>
              <h3 className="font-display font-extrabold text-2xl text-white mt-1 tracking-tight">6 MONTH PASS</h3>
              <p className="mt-2 text-zinc-400 text-xs font-normal">Recommended for sustained athletic body recomposition.</p>
              <ul className="mt-6 space-y-3 text-xs text-zinc-200">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> Full Access All Shifts (5am - 10pm)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> Monthly Body Composition Scan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> Bi-weekly Workout Adjustments</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#ff3269]" /> 1-on-1 Nutrition Guidance</li>
              </ul>
            </div>
            
            <div className="mt-8 w-full">
              <MagneticButton
                href="https://wa.me/917769956689?text=Hi%20JM%20Fitness,%20I%20am%20interested%20in%20the%206%20Month%20Pass."
                target="_blank"
                rel="noopener noreferrer"
                glowColor="rgba(255, 50, 105, 0.45)"
                className="w-full"
              >
                <div className="w-full text-center py-3.5 px-4 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white font-semibold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,50,105,0.35)] hover:shadow-[0_0_35px_rgba(255,50,105,0.5)] transition-all">
                  Claim VIP Membership
                </div>
              </MagneticButton>
            </div>
          </TiltCard>

          {/* Annual Plan */}
          <TiltCard
            maxTilt={6}
            scaleHover={1.03}
            className="p-8 h-full flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Annual VIP</div>
              <h3 className="font-display font-extrabold text-2xl text-white mt-1 tracking-tight">12 MONTH TRANSFORMATION</h3>
              <p className="mt-2 text-zinc-400 text-xs font-normal">Maximum cost savings and year-round peak physical condition.</p>
              <ul className="mt-6 space-y-3 text-xs text-zinc-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Unrestricted 365 Days Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Dedicated Coach Assignment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Full Sports Nutrition Program</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white" /> Guest VIP Passes Included</li>
              </ul>
            </div>
            <a
              href="https://wa.me/917769956689?text=Hi%20JM%20Fitness,%20I%20am%20interested%20in%20the%2012%20Month%20VIP%20Pass."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full text-center py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10 block"
            >
              Inquire Annual Plan
            </a>
          </TiltCard>
        </div>
      </section>

    </div>
  );
};

