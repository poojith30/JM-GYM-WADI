import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative bg-[#050507]">
      <div className="max-w-6xl mx-auto">
        
        {/* Apple-Style Frosted Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-300"
        >
          {/* Header */}
          <div className="text-center sm:text-left mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#ff3269]" />
              Strategic Location
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-tight">
              FIND THE <span className="text-white">CLUB</span>
            </h2>

            <p className="mt-2 text-zinc-400 text-sm sm:text-base font-normal tracking-tight">
              Centrally located on Amravati Road, opposite Wadi Police Station.
            </p>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-white/10 relative shadow-inner bg-[#0b0b0e]">
            <iframe
              src="https://maps.google.com/maps?q=JM%20Fitness%20Wadi%20Nagpur%20Amravati%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JM Fitness Wadi Google Map Location"
              className="w-full h-full rounded-2xl filter grayscale contrast-125 hover:filter-none transition-all duration-500"
            />
          </div>

          {/* Quick Info & Action Bar Below Map */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-[#ff3269]" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-semibold tracking-wider mb-0.5">
                  Official Landmark & Address
                </p>
                <p className="text-sm text-white font-medium">
                  Plot No. 13, Shivshakti Nagar, Opp. Wadi Police Station, Amravati Road, Dattawadi, Wadi, Nagpur – 440021
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=JM+Fitness+Wadi+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-semibold tracking-wider uppercase border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer shadow-md flex-shrink-0 group"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#ff3269] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
