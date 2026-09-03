import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scaleHover?: number;
  showShine?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 7,
  scaleHover = 1.03,
  showShine = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shinePos, setShinePos] = useState({ x: 50, y: 50 });

  // Smooth spring physics for rotation
  const mouseX = useSpring(0, { stiffness: 260, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 260, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = x / rect.width - 0.5;
    const normalizedY = y / rect.height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    if (showShine) {
      setShinePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: scaleHover }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300 ${className}`}
      >
        {/* Children content */}
        <div style={{ transform: 'translateZ(18px)' }} className="relative z-10 w-full h-full">
          {children}
        </div>

        {/* Dynamic cursor-following shine glare */}
        {showShine && (
          <div
            className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 260px at ${shinePos.x}% ${shinePos.y}%, rgba(255, 255, 255, 0.08), transparent 80%)`,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};
