import React, { useRef, useEffect } from 'react';
import AnimatedCardBg from './AnimatedCardBg';

const rawProducts = [
  "Chicken Tikka Masala", "Chicken Tandoori Masala", "Shawarma Masala", "Fajita Masala", "Zinger Marinade (Regular)", "Hot Zinger Marinade (Spicy)", "Broast Masala", "Flour Seasoning", "Grill Marination", "Biryani Masala", "Qorma Masala", "Achar Gosht Masala", "Karahi Gosht Masala", "Chicken Chatpata Sprinkle Masala (Economy)", "Chicken Chatpata Sprinkle Masala", "Chicken Cheese Masala", "Chicken Lemon Masala", "Chicken Salty Masala", "Chaat Masala VVIP", "Potato Fries Masala", "Tenderizing Powder", "Chicken Stock Powder", "Garlic Powder (A Quality)", "Garlic Powder (Economy)", "Ginger Powder (A Quality)", "Ginger Powder (Economy)", "Onion Powder", "Taiz Lal Mirch Powder", "Crush Chilli", "Pure Pink Himalayan Salt", "Zeera Powder", "Garam Masala Powder (Executive Quality VVIP)", "Dhaniya Powder (Coriander)", "Black Pepper Powder", "White Pepper Powder", "Daarchini Powder (Cinnamon)", "Haldi Powder", "Jaifal", "Javatri", "Long (Cloves)", "White Synthetic Vinegar (UKCHEF Brand)", "White Synthetic Vinegar (CHEFLIKE Brand)", "Green Chilli Sauce", "Pizza Sauce", "Hot Chilli Sauce", "Tomato Sauce", "Chilli Garlic Sauce", "UKCHEF Dressing Mayo"
];

const categorize = (name) => {
  const n = name.toLowerCase();
  if (n.includes("marinade") || n.includes("marination")) return "MARINADE";
  if (n.includes("sauce")) return "SAUCE";
  if (n.includes("vinegar")) return "VINEGAR";
  if (n.includes("mayo")) return "CONDIMENT";
  if (n.includes("seasoning") || n.includes("sprinkle")) return "SEASONING";
  if (n.includes("powder") || n.includes("salt") || n.includes("chilli") || n.includes("haldi") || n.includes("jaifal") || n.includes("javatri") || n.includes("long") || n.includes("zeera")) return "PURE SPICE";
  if (n.includes("masala")) return "SPICE BLEND";
  return "PREMIUM INGREDIENT";
};

const products = rawProducts.map(name => ({
  name,
  category: categorize(name)
}));

const borderRadii = [
  '28px 12px 30px 16px',
  '16px 30px 12px 28px',
  '30px 16px 28px 12px',
  '12px 28px 16px 30px',
  '25px 15px 35px 10px',
  '10px 35px 15px 25px',
];

const PortfolioShowcase = () => {
  const scrollRef = useRef(null);
  const progressRef = useRef(null);

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
      <div style={{ position: 'absolute', top: '50%', left: '20%', width: '800px', height: '800px', background: 'var(--color-brand-red)', filter: 'blur(200px)', opacity: 0.1, borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', top: '50%', right: '10%', width: '600px', height: '600px', background: 'var(--color-dark-gold)', filter: 'blur(150px)', opacity: 0.05, borderRadius: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, pointerEvents: 'none' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-label">Our Products</div>
          <h2>Product Portfolio</h2>
          <div className="heading-accent"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive range of premium products and customized blends tailored for the 
            Pakistan food industry.
          </p>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div 
          className="native-horizontal-scroll"
          ref={scrollRef}
        >
          {products.map((product, i) => (
            <div 
              key={i} 
              className="organic-card network-hero-glass" 
              style={{ 
                borderRadius: borderRadii[i % borderRadii.length], 
                scrollSnapAlign: 'start',
                minHeight: '280px',
                height: 'auto',
                padding: '40px 30px'
              }}
            >
              {/* Premium Geometric Animated SVG Background */}
              <AnimatedCardBg i={i} />

              <div className="card-badge" style={{ position: 'absolute', top: '10%', right: '5%', zIndex: 0, opacity: 1, color: 'white' }}>{(i + 1).toString().padStart(2, '0')}</div>
              <h3 style={{ position: 'relative', zIndex: 1, color: '#ffffff', fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', fontWeight: 700, marginBottom: '15px', lineHeight: 1.3 }}>{product.name}</h3>
              <p style={{ position: 'relative', zIndex: 1, margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', fontWeight: 600 }}>{product.category}</p>
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

export default PortfolioShowcase;

