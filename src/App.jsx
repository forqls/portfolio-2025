import React, { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Header from './components/Header.jsx';
import LandingPage from './section/LandingPage.jsx';
import AboutMeSection from './section/AboutMeSection.jsx';
import ProjectSection from './section/ProjectSection.jsx';
import CareerEducationSection from './section/CareerEducationSection.jsx';
import ThankYouSection from './section/ThankYouSection.jsx';
import FixedButtons from './components/FixedButtons.jsx';
import Footer from './components/Footer.jsx';
import { ModalProvider } from './components/ModalContext';

function AppContent() {
  const contentRef = useRef(null);
  const bgWrapperRef = useRef(null);

  // 🔥 Lenis 초기화 (부드러운 스크롤용)
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []); // ← 여기! useEffect는 컴포넌트 안에서 사용해야해유~

  // 🔽 여긴 기존 GSAP ScrollTrigger 부분 유지해도 됨
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (bgWrapperRef.current && contentRef.current) {
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

      {/* 콘텐츠 */}
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

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

export default App;