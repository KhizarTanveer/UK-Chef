import React, { useEffect, useRef } from "react";

const AnimatedCardBg = ({ i = 0 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Unpause SVG animations when visible
          if (svgRef.current.unpauseAnimations) {
            svgRef.current.unpauseAnimations();
          }
        } else {
          // Pause SVG animations when out of viewport to save CPU/GPU
          if (svgRef.current.pauseAnimations) {
            svgRef.current.pauseAnimations();
          }
        }
      });
    }, {
      rootMargin: "100px", // pre-load slightly before coming into view
      threshold: 0
    });

    observer.observe(svgRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <svg 
      ref={svgRef}
      width="100%" 
      height="100%" 
      viewBox="0 0 400 300" 
      preserveAspectRatio="xMidYMid slice" 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        opacity: 0.25, 
        zIndex: 0, 
        pointerEvents: 'none',
        // Force hardware acceleration and composite layer separation
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <path d="M-20,150 L100,50 L250,90 L380,40 L450,180 L300,280 L120,240 Z" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5" strokeOpacity="0.85" />
      <path d="M100,50 L300,280 M250,90 L120,240 M-20,150 L250,90" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
      
      <circle cx="100" cy="50" r="5" fill="var(--color-premium-gold)" />
      <circle cx="250" cy="90" r="6" fill="var(--color-premium-gold)" />
      <circle cx="380" cy="40" r="5" fill="var(--color-premium-gold)" />
      <circle cx="300" cy="280" r="7" fill="var(--color-premium-gold)" />
      <circle cx="120" cy="240" r="5" fill="var(--color-premium-gold)" />

      <circle cx="250" cy="90" r="6" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1">
        <animate attributeName="r" values="6;22;6" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="280" r="7" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1">
        <animate attributeName="r" values="7;28;7" dur="7s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0" dur="7s" repeatCount="indefinite" />
      </circle>

      <circle r="5" fill="#ffffff" filter="drop-shadow(0 0 5px rgba(255,255,255,0.9))">
        <animateMotion dur={`${15 + (i % 3) * 5}s`} repeatCount="indefinite" path="M-20,150 L100,50 L250,90 L380,40 L450,180 L300,280 L120,240 Z" />
      </circle>
      <circle r="4" fill="var(--color-premium-gold)">
        <animateMotion dur={`${20 - (i % 2) * 3}s`} repeatCount="indefinite" path="M-20,150 L100,50 L250,90 L380,40 L450,180 L300,280 L120,240 Z" keyPoints="1;0" keyTimes="0;1" calcMode="linear" />
      </circle>
      <circle r="4.5" fill="var(--color-premium-gold)" filter="drop-shadow(0 0 3px var(--color-premium-gold))">
        <animateMotion dur={`${12 + (i % 2) * 4}s`} repeatCount="indefinite" path="M100,50 L300,280 L120,240 L250,90 Z" />
      </circle>
      <circle r="3.5" fill="#ffffff">
        <animateMotion dur={`${10 + i % 4}s`} repeatCount="indefinite" path="M-20,150 L100,50 L250,90 L380,40 L450,180 L300,280 L120,240 Z" />
      </circle>

      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-15; 0,0" dur="8s" repeatCount="indefinite" />
        <circle cx="60" cy="80" r="2.5" fill="var(--color-premium-gold)">
          <animate attributeName="opacity" values="0.1; 0.8; 0.1" dur="8s" repeatCount="indefinite" />
        </circle>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-20; 0,0" dur="12s" repeatCount="indefinite" />
        <circle cx="340" cy="180" r="3" fill="var(--color-premium-gold)">
          <animate attributeName="opacity" values="0.1; 0.6; 0.1" dur="12s" repeatCount="indefinite" />
        </circle>
      </g>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="6s" repeatCount="indefinite" />
        <circle cx="160" cy="200" r="2" fill="var(--color-premium-gold)">
          <animate attributeName="opacity" values="0.2; 0.7; 0.2" dur="6s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
};

export default AnimatedCardBg;
