import React from 'react';

const QualityAssurance = () => {
  return (
    <section className="section quality-hero-bg">
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
          <div style={{ paddingRight: '20px' }}>
            <div className="section-label" style={{ color: 'var(--color-premium-gold)', marginBottom: '15px' }}>International Standards</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '20px' }}>
              World-Class<br/>Quality Assurance
            </h2>
            <div className="heading-accent" style={{ backgroundColor: 'var(--color-premium-gold)', marginLeft: 0, marginBottom: '30px' }}></div>
            
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our commitment to food safety is absolute. Equipped with advanced laboratory technology, our quality assurance teams conduct rigorous testing on every single batch, from raw material procurement to final packaging.
            </p>
            
            {/* The Luxury Quote */}
            <div className="quality-quote-card">
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
              <div className="quality-cert-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-heading)' }}>100%</div>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>Quality Checked</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Every batch undergoes full lab analysis.</p>
              </div>

              {/* Card 2: 24/7 Monitoring */}
              <div className="quality-cert-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: 'white', fontFamily: 'var(--font-heading)' }}>24/7</div>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>Constant Monitoring</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>Round-the-clock environmental control.</p>
              </div>

              {/* Card 3: ISO */}
              <div className="quality-cert-card" style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 30px' }}>
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-premium-gold)" strokeWidth="1">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                 </svg>
                 <div>
                   <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '5px' }}>Pakistan Food Authority Certified</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}></p>
                 </div>
              </div>

            </div>
          </div>

          {/* Right Side: The Glass Framed Image */}
          <div style={{ width: '100%' }}>
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
