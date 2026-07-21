import React, { useRef, useEffect } from 'react';
import AnimatedCardBg from './AnimatedCardBg';

const CoreCommitments = () => {
  const scrollRef = useRef(null);
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
    const scrollContainer = scrollRef.current;
    const progressBar = progressRef.current;
    if (!scrollContainer || !progressBar) return;

    let ticking = false;

    const updateProgress = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) : 0;
      
      progressBar.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Use passive listener for maximum scroll performance
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Set initial state
    updateProgress();

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="section bg-light" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background blur circles */}
      <div className="bg-blur-circles" style={{ left: '-10%' }}></div>
      <div className="bg-blur-circles" style={{ right: '-10%', top: '30%', backgroundColor: 'var(--color-brand-red)', opacity: 0.05 }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
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

      <div style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div 
          className="native-horizontal-scroll"
          ref={scrollRef}
        >
          {commitments.map((c, i) => (
            <div 
              key={i} 
              className="organic-card network-hero-glass" 
              style={{ 
                borderRadius: borderRadii[i % borderRadii.length], 
                scrollSnapAlign: 'start',
                minHeight: '280px',
                height: 'auto',
                padding: '45px 35px'
              }}
            >
              {/* Premium Geometric Animated SVG Background */}
              <AnimatedCardBg i={i} />

              <div className="card-badge" style={{ position: 'absolute', top: '10%', right: '5%', zIndex: 0, opacity: 1, color: 'white' }}>{(i + 1).toString().padStart(2, '0')}</div>
              <h3 style={{ position: 'relative', zIndex: 1, color: '#ffffff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '20px' }}>{c.title}</h3>
              <p style={{ position: 'relative', zIndex: 1, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Minimal Progress Bar */}
        <div style={{
          width: '200px',
          height: '4px',
          background: 'rgba(0,0,0,0.06)',
          borderRadius: '4px',
          margin: '30px auto 0',
          overflow: 'hidden'
        }}>
          <div 
            ref={progressRef}
            style={{
              height: '100%',
              width: '100%',
              background: 'var(--color-premium-gold)',
              transformOrigin: 'left',
              transform: 'scaleX(0)',
              willChange: 'transform',
              borderRadius: '4px'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CoreCommitments;


