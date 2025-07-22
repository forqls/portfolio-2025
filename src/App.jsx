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
import ParallaxBackground from './components/ParallaxBackground.jsx'; 


function App() {
  return (
 <ParallaxBackground>
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
    </ParallaxBackground>
  );
}

export default App;