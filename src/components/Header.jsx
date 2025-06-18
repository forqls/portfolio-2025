// src/components/Header.jsx

// 1. 로고: SVG 파일을 사용할 수 있도록 img 태그로 변경
const Logo = () => (
  <a href="/">
    {/* public 폴더에 로고 파일을 넣고, 파일명을 수정해주세요! */}
    <img src="/AHB.svg" alt="AHB 로고" className="h-6" /> {/* 높이만 지정하면 너비는 자동 조절됩니다. */}
  </a>
);

// 3. 깃허브 버튼: 높이를 37px에 가깝게 조절
const GitHubButton = () => (
  <a 
    href="https://github.com/forqls" 
    target="_blank" 
    rel="noopener noreferrer"
    // h-9(36px)와 py-2를 조합하여 37px과 유사한 높이를 만듭니다.
    className="flex items-center h-9 px-4 text-sm font-light text-brand-dark rounded-full bg-gradient-to-r from-brand-pink to-brand-purple"
  >
    GitHub
  </a>
);

// 2-3. 홈 버튼: 요청하신 px 단위 그대로 적용
const HomeDots = () => (
  <a href="/" className="flex items-center gap-[5px]"> {/* 간격 5px */}
    {/* 크기 11px */}
    <span className="block w-[11px] h-[11px] bg-brand-purple rounded-full"></span>
    <span className="block w-[11px] h-[11px] bg-brand-purple rounded-full"></span>
  </a>
);

// 메인 헤더 컴포넌트
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-6">
      
      {/* 1. 왼쪽 로고 */}
      <Logo />

      {/* 2. 가운데 메뉴 */}
      {/* 2-1. shadow-sm 제거 */}
      {/* 2-2. h-12(48px)에서 상하 패딩을 조절하여 46px에 가깝게 맞춤 */}
      <nav className="flex items-center h-12 gap-8 px-6 bg-nav-bg backdrop-blur-sm rounded-full">
        <HomeDots />
        {/* 2-4. font-bold 대신 font-light(300) 적용 */}
        <a href="#about" className="text-sm font-light text-brand-dark">About me</a>
        <a href="#project" className="text-sm font-light text-brand-dark">Project</a>
        <a href="#career" className="text-sm font-light text-brand-dark">Career&Education</a>
      </nav>

      {/* 3. 오른쪽 깃허브 버튼 */}
      <GitHubButton />

    </header>
  );
}

export default Header;