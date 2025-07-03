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
    // ▼▼▼▼▼ 모든 parallax, wrapper div를 다 없애고, 이 기본 div 하나만 남겨줘! ▼▼▼▼▼
    <div>
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
  );
}

export default App;