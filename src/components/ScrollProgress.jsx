import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-[100] pointer-events-none transition-all duration-150 ease-out"
      style={{
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, #775a19, #C9A45C, #FDD487)',
        boxShadow: '0 0 10px rgba(201, 164, 92, 0.7), 0 0 20px rgba(201, 164, 92, 0.4)'
      }}
    />
  );
}
