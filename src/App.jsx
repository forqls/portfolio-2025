// src/App.jsx

import React, { useRef, useEffect, useContext } from 'react'; // useContext 추가
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
import { ModalContext, ModalProvider  } from './components/ModalContext'; 

// App 컴포넌트 하나로 합치기
function App() {
  const contentRef = useRef(null);
  const bgWrapperRef = useRef(null);
  const lenisRef = useRef(null); // Lenis 인스턴스를 저장하기 위한 ref

  // ✅ 1. ModalContext에서 isModalOpen 상태 가져오기 (컴포넌트 최상단)
  const { isModalOpen } = useContext(ModalContext);

  // 🔥 2. Lenis 초기화 및 모달 상태에 따른 제어
  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis; // ref에 인스턴스 저장

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 모달 상태에 따라 Lenis 스크롤 제어
    if (isModalOpen) {
      lenis.stop(); // 모달 열리면 스크롤 정지
    } else {
      lenis.start(); // 모달 닫히면 스크롤 재개
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [isModalOpen]); // isModalOpen 상태가 바뀔 때마다 이 useEffect가 다시 실행됨

  // ✅ 3. GSAP ScrollTrigger 부분 (이전과 동일)
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
  }, []); // 이 useEffect는 처음 한 번만 실행

  // 4. 모달 상태에 따른 body 클래스 제어 (이것도 Lenis가 제어하므로 선택사항이지만, 만약을 위해 추가)
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
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

// 보통 이 부분은 src/main.jsx 에 작성하지만,
// App.jsx 파일 하나만 수정한다면 이렇게 해도 괜찮아.
// 하지만 가장 좋은 방법은 main.jsx에서 <App />을 <ModalProvider>로 감싸는 거야!
function AppWrapper() {
  return (
    <ModalProvider>
      <App />
    </ModalProvider>
  )
}

export default AppWrapper;