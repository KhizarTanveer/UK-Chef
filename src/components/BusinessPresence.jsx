import React from 'react';
import { useGsapAnimation } from '../hooks/useGsapHooks';

const BusinessPresence = () => {
  const containerRef = useGsapAnimation();

  return (
    <section className="section" ref={containerRef}>
      <div className="container">
        <div className="gsap-mid" style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Global Reach</div>
          <h2>Business Presence</h2>
          <div className="heading-accent"></div>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            UK Chef London Foods serves a diverse portfolio of B2B clients, reinforcing our position 
            as a versatile and dependable supplier in the food industry. Our primary markets include:
          </p>
        </div>

        <div className="grid-4">
          <div className="premium-card gsap-fg" style={{ textAlign: 'center', padding: '50px 40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--color-brand-red)' }}>Retail & Supermarket</h3>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.8 }}>Supplying premium chains with top-tier products.</p>
          </div>
          <div className="premium-card gsap-fg" style={{ textAlign: 'center', padding: '50px 40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--color-brand-red)' }}>HORECA</h3>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.8 }}>Hotels, Restaurants, and Cafes across the globe.</p>
          </div>
          <div className="premium-card gsap-fg" style={{ textAlign: 'center', padding: '50px 40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--color-brand-red)' }}>Institutional Catering</h3>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.8 }}>Bulk supplies for large-scale catering services.</p>
          </div>
          <div className="premium-card gsap-fg" style={{ textAlign: 'center', padding: '50px 40px' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--color-brand-red)' }}>Global Distributors</h3>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.8 }}>Partnering with international food distributors.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPresence;
