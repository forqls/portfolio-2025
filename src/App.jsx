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
  const lenisRef = useRef(null);

  const scrollToSection = (id) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(id, {
        duration: 1.2,
        offset: -80, 
      });
    }
  };

  useEffect(() => {
    if (scrollWrapperRef.current) {
      const lenis = new Lenis({
        wrapper: scrollWrapperRef.current,
      });

      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.defaults({ scroller: scrollWrapperRef.current });

       if (bgWrapperRef.current && contentRef.current) {
        gsap.to(bgWrapperRef.current, {
          y: '-29%', 
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
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, []); 

  return (
    <>
        <div ref={bgWrapperRef} className="fixed top-0 left-0 w-full z-0 pointer-events-none bg-[#E9EDF5]">
          <img src="/background.png" className="w-full h-auto object-cover" alt="" />
          <img src="/background_footer.png" className="w-full h-auto object-cover" alt="" />
        </div>

        <div ref={scrollWrapperRef} id="scroll-wrapper">
        <div ref={contentRef} className="relative z-10 bg-transparent">
          <Header scrollTo={scrollToSection}/>
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

