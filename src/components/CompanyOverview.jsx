import React from "react";
import AnimatedCardBg from "./AnimatedCardBg";

const CompanyOverview = () => {
  return (
    <section className="section bg-light" style={{ position: "relative" }}>
      <style>{`
        .premium-card.network-hero-glass {
          overflow: hidden;
          position: relative;
          min-height: auto !important;
          height: 100% !important;
          padding: 20px 15px !important;
        }
        .premium-card.network-hero-glass > * {
          position: relative;
          z-index: 1;
        }
        .premium-card.network-hero-glass > svg {
          position: absolute !important;
          z-index: 0 !important;
        }
      `}</style>
      <div className="container">
        <div className="editorial-split">
          {/* LEFT SIDE */}
          <div>
            <span className="section-label">COMPANY PROFILE</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '20px' }}>
              <img 
                src="https://res.cloudinary.com/dwgwwlbrg/image/upload/v1784386120/PHOTO-2026-07-16-15-43-03_y1kevv.jpg" 
                alt="UK Chef Logo" 
                style={{ height: '180px', width: 'auto', objectFit: 'contain', borderRadius: '12px' }} 
              />
              <h1 style={{ margin: 0 }}>
                UK CHEF
                <br />
                <span style={{ color: "var(--color-text-dark)" }}>LONDON FOODS</span>
              </h1>
            </div>

            <div className="heading-accent"></div>

            <div className="editorial-quote">
              "The Heart of Your Kitchen."
            </div>

            <p>
              UK Chef London Foods is a trusted manufacturer and distributor
              of premium spices, seasonings, sauces, mayonees and culinary essentials.
              Combining authentic Pakistani flavors with international quality
              standards, we deliver products that inspire confidence in every
              professional and home kitchen.
            </p>

            <p>
              Every ingredient is carefully sourced and processed to preserve
              its
              <span style={{ color: "var(--color-brand-green)", fontWeight: 700 }}>
                {" "}
                natural aroma,
              </span>{" "}
              vibrant colour and rich flavour—ensuring a premium culinary
              experience with every meal.
            </p>

            {/* STATS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "30px",
                marginTop: "60px",
              }}
            >
              <div className="premium-card network-hero-glass" style={{ textAlign: "center", padding: "20px 15px" }}>
                <AnimatedCardBg i={0} />
                <h2 style={{ color: "#ffffff", fontSize: "2.8rem", marginBottom: "5px", letterSpacing: "-0.05em" }}>
                  100%
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "2px", textTransform: "uppercase", fontSize: ".75rem", margin: 0, fontWeight: 600 }}>
                  Pure
                </p>
              </div>

              <div className="premium-card network-hero-glass" style={{ textAlign: "center", padding: "20px 15px" }}>
                <AnimatedCardBg i={1} />
                <h2 style={{ color: "#ffffff", fontSize: "2.8rem", marginBottom: "5px", letterSpacing: "-0.05em" }}>
                  PFA
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "2px", textTransform: "uppercase", fontSize: ".75rem", margin: 0, fontWeight: 600 }}>
                  Certified
                </p>
              </div>

              <div className="premium-card network-hero-glass" style={{ textAlign: "center", padding: "20px 15px" }}>
                <AnimatedCardBg i={2} />
                <h2 style={{ color: "#ffffff", fontSize: "2.8rem", marginBottom: "5px", letterSpacing: "-0.05em" }}>
                  4+
                </h2>
                <p style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "2px", textTransform: "uppercase", fontSize: ".75rem", margin: 0, fontWeight: 600 }}>
                  Categories
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="premium-radius premium-image-hover-container" style={{ position: 'relative', overflow: 'hidden', height: 'auto', display: 'flex' }}>
            <img
              src="https://res.cloudinary.com/dwgwwlbrg/image/upload/v1784922633/ChatGPT_Image_Jul_25_2026_12_49_54_AM_v70iey.png"
              alt="Premium Spices"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />

            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,.55), transparent 70%)",
                pointerEvents: "none"
              }}
            />

            {/* Floating Badge */}
            <div
              className="glass-card premium-quality-badge"
              style={{
                position: "absolute",
                bottom: "40px",
                left: "-30px",
                padding: "24px 40px",
                height: "auto",
                borderRadius: "4px 30px 4px 30px"
              }}
            >
              <span style={{ color: "#999", fontSize: ".8rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                Since
              </span>
              <h3 style={{ marginTop: "6px", color: "var(--color-brand-red)", fontSize: "2rem", marginBottom: 0 }}>
                Premium Quality
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;