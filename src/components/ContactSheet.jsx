import React from 'react';
import { useGsapAnimation } from '../hooks/useGsapHooks';
import AnimatedCardBg from './AnimatedCardBg';

const ContactSheet = () => {
  const containerRef = useGsapAnimation();

  return (
    <section className="section bg-light" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Force text and icons to white for the burgundy cards */}
      <style>{`
        .contact-glass-card {
          color: white !important;
        }
        .contact-glass-card > * {
          position: relative;
          z-index: 1;
        }
        .contact-glass-card > svg {
          position: absolute !important;
          z-index: 0 !important;
        }
        .contact-glass-card.network-hero-glass {
          min-height: auto !important;
          height: 100% !important;
          padding: 35px !important;
          justify-content: flex-start !important;
        }
        .contact-glass-card svg,
        .contact-glass-card .contact-card-label,
        .contact-glass-card .contact-card-info,
        .contact-glass-card [style*="color: var(--color-text-muted)"],
        .contact-glass-card [style*="color: var(--color-brand-red)"] {
          color: white !important;
        }
      `}</style>

      {/* Ambient background elements */}
      <div style={{ position: 'absolute', top: '5%', left: '-10%', width: '500px', height: '500px', background: 'var(--color-brand-red)', filter: 'blur(150px)', opacity: 0.08, borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'var(--color-dark-gold)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="contact-layout">
          
          {/* Left Side: Headings & CTA */}
          <div className="contact-heading-wrapper gsap-mid">
            <div className="section-label" style={{ marginBottom: '15px' }}>Get in Touch</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '20px', color: 'var(--color-text-dark)' }}>
              Partner With Excellence
            </h2>
            <div className="heading-accent" style={{ marginBottom: '30px', marginLeft: 0 }}></div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
              For business inquiries, global distribution partnerships, or detailed capability statements, our dedicated corporate team is ready to assist you in establishing a premium supply chain.
            </p>
            <button className="btn-luxury-burgundy">
              Contact Our Team
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Right Side: Cards */}
          <div className="contact-cards-grid">
            
            {/* Corporate HQ */}
            <div className="contact-glass-card network-hero-glass gsap-fg contact-span-2">
              <AnimatedCardBg i={0} />
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ color: 'var(--color-brand-red)', padding: '10px', background: 'rgba(178,34,34,0.05)', borderRadius: '12px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-card-label">Corporate Headquarters</div>
                  <div className="contact-card-info" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>UK Chef London Foods®</div>
                  <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    Main Boulevard, 80 Feet Road, Sarkari Road,<br/>
                    Marghazar Colony, Lahore, Pakistan
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-glass-card network-hero-glass gsap-fg">
              <AnimatedCardBg i={1} />
              <div style={{ color: 'var(--color-brand-red)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-card-label">Email</div>
              <div className="contact-card-info" style={{ wordBreak: 'break-all' }}>ukcheflondon@gmail.com</div>
            </div>

            {/* Phone */}
            <div className="contact-glass-card network-hero-glass gsap-fg">
              <AnimatedCardBg i={2} />
              <div style={{ color: 'var(--color-brand-red)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-card-label">Phone</div>
              <div className="contact-card-info">+92 326 4111641</div>
            </div>

            {/* Working Hours */}
            <div className="contact-glass-card network-hero-glass gsap-fg">
              <AnimatedCardBg i={3} />
              <div style={{ color: 'var(--color-brand-red)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="contact-card-label">Working Hours</div>
              <div className="contact-card-info">Mon - Sat: 9am - 6pm</div>
            </div>

            {/* Export */}
            <div className="contact-glass-card network-hero-glass gsap-fg">
              <AnimatedCardBg i={4} />
              <div style={{ color: 'var(--color-brand-red)', marginBottom: '15px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="contact-card-label">Export</div>
              <div className="contact-card-info">Global Supply Chain</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSheet;
