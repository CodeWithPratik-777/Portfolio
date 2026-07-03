import React, { useEffect, useRef, useState } from 'react';

export default function ScrollAnimation({ children, className = '', threshold = 0.6 }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true); 
          }
        });
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated, threshold]);

  return (
    <div
      ref={ref}
      className={`${className} ${hasAnimated ? 'animate__animated animate__fadeIn' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
