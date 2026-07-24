import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapAnimation } from '../hooks/useGsapHooks';

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const containerRef = useGsapAnimation();
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Elegant Parallax effect for the background image
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="section" 
      ref={(el) => {
        sectionRef.current = el;
        containerRef.current = el;
      }} 
      style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}
    >
      {/* GSAP Parallax Background Layer */}
      <div 
        ref={bgRef}
        style={{ 
          position: 'absolute', 
          top: '-20%', left: 0, right: 0, bottom: '-20%', 
          backgroundImage: 'url(/assets/spice_collection.png)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />
      
      {/* Luxury Dark Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15, 10, 10, 0.9), rgba(40, 10, 10, 0.75), rgba(15, 10, 10, 0.9))', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 150px rgba(0,0,0,0.8)', zIndex: 1 }}></div>
      
      {/* Floating Ambient Particles */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'var(--color-brand-red)', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: 'var(--color-dark-gold)', filter: 'blur(120px)', opacity: 0.1, borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="grid-2" style={{ gap: '60px', alignItems: 'stretch' }}>
          
          {/* Mission Card */}
          <div className="mission-vision-card gsap-fg">
            <div className="mv-card-header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div className="section-label" style={{ margin: 0 }}>Core Purpose</div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <h2 style={{ color: 'white', margin: 0, fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>Our Mission</h2>
              <div className="heading-accent" style={{ marginBottom: 0, marginTop: '20px', marginLeft: 0 }}></div>
            </div>
            
            <div className="mv-card-body">
              <p style={{ marginBottom: '20px', color: 'white' }}>
                To provide pure and healthy products to customers all over Pakistan.  
              </p>
              <p style={{ margin: 0, color: 'white' }}>
                We strive to foster sustainable partnerships across our supply chain while maintaining uncompromising standards of hygiene and manufacturing excellence.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="mission-vision-card gsap-fg">
            <div className="mv-card-header">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                <div className="section-label" style={{ margin: 0 }}>Future Outlook</div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h2 style={{ color: 'white', margin: 0, fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>Our Vision</h2>
              <div className="heading-accent" style={{ marginBottom: 0, marginTop: '20px', marginLeft: 0 }}></div>
            </div>
            
            <div className="mv-card-body">
              <p style={{ margin: 0, color: 'white' }}>
                To become Pakistan's most trusted and leading food brand, recognized for our quality, integrity and innovaion.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
