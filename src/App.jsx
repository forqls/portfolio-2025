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
  const bgWrapperRef = useRef(null); // ✅ 배경 전체를 감싸는 div를 위한 ref

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ▼▼▼▼▼ GSAP 애니메이션 로직 수정 ▼▼▼▼▼
    // 배경 이미지들을 감싸는 하나의 div('.bg-wrapper')만 애니메이션 처리합니다.
    if (bgWrapperRef.current) {
      gsap.to(bgWrapperRef.current, {
        // y축으로 (배경 전체 높이 - 화면 높이) 만큼만 움직이도록 설정
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
    // ▲▲▲▲▲ 여기까지 수정 ▲▲▲▲▲
  }, []);

  return (
    <div ref={contentRef} className="relative z-10 bg-[#E9EDF5]">
      
      {/* ▼▼▼▼▼ 배경 HTML 구조 수정 ▼▼▼▼▼ */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div ref={bgWrapperRef} className="absolute top-0 left-0 w-full">
          <img src="/background.png" className="w-full h-auto" alt="" />
          <img src="/background_footer.png" className="w-full h-auto mt-[30rem]" alt="" />
        </div>
      </div>
      {/* ▲▲▲▲▲ 여기까지 수정 ▲▲▲▲▲ */}

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