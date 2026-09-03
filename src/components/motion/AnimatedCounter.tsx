import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = nodeRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const countObj = { val: from };
            animate(countObj, {
              val: to,
              duration,
              ease: 'outExpo',
              onUpdate: () => {
                if (element) {
                  const formatted = decimals > 0
                    ? countObj.val.toFixed(decimals)
                    : Math.round(countObj.val).toString();
                  element.textContent = `${prefix}${formatted}${suffix}`;
                }
              },
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [from, to, duration, decimals, prefix, suffix, hasAnimated]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{decimals > 0 ? from.toFixed(decimals) : from}{suffix}
    </span>
  );
};
