import React from 'react';

const DocumentHeader = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="gsap-mid" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="section-label">UK Chef London Foods</div>
          <h2>The Heart of Your Kitchen</h2>
          <div className="heading-accent" style={{ margin: '0 auto 35px' }}></div>
          <p style={{ margin: '0 auto' }}>
            UK Chef London Foods is a premier manufacturer and distributor of high-quality spices, 
            seasonings, and food products. With a commitment to purity, authentic flavor profiles, 
            and stringent hygiene standards, we serve as a trusted partner to the global food 
            industry, from retail distributors to professional kitchens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentHeader;
