// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';


// 모든 컴포넌트와 섹션 import
import Header from './components/Header.jsx';
import LandingPage from './section/LandingPage.jsx';
import AboutMeSection from './section/AboutMeSection.jsx';
import ProjectSection from './section/ProjectSection.jsx';
import CareerEducationSection from './section/CareerEducationSection.jsx';
import ThankYouSection from './section/ThankYouSection.jsx';
import FixedButtons from './components/FixedButtons.jsx';
import Footer from './components/Footer.jsx';

function App() {
  


  // 1. 스크롤 위치와 콘텐츠 전체 높이를 기억할 공간
  const [scrollY, setScrollY] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  
  // 2. 콘텐츠 전체를 감싸는 div를 가리킬 변수
  const contentRef = useRef(null);


  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ smooth: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const bg = document.querySelector('[data-speed]');
  if (!bg) return;

  const speed = parseFloat(bg.dataset.speed);

  // ✅ ScrollTrigger 인스턴스 저장
  const trigger = gsap.to(bg, {
    y: () => (1 - speed) * ScrollTrigger.maxScroll(window),
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: "max",
      scrub: true,
    },
  });

  // ✅ cleanup 함수에서 해당 인스턴스 제거
  return () => {
    trigger.scrollTrigger?.kill(); // ← 이게 정답!
  };
}, []);





  // 3. 스크롤 이벤트 핸들러
  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  // 4. 페이지가 처음 로드되거나, 창 크기가 바뀔 때마다 콘텐츠의 전체 높이를 다시 계산
  useEffect(() => {
    const updateContentHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener('load', updateContentHeight);
    window.addEventListener('resize', updateContentHeight);
    setTimeout(updateContentHeight, 500); // 이미지 로딩 등을 고려한 추가 계산

    return () => {
      window.removeEventListener('load', updateContentHeight);
      window.removeEventListener('resize', updateContentHeight);
    };
  }, []);

  // 5. 스크롤 이벤트 감지 시작
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // ▼▼▼▼▼ 가장 바깥 div에서 배경색 클래스를 삭제! ▼▼▼▼▼
    <div>
      {/* --- 배경 레이어 --- */}
      <div
      data-speed="0.3" 
        // ▼▼▼▼▼ 여기에 배경색을 추가해서 이미지 로딩 전에도 색이 보이도록 함 ▼▼▼▼▼
        className="fixed top-0 left-0 w-full z-[-10] bg-cover bg-center bg-[#E9EDF5]"
        style={{
          backgroundImage: `url('/background_large.png')`,
          height: `${contentHeight}px`,
        }}
      />

      {/* --- 콘텐츠 레이어 --- */}
      <div ref={contentRef}>
        <Header />
        <main>
          <LandingPage />
          <AboutMeSection />
          <ProjectSection />
          <CareerEducationSection />
          <ThankYouSection />
        </main>
        <Footer />
        <FixedButtons />
      </div>
    </div>
  );
}

export default App;