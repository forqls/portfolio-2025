// src/components/ParallaxBackground.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function ParallaxBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = containerRef.current.querySelectorAll('[data-speed]');
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.speed);
      gsap.to(el, {
        y: `${-(1 - speed) * 200}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full z-[-1] overflow-hidden pointer-events-none"
    >
      <div data-speed="0.4" className="w-full">
        <img
          src="/background.png"
          className="w-full h-auto object-contain"
          alt="Top background"
        />
      </div>
      <div data-speed="0.4" className="w-full">
        <img
          src="/background_footer.png"
          className="w-full h-auto object-contain"
          alt="Footer background"
        />
      </div>
    </div>
  );
}

export default ParallaxBackground;
