import React from 'react';
import { useGsapAnimation } from '../hooks/useGsapHooks';

const CorporateStrengths = () => {
  const containerRef = useGsapAnimation();
  const strengths = [
    { title: "Trusted Pakistani Manufacturer", desc: "Deep roots in Pakistan's Product heritage." },
    { title: "Premium Ingredients", desc: "Sourcing only the finest crops." },
    { title: "Rich Aroma", desc: "Preserving natural essential oils." },
    { title: "Advanced Processing", desc: "State-of-the-art hygienic milling." },
    { title: "Reliable Supply Chain", desc: "Uninterrupted Local distribution." },
    { title: "Customer Satisfaction", desc: "Preferred by top culinary professionals." },
    { title: "Consistent Taste", desc: "Standardized flavor profiles year-round." },
    { title: "Hygienic Packaging", desc: "Tamper-proof, food-grade materials." }
  ];

  const getBentoClass = (index) => {
    if (index === 0) return 'span-2-col';
    if (index === 2) return 'span-2-row';
    if (index === 4) return 'span-2-col';
    if (index === 5) return 'span-2-col';
    return '';
  };

  const getBorderRadius = (index) => {
    const radii = [
      '24px', '28px', '32px 24px 24px 32px', '24px 32px 32px 24px', '28px'
    ];
    return radii[index % radii.length];
  };

  return (
    <section className="section bg-light" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hide the default white glow overlay from bento-glass-card for these dark cards */}
      <style>{`
        .bento-glass-card.quality-cert-card::before { display: none !important; }
        .why-choose-image {
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          object-position: center;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
          margin-bottom: 32px;
        }
        @media (max-width: 768px) {
          .why-choose-image {
            border-radius: 12px;
          }
        }
      `}</style>
      
      {/* Ambient glowing orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px', background: 'var(--color-brand-red)', filter: 'blur(150px)', opacity: 0.08, borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'var(--color-dark-gold)', filter: 'blur(180px)', opacity: 0.06, borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="gsap-mid" style={{ textAlign: 'center', marginBottom: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Core Strengths</div>
          <h2 style={{ color: '#21573cff' }}>Why Choose UK Chef</h2>
          <div className="heading-accent"></div>
        </div>

        <div className="gsap-mid" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/assets/why-choose-us.png" 
            alt="Why Choose UK Chef" 
            className="why-choose-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <div className="bento-grid">
          {strengths.map((s, i) => (
            <div 
              key={i} 
              className={`bento-glass-card quality-cert-card gsap-fg ${getBentoClass(i)}`}
              style={{ 
                borderRadius: getBorderRadius(i),
                background: 'linear-gradient(135deg, #051A10 0%, #082818 50%, #062013 100%)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.1), 0 20px 50px rgba(0,0,0,0.25)',
                padding: '40px'
              }}
            >
              {/* Hexagon Noise Overlay */}
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.04, pointerEvents: 'none', zIndex: 0 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`hexagons-cs-${i}`} width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                    <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="#FFFFFF" strokeWidth="1.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#hexagons-cs-${i})`} />
              </svg>

              <div className="bento-badge" style={{ zIndex: 1, position: 'absolute', opacity: 1, color: 'white' }}>{(i + 1).toString().padStart(2, '0')}</div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateStrengths;
