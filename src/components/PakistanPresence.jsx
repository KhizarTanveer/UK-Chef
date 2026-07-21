import React from 'react';
import { useGsapAnimation } from '../hooks/useGsapHooks';
import AnimatedCardBg from './AnimatedCardBg';

const PakistanPresence = () => {
  const containerRef = useGsapAnimation();

  return (
    <section className="section bg-light" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .contact-glass-card > * {
          position: relative;
          z-index: 1;
        }
        .contact-glass-card > svg {
          position: absolute !important;
          z-index: 0 !important;
        }
      `}</style>
      {/* Ambient background glows */}
      <div style={{ position: 'absolute', top: '10%', left: '40%', width: '500px', height: '500px', background: 'var(--color-brand-red)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '600px', height: '600px', background: 'var(--color-dark-gold)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="editorial-split">
          
          {/* Left Panel: The Map Hero */}
          <div className="gsap-fg" style={{ height: '100%' }}>
            <div className="network-hero-glass">
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Local Excellence</div>
                <h2 style={{ color: 'white', margin: 0, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1 }}>
                  Pakistan<br/>Distribution<br/>Network
                </h2>
                <div className="heading-accent" style={{ backgroundColor: 'var(--color-premium-gold)', marginTop: '2rem', marginBottom: '2rem', marginLeft: 0 }}></div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '300px' }}>
                  Operating from the heart of Pakistan, our robust infrastructure ensures premium spices reach every corner of the country and beyond.
                </p>
              </div>

              {/* Glowing Abstract Pakistan SVG */}
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', right: '-20%', top: '50%', transform: 'translateY(-50%)', opacity: 0.4, width: '450px', zIndex: 1 }}>
                <path d="M150,50 L220,10 L280,30 L320,120 L300,190 L350,270 L300,380 L200,390 L120,350 L70,280 L100,200 L120,150 Z" stroke="var(--color-premium-gold)" strokeWidth="1" fill="var(--color-premium-gold)" fillOpacity="0.05" />
                
                {/* Distribution Hub Nodes */}
                {/* Islamabad */}
                <circle cx="220" cy="80" r="4" fill="var(--color-premium-gold)" className="map-node" style={{ animationDelay: '0s' }} />
                <circle cx="220" cy="80" r="8" stroke="var(--color-premium-gold)" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                
                {/* Lahore */}
                <circle cx="280" cy="150" r="5" fill="var(--color-premium-gold)" className="map-node" style={{ animationDelay: '0.8s' }} />
                <circle cx="280" cy="150" r="10" stroke="var(--color-premium-gold)" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                
                {/* Multan */}
                <circle cx="220" cy="220" r="4" fill="var(--color-premium-gold)" className="map-node" style={{ animationDelay: '1.6s' }} />
                
                {/* Karachi */}
                <circle cx="160" cy="330" r="6" fill="var(--color-premium-gold)" className="map-node" style={{ animationDelay: '2.4s' }} />
                <circle cx="160" cy="330" r="12" stroke="var(--color-premium-gold)" strokeWidth="1" strokeOpacity="0.5" fill="none" />
              </svg>
            </div>
          </div>

          {/* Right Column: Distribution Channels */}
          <div className="gsap-mid" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="section-label">Global Reach</div>
            <h2>Export & Scale</h2>
            <div className="heading-accent" style={{ marginLeft: 0 }}></div>
            
            <p style={{ marginBottom: '40px', color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our nationwide footprint serves as the perfect launchpad for our international export capability, catering to diverse culinary sectors with unmatched quality.
            </p>

            <div className="network-cards-grid">
              
              {/* Households */}
              <div className="contact-glass-card network-hero-glass gsap-fg" style={{ padding: '30px', minHeight: 'auto', height: '100%' }}>
                <AnimatedCardBg i={0} />
                <div style={{ color: 'var(--color-premium-gold)', marginBottom: '15px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <div className="contact-card-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Consumer</div>
                <div className="contact-card-info" style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Households</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>Bringing authentic, premium taste to everyday family meals.</div>
              </div>

              {/* HORECA */}
              <div className="contact-glass-card network-hero-glass gsap-fg" style={{ padding: '30px', minHeight: 'auto', height: '100%' }}>
                <AnimatedCardBg i={1} />
                <div style={{ color: 'var(--color-premium-gold)', marginBottom: '15px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                </div>
                <div className="contact-card-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Commercial</div>
                <div className="contact-card-info" style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Restaurants & HORECA</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>The trusted, standardized choice for professional executive chefs.</div>
              </div>

              {/* Retailers */}
              <div className="contact-glass-card network-hero-glass gsap-fg" style={{ padding: '30px', minHeight: 'auto', height: '100%' }}>
                <AnimatedCardBg i={2} />
                <div style={{ color: 'var(--color-premium-gold)', marginBottom: '15px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <div className="contact-card-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Distribution</div>
                <div className="contact-card-info" style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Retailers & Wholesale</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>Reliable supply chains and beautiful, premium shelf packaging.</div>
              </div>

              {/* Food Businesses */}
              <div className="contact-glass-card network-hero-glass gsap-fg" style={{ padding: '30px', minHeight: 'auto', height: '100%' }}>
                <AnimatedCardBg i={3} />
                <div style={{ color: 'var(--color-premium-gold)', marginBottom: '15px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
                  </svg>
                </div>
                <div className="contact-card-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Industrial</div>
                <div className="contact-card-info" style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Food Businesses</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>Customized bulk supply solutions for large scale industrial use.</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PakistanPresence;
