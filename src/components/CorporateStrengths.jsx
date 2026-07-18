import React from 'react';
import { useGsapAnimation } from '../hooks/useGsapHooks';

const CorporateStrengths = () => {
  const containerRef = useGsapAnimation();
  const strengths = [
    { title: "Trusted Pakistani Manufacturer", desc: "Deep roots in Pakistan's spice heritage." },
    { title: "Premium Ingredients", desc: "Sourcing only the finest crops." },
    { title: "Rich Aroma", desc: "Preserving natural essential oils." },
    { title: "Advanced Processing", desc: "State-of-the-art hygienic milling." },
    { title: "Reliable Supply Chain", desc: "Uninterrupted global distribution." },
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
      {/* Ambient glowing orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '-10%', width: '500px', height: '500px', background: 'var(--color-brand-red)', filter: 'blur(150px)', opacity: 0.08, borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '600px', height: '600px', background: 'var(--color-dark-gold)', filter: 'blur(180px)', opacity: 0.06, borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="gsap-mid" style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Core Strengths</div>
          <h2>Why Choose UK Chef</h2>
          <div className="heading-accent"></div>
        </div>
        
        <div className="bento-grid">
          {strengths.map((s, i) => (
            <div 
              key={i} 
              className={`bento-glass-card gsap-fg ${getBentoClass(i)}`}
              style={{ borderRadius: getBorderRadius(i) }}
            >
              <div className="bento-badge">{(i + 1).toString().padStart(2, '0')}</div>
              <div>
                <h3 style={{ color: 'var(--color-text-dark)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateStrengths;
