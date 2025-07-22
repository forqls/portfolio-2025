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

///
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({ smooth: true });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Parallax 처리
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



///

useEffect(() => {
  const updateContentHeight = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  };

  // 콘텐츠 렌더 후, 이미지까지 로드된 다음 높이 정확히 계산
  window.addEventListener('load', updateContentHeight);
  window.addEventListener('resize', updateContentHeight);
  setTimeout(updateContentHeight, 1000); // 이미지 렌더 지연 고려

  return () => {
    window.removeEventListener('load', updateContentHeight);
    window.removeEventListener('resize', updateContentHeight);
  };
}, []);

///






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
      <div className="fixed w-full top-0 left-0 z-[-10] overflow-hidden pointer-events-none bg-[#E9EDF5]" style={{ height: `${contentHeight}px` }}>
  {/* 배경 이미지 1 */}
  <div
    data-speed="0.4"
    className="absolute top-0 left-0 w-full h-screen bg-cover bg-no-repeat bg-top"
    style={{ backgroundImage: "url('/background.png')" }}
  />
  
  {/* 배경 이미지 2 - 이어지는 하단 */}
  <div
    data-speed="0.2"
    className="absolute top-[100vh] left-0 w-full h-screen bg-cover bg-no-repeat bg-top"
    style={{ backgroundImage: "url('/background_footer.png')" }}
  />
</div>


      {/* --- 콘텐츠 레이어 --- */}
     <div ref={contentRef} className="relative z-10">
  <Header />
  <main>
    <LandingPage />
    <AboutMeSection />
    <ProjectSection />
    <CareerEducationSection />
    <ThankYouSection />
  </main>
  <Footer/>
</div>
    </div>
  );
}

export default App;