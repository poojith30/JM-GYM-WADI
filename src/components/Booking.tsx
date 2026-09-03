import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, CheckCircle2, MessageCircle, ArrowRight, Sparkles, User, Phone, Target, Clock } from 'lucide-react';
import { MagneticButton } from './motion/MagneticButton';

export const Booking: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Muscle Building & Hypertrophy');
  const [shift, setShift] = useState('Evening Shift (4:00 PM – 10:00 PM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    // Construct WhatsApp message exactly as specified
    const message = `Hello JM Fitness! I would like to schedule a gym visit.%0A%0A👤 *Name:* ${encodeURIComponent(fullName.trim())}%0A📞 *Phone:* ${encodeURIComponent(phone.trim())}%0A🎯 *Goal:* ${encodeURIComponent(goal)}%0A⏰ *Shift:* ${encodeURIComponent(shift)}`;
    const url = `https://wa.me/917769956689?text=${message}`;

    setTimeout(() => {
      window.open(url, '_blank');
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <section id="book" className="scroll-mt-24 py-20 sm:py-28 relative overflow-hidden bg-[#050507]">
      {/* Invisible anchor for backward compatibility */}
      <span id="book-tour" className="absolute -top-24" />

      {/* Subtle Radial Coral Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#ff3269]/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#ff3269]" />
            Direct Front-Desk Scheduling
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
            SCHEDULE YOUR <span className="text-white">VISIT</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-normal tracking-tight max-w-xl mx-auto">
            Step onto the floor. Experience modern iron and certified coaching in person.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 relative transition-all duration-300">
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 px-4 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ff3269]/10 border border-[#ff3269]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,50,105,0.25)]">
                    <CheckCircle2 className="w-8 h-8 text-[#ff3269]" />
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight uppercase mb-2">
                    Slot Request Prepared
                  </h3>

                  <p className="text-zinc-300 text-sm max-w-md leading-relaxed font-normal mb-8">
                    Redirecting to WhatsApp to confirm your slot with the front desk...
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 transition-colors"
                    >
                      Book Another Slot
                    </button>
                    <a
                      href={`https://wa.me/917769956689?text=Hello%20JM%20Fitness!%20I%20would%20like%20to%20schedule%20a%20gym%20visit.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(255,50,105,0.35)] transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      Open WhatsApp Again
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#ff3269]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aryan Sharma"
                      className="w-full bg-white/[0.04] border border-white/10 text-white rounded-xl p-4 text-sm focus:border-[#ff3269] focus:outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#ff3269]" />
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white/[0.04] border border-white/10 text-white rounded-xl p-4 text-sm focus:border-[#ff3269] focus:outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Two-Column Grid: Goal & Shift */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Fitness Goal */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-[#ff3269]" />
                        Fitness Goal
                      </label>
                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full bg-[#0b0b0e] border border-white/10 text-white rounded-xl p-4 text-sm focus:border-[#ff3269] focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                        <option value="Fat Loss & Conditioning">Fat Loss & Conditioning</option>
                        <option value="Functional Athletic Strength">Functional Athletic Strength</option>
                        <option value="General Fitness">General Fitness</option>
                      </select>
                    </div>

                    {/* Preferred Shift */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#ff3269]" />
                        Preferred Shift
                      </label>
                      <select
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        className="w-full bg-[#0b0b0e] border border-white/10 text-white rounded-xl p-4 text-sm focus:border-[#ff3269] focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="Morning Shift (5:00 AM – 11:00 AM)">Morning Shift (5:00 AM – 11:00 AM)</option>
                        <option value="Evening Shift (4:00 PM – 10:00 PM)">Evening Shift (4:00 PM – 10:00 PM)</option>
                      </select>
                    </div>

                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <MagneticButton as="div" glowColor="rgba(255, 50, 105, 0.45)" className="w-full">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#ff3269] hover:bg-[#ff2442] text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,50,105,0.35)] hover:shadow-[0_0_35px_rgba(255,50,105,0.5)] transition-all cursor-pointer disabled:opacity-50"
                      >
                        <MessageCircle className="w-4 h-4 fill-white text-white" />
                        <span>{isSubmitting ? 'Preparing WhatsApp...' : 'Confirm 1-Day VIP Pass on WhatsApp'}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </MagneticButton>
                  </div>

                  {/* Trust Micro-Note */}
                  <div className="pt-2 text-center text-[11.5px] text-zinc-500 flex items-center justify-center gap-2 font-normal">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff3269]" />
                    <span>Free orientation &bull; Zero credit card needed &bull; Instant front-desk reply</span>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
