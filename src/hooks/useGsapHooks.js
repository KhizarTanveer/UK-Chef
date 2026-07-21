import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      
      // BACKGROUND LAYER: Slow parallax, subtle scale
      gsap.utils.toArray('.gsap-bg').forEach((el) => {
        gsap.set(el, { willChange: "transform", force3D: true });
        gsap.fromTo(el,
          { y: "-10%", scale: 1.05 },
          {
            y: "10%", 
            scale: 1,
            ease: "none",
            scrollTrigger: { 
              trigger: el.parentElement, 
              start: "top bottom", 
              end: "bottom top", 
              scrub: true 
            }
          }
        );
      });

      // MIDGROUND LAYER: Standard text and content elements
      gsap.utils.toArray('.gsap-mid').forEach((el) => {
        gsap.set(el, { willChange: "transform, opacity", force3D: true });
        let tl = gsap.timeline({
          scrollTrigger: { 
            trigger: el, 
            start: "top 95%", 
            end: "bottom top", 
            scrub: 1 
          }
        });
        // Fades in within the first 20% of the scroll journey
        tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);
        // Continuously translates upwards slightly
        tl.fromTo(el, { y: 30 }, { y: -15, ease: "none", duration: 1 }, 0);
      });

      // FOREGROUND LAYER: Cards floating closer to the camera
      gsap.utils.toArray('.gsap-fg').forEach((el) => {
        gsap.set(el, { willChange: "transform, opacity", force3D: true });
        let tl = gsap.timeline({
          scrollTrigger: { 
            trigger: el, 
            start: "top 95%", 
            end: "bottom top", 
            scrub: 1.5 
          }
        });
        tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0);
        // Moves faster and further to simulate foreground depth
        tl.fromTo(el, { y: 80 }, { y: -40, ease: "none", duration: 1 }, 0);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};
