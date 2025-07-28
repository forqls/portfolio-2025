// src/App.jsx

// 1. useState를 import 해주세요.
import React, { useEffect, useRef, useState } from 'react';
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
  const bgWrapperRef = useRef(null);
  const lenisRef = useRef(null); // Lenis 인스턴스를 담을 '리모컨'

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smooth: true });
    
    // 2. 생성된 Lenis 인스턴스를 '리모컨'에 담아줍니다.
    lenisRef.current = lenis; 

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (bgWrapperRef.current) {
      gsap.to(bgWrapperRef.current, {
        y: () => -(bgWrapperRef.current.clientHeight - window.innerHeight),
        ease: 'none',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={contentRef} className="relative z-10 bg-[#E9EDF5]">
      
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div ref={bgWrapperRef} className="absolute top-0 left-0 w-full">
          <img src="/background.png" className="w-full h-auto" alt="" />
          <img src="/background_footer.png" className="w-full h-auto mt-[30rem]" alt="" />
        </div>
      </div>

      <Header />
      <main>
        <LandingPage />
        <AboutMeSection />
        {/* 3. ProjectSection에게 Lenis '리모컨'을 props로 전달합니다. */}
        <ProjectSection lenisRef={lenisRef} />
        <CareerEducationSection />
        <ThankYouSection />
      </main>
      <FixedButtons />
      <Footer />
    </div>
  );
}

export default App;