import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollHeight;
      if (progressRef.current) {
        gsap.to(progressRef.current, { scaleY: progress, duration: 0.1, ease: "none" });
      }
    };
    
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, width: '4px', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.1)', zIndex: 9999
    }}>
      <div 
        ref={progressRef}
        style={{
          width: '100%', height: '100%', backgroundColor: 'var(--color-premium-gold)',
          transformOrigin: 'top', transform: 'scaleY(0)'
        }} 
      />
    </div>
  );
};

export default ScrollProgress;
