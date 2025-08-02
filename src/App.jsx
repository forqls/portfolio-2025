// src/App.jsx

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
import { useModal } from './components/ModalContext';
import CustomModal from './components/CustomModal';

function App() {
  const contentRef = useRef(null);
  const bgWrapperRef = useRef(null);
  const lenisRef = useRef(null);

  // 👇 ★★★ 바로 여기가 수정된 부분! ★★★
  // 'isModalOpen'이 아니라, 본부(ModalContext)에서 보내주는 'isOpen'을 받아야 해!
  const { isOpen, closeModal, selectedProject } = useModal();

  // Lenis 초기화 및 GSAP 설정
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

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

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 모달 상태에 따라 Lenis를 제어하는 부분
  useEffect(() => {
    if (lenisRef.current) {
      // 👇 여기도 'isOpen'으로 수정!
      if (isOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isOpen]); // 👈 의존성 배열도 'isOpen'으로 수정!

  return (
    <>
      <div ref={contentRef} className="relative z-10 bg-[#E9EDF5]">
        <div className="fixed inset-0 z[-1] overflow-hidden pointer-events-none">
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

      <CustomModal
        // 👇 여기도 'isOpen'으로 수정!
        isOpen={isOpen}
        onClose={closeModal}
        selectedProject={selectedProject}
      />
    </>
  );
}

// App을 직접 export 하도록 수정
export default App;
