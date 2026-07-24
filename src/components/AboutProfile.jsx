import React from 'react';

const AboutProfile = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div>
          <div className="section-label">About Us</div>
          <h2>Our Heritage</h2>
          <div className="heading-accent"></div>
          
          <div className="image-container premium-radius" style={{ margin: '40px auto', maxWidth: '100%' }}>
            <img 
              src="/assets/hq-building.png" 
              alt="Our Story HQ" 
              style={{ objectFit: 'cover', width: '100%', height: 'auto', display: 'block', borderRadius: 'inherit' }}
            />
          </div>
          
          <p>
            Established with a vision to deliver uncompromised quality, UK Chef London Foods 
            has grown into a recognizable mark of excellence in the <span style={{ color: 'var(--color-brand-green)', fontWeight: '600' }}>FMCG sector</span>. 
          </p>
          <p>
            Our operations span across global supply chains, meticulously sourcing raw materials 
            from the finest farms in Pakistan to ensure that every product meets our rigorous 
            standards of purity.
          </p>
          
          <div className="editorial-quote">
            We believe that great food starts with exceptional ingredients. This philosophy 
            drives our dedication to maintaining the natural aroma, color, and volatile oils 
            inherent in premium spices.
          </div>
          
          <p>
            By bridging traditional agricultural practices with modern food safety technology, 
            we deliver products that professionals and households alike can trust implicitly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProfile;
