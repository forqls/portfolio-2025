// src/App.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Header from './components/Header.jsx';
import LandingPage from './section/LandingPage.jsx';
import AboutMeSection from './section/AboutMeSection.jsx';
import ProjectSection from './section/ProjectSection.jsx';
import CareerEducationSection from './section/CareerEducationSection.jsx';
import ThankYouSection from './section/ThankYouSection.jsx';
import FixedButtons from './components/FixedButtons.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const contentRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ smooth: true });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const elements = document.querySelectorAll('[data-speed]');
  elements.forEach((el) => {
    const speed = parseFloat(el.dataset.speed);
    gsap.to(el, {
      yPercent: -(1 - speed) * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  });
}, []);

  

  return (
    <div ref={contentRef} className="relative z-10 bg-[#E9EDF5]">

    <div className="fixed inset-0 z-[-1] h-[200vh] overflow-hidden pointer-events-none">
  <div data-speed="0.2" className="h-[100vh]">
    <img src="/background.png" className="w-full h-full object-cover" />
  </div>
  <div data-speed="0.2" className="h-[100vh]">
    <img src="/background_footer.png" className="w-full h-full object-cover" />
  </div>
</div>

      {/* ✅ 콘텐츠 섹션 */}
      <Header />
      <main>
        <LandingPage />
        <AboutMeSection />
        <ProjectSection />
        <CareerEducationSection />
        <ThankYouSection />
      </main>
      <FixedButtons />

  <Footer />
    </div>
  );
}

export default App;
