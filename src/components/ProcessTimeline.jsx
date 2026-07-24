import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  
  const steps = [
    {
      title: "Farm Selection",
      desc: "We carefully source spices from trusted farms known for exceptional quality.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    },
    {
      title: "Advanced Cleaning",
      desc: "Every raw ingredient passes through modern cleaning systems before processing.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
        </svg>
      )
    },
    {
      title: "Precision Drying",
      desc: "Controlled drying preserves aroma, freshness, and natural oils.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      )
    },
    {
      title: "Hygienic Grinding",
      desc: "Advanced grinding technology ensures consistency and food safety.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
        </svg>
      )
    },
    {
      title: "Quality Testing",
      desc: "Every batch undergoes strict laboratory quality inspections.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><circle cx="12" cy="13" r="2"/>
        </svg>
      )
    },
    {
      title: "Premium Packaging",
      desc: "Food-grade packaging locks in freshness and aroma.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      title: "Wholesale Distribution",
      desc: "Our products are delivered efficiently to customers all over Pakistan.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.timeline-item');
      
      if (fillRef.current) {
        gsap.to(fillRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          }
        });
      }

      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center+=100", 
          onEnter: () => item.classList.add('active'),
          onEnterBack: () => item.classList.add('active'),
          onLeaveBack: () => item.classList.remove('active'),
        });
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section bg-light" ref={sectionRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '-15%', width: '600px', height: '600px', background: 'var(--color-brand-red)', filter: 'blur(200px)', opacity: 0.08, borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '-15%', width: '700px', height: '700px', background: 'var(--color-dark-gold)', filter: 'blur(180px)', opacity: 0.05, borderRadius: '50%', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Value Chain</div>
          <h2>Manufacturing Journey</h2>
          <div className="heading-accent"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            From audited farms to global distribution, our state-of-the-art facilities ensure hygiene 
            and transparency at every step of the <span style={{ color: 'var(--color-brand-green)', fontWeight: '600' }}>supply chain</span>.
          </p>
        </div>
        
        <div className="luxury-timeline-container" ref={trackRef}>
          <div className="timeline-connector">
            <div className="timeline-connector-fill" ref={fillRef}></div>
          </div>
          
          {steps.map((step, i) => {
            const isLeft = i % 2 !== 0; 
            return (
              <div key={i} className={`timeline-item ${isLeft ? 'is-left' : ''}`}>
                <div className="timeline-badge-glass">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <div className="burgundy-timeline-card">
                  <div className="timeline-card-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ color: 'var(--color-premium-gold)' }}>
                        {step.icon}
                      </div>
                      <h3 style={{ margin: 0, color: '#ffffff', fontSize: '1.4rem', fontWeight: 600 }}>{step.title}</h3>
                    </div>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
