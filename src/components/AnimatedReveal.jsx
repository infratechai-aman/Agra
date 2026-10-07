import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-left', 'fade-right', 'scale', 'none'
  delay = 0,
  stagger = false,
  className = '',
  threshold = 0.12,
  as: Component = 'div',
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const animationClass = (() => {
    switch (animation) {
      case 'fade-left':
        return 'reveal-left';
      case 'fade-right':
        return 'reveal-right';
      case 'scale':
        return 'reveal-scale';
      case 'none':
        return '';
      case 'fade-up':
      default:
        return 'reveal';
    }
  })();

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Component
      ref={ref}
      style={delayStyle}
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      {...props}
    >
      {stagger && React.Children.count(children) > 0
        ? React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) return child;
            const staggerClass = `stagger-${Math.min(idx + 1, 8)}`;
            return React.cloneElement(child, {
              className: `${child.props.className || ''} ${staggerClass}`,
            });
          })
        : children}
    </Component>
  );
}
