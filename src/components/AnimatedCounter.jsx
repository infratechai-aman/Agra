import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({
  target, // e.g. "1968", "40+", "500k+", "3rd", "55+"
  duration = 1800,
  className = '',
}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(target);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setDisplayValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(el);

          // Parse numeric part and suffix
          const targetStr = String(target).trim();
          const match = targetStr.match(/^(\d+(?:\.\d+)?)(.*)$/);

          if (!match) {
            setDisplayValue(target);
            return;
          }

          const targetNum = parseFloat(match[1]);
          const suffix = match[2] || '';
          const isDecimal = targetStr.includes('.');

          const startTime = performance.now();
          const startNum = targetNum > 1900 ? 1920 : 0; // Better starting point for years

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = startNum + (targetNum - startNum) * easeOut;

            if (isDecimal) {
              setDisplayValue(`${currentNum.toFixed(1)}${suffix}`);
            } else {
              setDisplayValue(`${Math.round(currentNum)}${suffix}`);
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(targetStr);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
