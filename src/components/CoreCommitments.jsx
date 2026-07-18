import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CoreCommitments = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  const commitments = [
    { title: "100% Pure & Natural", desc: "Sourced directly from the finest geographical origins." },
    { title: "No Artificial Colors", desc: "Retaining the authentic hue and volatile oils." },
    { title: "Hygienically Processed", desc: "Automated cleaning and grinding to ensure safety." },
    { title: "Farm-to-Fork Freshness", desc: "Complete transparency across the supply chain." },
    { title: "Consistent Quality", desc: "Rigorous lab testing for every batch." },
    { title: "Authentic Taste", desc: "Preserving the true essence of Pakistani cuisine." }
  ];

  const borderRadii = [
    '28px 12px 30px 16px',
    '16px 30px 12px 28px',
    '30px 16px 28px 12px',
    '12px 28px 16px 30px',
    '25px 15px 35px 10px',
    '10px 35px 15px 25px',
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.organic-card');
      const container = containerRef.current;
      
      const setPadding = () => {
        const viewW = window.innerWidth;
        const cardWidth = cards[0].offsetWidth;
        container.style.paddingLeft = `${(viewW - cardWidth) / 2}px`;
        container.style.paddingRight = `${(viewW - cardWidth) / 2}px`;
      };

      setPadding();
      ScrollTrigger.addEventListener("refreshInit", setPadding);

      gsap.to(container, {
        x: () => -(container.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
          start: "center center",
          end: () => `+=${container.scrollWidth - window.innerWidth}`,
          snap: 1 / (cards.length - 1),
          onUpdate: (self) => {
            gsap.set(progressRef.current, { scaleX: self.progress });

            const currentCenter = window.innerWidth / 2;
            const isMobile = window.innerWidth < 768;
            
            // Phase 1: Read Layout (No Writes)
            const rects = cards.map(card => card.getBoundingClientRect());
            
            // Phase 2: Write Animations (No Reads)
            rects.forEach((rect, i) => {
              const cardCenter = rect.left + rect.width / 2;
              const distFromCenter = Math.abs(currentCenter - cardCenter);

              const deadzone = 40; 
              let effectiveDist = distFromCenter <= deadzone ? 0 : distFromCenter - deadzone;

              const maxDist = window.innerWidth * 0.5;
              const normalizedDist = Math.min(effectiveDist / maxDist, 1);

              const scale = 1 - (normalizedDist * 0.05); 
              const opacity = 1 - (normalizedDist * 0.2); 
              
              const vars = {
                scale: scale,
                opacity: opacity,
                force3D: true
              };

              if (!isMobile) {
                const blur = normalizedDist > 0.02 ? normalizedDist * 1.5 : 0; 
                vars.filter = blur > 0 ? `blur(${blur}px)` : 'blur(0px)';
              } else {
                vars.filter = 'none';
              }

              gsap.set(cards[i], vars);
            });
          }
        }
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", setPadding);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section bg-light" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="bg-blur-circles" style={{ left: '-10%' }}></div>
      <div className="bg-blur-circles" style={{ right: '-10%', top: '30%', backgroundColor: 'var(--color-brand-red)', opacity: 0.05 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Quality Pillars</div>
          <h2>Our Commitment</h2>
          <div className="heading-accent"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We refuse to compromise on quality, ensuring that every product reaching your 
            kitchen is pure, safe, and rich in authentic flavor.
          </p>
        </div>
      </div>

      <div className="horizontal-scroll-wrapper">
        <div className="horizontal-scroll-container" ref={containerRef}>
          {commitments.map((c, i) => (
            <div 
              key={i} 
              className="organic-card" 
              style={{ borderRadius: borderRadii[i % borderRadii.length] }}
            >
              <div className="card-badge">{(i + 1).toString().padStart(2, '0')}</div>
              <h3 style={{ color: 'var(--color-text-dark)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px' }}>{c.title}</h3>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: 1.8 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-progress-track">
        <div className="scroll-progress-fill" ref={progressRef}></div>
      </div>
    </section>
  );
};

export default CoreCommitments;
