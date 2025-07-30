// src/App.jsx

import React, { useRef, useEffect, useContext } from 'react';
// import Lenis from '@studio-freight/lenis'; // 👈 Lenis import 삭제
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
import { ModalContext, ModalProvider } from './components/ModalContext';

function App() {
  const contentRef = useRef(null);
  const bgWrapperRef = useRef(null);

  const { isModalOpen } = useContext(ModalContext);

  // ✅ [수정] GSAP 관련 useEffect만 남겨둠
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

  // ✅ [부활] 모달 상태에 따라 body 클래스를 제어하는 useEffect
  // Lenis가 없으니 이제 이 코드가 배경 스크롤을 막는 역할을 해야 해.
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    // 만약을 위해 정리 함수(cleanup)는 남겨두자.
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

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
        <ProjectSection />
        <CareerEducationSection />
        <ThankYouSection />
      </main>
      <FixedButtons />
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  );
}

export default AppWrapper;