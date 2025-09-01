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
  const scrollWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const bgWrapperRef = useRef(null);
  const { isOpen, closeModal, selectedProject } = useModal();

  useEffect(() => {
    // 1. ref가 실제 DOM에 연결된 후에 코드가 실행되도록 보장
    if (scrollWrapperRef.current) {
      const lenis = new Lenis({
        wrapper: scrollWrapperRef.current,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      
      gsap.registerPlugin(ScrollTrigger);

      // 2. GSAP에게 스크롤의 진짜 주인이 누구인지 명확하게 알려주기
      ScrollTrigger.defaults({ scroller: scrollWrapperRef.current });

      // 3. 배경 애니메이션이 새 주인을 기준으로 다시 동작하도록 설정
      if (bgWrapperRef.current && contentRef.current) {
        gsap.to(bgWrapperRef.current, {
          y: () => -(bgWrapperRef.current.clientHeight - scrollWrapperRef.current.clientHeight),
          ease: 'none',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });
      }

      // 4. 컴포넌트가 사라질 때 모든 인스턴스를 깨끗하게 정리
      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []); // 처음 렌더링될 때 딱 한 번만 실행

  return (
    <>
      {/* 5. 이 JSX 구조가 모든 문제를 해결하는 최종 구조 */}
      
        
        {/* 배경은 스크롤 wrapper 안에 absolute로 배치 */}
        <div ref={bgWrapperRef} className="fixed top-0 left-0 w-full z-0 pointer-events-none bg-[#E9EDF5]">
          <img src="/background.png" className="w-full h-auto" alt="" />
          <img src="/background_footer.png" className="w-full h-auto mt-[30rem]" alt="" />
        </div>

        {/* 콘텐츠는 배경 위에 z-10으로 배치 */}
        <div ref={scrollWrapperRef} id="scroll-wrapper">
        <div ref={contentRef} className="relative z-10 bg-transparent">
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
        </div>

      {/* 모달은 스크롤 wrapper의 영향을 받지 않도록 완전히 밖으로 분리 */}
      <CustomModal
        isOpen={isOpen}
        onClose={closeModal}
        selectedProject={selectedProject}
      />
    </>
  );
}

export default App;

