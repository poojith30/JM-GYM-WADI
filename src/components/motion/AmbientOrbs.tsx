import React from 'react';
import { motion } from 'framer-motion';

interface AmbientOrbsProps {
  intensity?: 'high' | 'medium';
}

export const AmbientOrbs: React.FC<AmbientOrbsProps> = ({ intensity = 'high' }) => {
  const opacityCoral = intensity === 'high' ? 'opacity-100' : 'opacity-70';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Cult.fit Signature Radial Bloom: rgba(255, 50, 105, 0.12) fading completely into #050507 */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/6 left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full blur-[140px] pointer-events-none ${opacityCoral}`}
        style={{
          background: 'radial-gradient(circle, rgba(255, 50, 105, 0.12) 0%, rgba(255, 36, 66, 0.05) 50%, transparent 75%)',
        }}
      />

      {/* Subtle Apple-style Platinum Ambient Light */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[450px] rounded-full blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};
