// src/App.jsx
import React from 'react';

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
  return (
    // 1. 페이지 전체를 감싸는 '패럴랙스 컨테이너'
    <div className="parallax-container">

      {/* 2. 모든 실제 내용을 담는 '콘텐츠 래퍼' */}
      <div className="content-wrapper">
        
        {/* 3. 두 개의 배경 이미지를 담는 '배경 레이어' */}
        <div className="parallax-background">
          <div className="h-[200vh] w-full bg-cover bg-center" style={{ backgroundImage: 'url(/background.png)' }} />
          <div className="h-[50vh] w-full bg-cover bg-center" style={{ backgroundImage: 'url(/background_footer.jpg)' }} />
        </div>

        {/* --- 여기서부터는 실제 콘텐츠 --- */}
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