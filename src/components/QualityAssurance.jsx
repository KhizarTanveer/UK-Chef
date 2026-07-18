import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGsapAnimation } from '../hooks/useGsapHooks';

gsap.registerPlugin(ScrollTrigger);

const QualityAssurance = () => {
  const containerRef = useGsapAnimation();
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        onEnter: () => {
          // Counter 1: 0 to 100
          gsap.fromTo(counter1Ref.current, 
            { innerHTML: 0 }, 
            { 
              innerHTML: 100, 
              duration: 2.5, 
              ease: "power3.out",
              snap: { innerHTML: 1 },
              onUpdate: function() {
                if (counter1Ref.current) {
                  counter1Ref.current.innerHTML = Math.round(this.targets()[0].innerHTML) + "%";
                }
              }
            }
          );
          
          // Counter 2: 0 to 24
          gsap.fromTo(counter2Ref.current, 
            { innerHTML: 0 }, 
            { 
              innerHTML: 24, 
              duration: 3, 
              ease: "power3.out",
              snap: { innerHTML: 1 },
              onUpdate: function() {
                if (counter2Ref.current) {
                  counter2Ref.current.innerHTML = Math.round(this.targets()[0].innerHTML) + "/7";
                }
              }
            }
          );
        },
        once: true
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section quality-hero-bg" ref={containerRef}>
      {/* Subtle SVG Molecular Grid overlay */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.03, pointerEvents: 'none', zIndex: 1 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="#FFFFFF" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="editorial-split" style={{ gap: '80px', alignItems: 'center' }}>
          
          {/* Left Side: Information */}
          <div className="gsap-mid" style={{ paddingRight: '20px' }}>
            <div className="section-label" style={{ color: 'var(--color-premium-gold)', marginBottom: '15px' }}>International Standards</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '20px' }}>
              World-Class<br/>Quality Assurance
            </h2>
            <div className="heading-accent" style={{ backgroundColor: 'var(--color-premium-gold)', marginLeft: 0, marginBottom: '30px' }}></div>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our commitment to food safety is absolute. Equipped with advanced laboratory technology, our quality assurance teams conduct rigorous testing on every single batch, from raw material procurement to final packaging.
            </p>
            
            {/* The Luxury Quote */}
            <div className="quality-quote-card gsap-fg">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1" style={{ position: 'absolute', top: '-16px', left: '30px', background: '#051A10', padding: '0 10px' }}>
                <path d="M8 15A5 5 0 1 0 8 5H5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h3zm11 0a5 5 0 1 0 0-10h-3a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h3z"/>
              </svg>
              <div style={{ fontSize: '1.2rem', lineHeight: 1.6, fontStyle: 'italic', fontWeight: 300 }}>
                "Every product undergoes strict microbiological and chemical analysis to ensure unmatched purity and compliance with global safety standards."
              </div>
            </div>
            
            {/* Certification Grid */}
            <div className="quality-cert-grid">
              
              {/* Card 1: 100% Tested */}
              <div className="quality-cert-card gsap-fg">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <div ref={counter1Ref} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-heading)' }}>0%</div>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>Quality Checked</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Every batch undergoes full lab analysis.</p>
              </div>

              {/* Card 2: 24/7 Monitoring */}
              <div className="quality-cert-card gsap-fg">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div ref={counter2Ref} style={{ fontSize: '2rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-heading)' }}>0/7</div>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>Constant Monitoring</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Round-the-clock environmental control.</p>
              </div>

              {/* Card 3: ISO */}
              <div className="quality-cert-card gsap-fg" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 30px' }}>
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                 </svg>
                 <div>
                   <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>Internationally Certified</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>FSSAI, ISO 22000, and fully HACCP compliant facility.</p>
                 </div>
              </div>

            </div>
          </div>

          {/* Right Side: The Glass Framed Image */}
          <div className="gsap-bg" style={{ width: '100%' }}>
            <div className="quality-glass-frame">
              <img 
                src="https://res.cloudinary.com/dwgwwlbrg/image/upload/v1784385377/da5c3c2c-ed02-473b-8179-ea1b4b959e9e_xebqec.png" 
                alt="Quality Assurance Laboratory" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
