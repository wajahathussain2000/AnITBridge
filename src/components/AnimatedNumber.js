import React, { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value, duration = 1500, prefix = '', suffix = '' }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef();

  useEffect(() => {
    let start = 0;
    const end = typeof value === 'number' ? value : parseInt(value.toString().replace(/[^\d]/g, ''));
    if (start === end) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplay(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        ref.current = requestAnimationFrame(step);
      } else {
        setDisplay(end);
      }
    };
    ref.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(ref.current);
  }, [value, duration]);

  // Format with commas
  const formatted = display.toLocaleString();
  return <span>{prefix}{formatted}{suffix}</span>;
};

export default AnimatedNumber; 