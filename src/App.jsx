// src/App.jsx
import Header from './components/Header.jsx';
import LandingPage from './section/LandingPage.jsx';
import AboutMeSection from './section/AboutMeSection.jsx'; 
import FixedBackground from './components/FixedBackground.jsx';
import ProjectSection from './section/ProjectSection'; 

function App() {
  return (
    <div>
      <FixedBackground/>
      <Header />

      <main>
        <LandingPage />
        <AboutMeSection />
        <ProjectSection />
      </main>
    </div>
  );
}

export default App;