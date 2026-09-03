import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  pullStrength?: number;
  glowColor?: string;
  as?: 'a' | 'button' | 'div';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
  pullStrength = 0.35,
  glowColor = 'rgba(255, 50, 105, 0.4)',
  as,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Spring physics for smooth magnetic attraction
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * pullStrength;
    const deltaY = (e.clientY - centerY) * pullStrength;

    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      style={{
        boxShadow: isHovered ? `0 0 30px ${glowColor}` : 'none',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`relative inline-flex items-center justify-center transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );

  const shouldRenderAsDiv = as === 'div' || (!href && !onClick);

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block relative z-20"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className="inline-block cursor-pointer focus:outline-none"
        >
          {content}
        </a>
      ) : shouldRenderAsDiv ? (
        <div className="inline-block cursor-pointer focus:outline-none">
          {content}
        </div>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="inline-block cursor-pointer focus:outline-none"
        >
          {content}
        </button>
      )}
    </motion.div>
  );
};
