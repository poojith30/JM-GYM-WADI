import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-black/40 backdrop-blur-sm">
      <motion.div
        className="h-full bg-gradient-to-r from-[#ff3269] via-[#ff2442] to-white origin-left shadow-[0_0_15px_rgba(255,50,105,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
