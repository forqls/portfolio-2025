// src/App.jsx
import Header from './components/Header.jsx';
import LandingPage from './section/LandingPage.jsx';
import AboutMeSection from './section/AboutMeSection.jsx'; 
import FixedBackground from './components/FixedBackground.jsx';
import ProjectSection from './section/ProjectSection';
import CareerEducationSection from './section/CareerEducationSection.jsx'; 

function App() {
  return (
    <div>
      <FixedBackground/>
      <Header />

      <main>
        <LandingPage />
        <AboutMeSection />
        <ProjectSection />
        <CareerEducationSection />
      </main>
    </div>
  );
}

export default App;