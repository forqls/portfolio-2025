// src/App.jsx
import Header from './components/Header.jsx';
import LandingPage from './section/LandingPage.jsx';
import AboutMeSection from './section/AboutMeSection.jsx'; 
import FixedBackground from './components/FixedBackground.jsx';

function App() {
  return (
    <div>
      <FixedBackground/>
      <Header />

      {/* 3. 스크롤되는 콘텐츠 레이어들 */}
      <main>
        <LandingPage />
        <AboutMeSection />
      </main>
    </div>
  );
}

export default App;