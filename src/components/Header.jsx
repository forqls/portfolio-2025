// src/components/Header.jsx
import React from 'react';

const Logo = ({ scrollTo }) => ( 
    <button 
      onClick={() => scrollTo('#landing-page')}
      className="cursor-pointer"
    >
      <img src="/AHB.svg" alt="AHB 로고" className="h-6" /> 
    </button>
);

const GitHubButton = () => (
  <a 
    href="https://github.com/forqls" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center h-9 px-4 text-sm font-light text-brand-dark rounded-full bg-gradient-to-r from-brand-pink to-brand-purple"
  >
    GitHub
  </a>
);

const HomeDots = ({ scrollTo }) => (
    <button 
      onClick={() => scrollTo('#landing-page')} 
      className="flex items-center gap-[5px] cursor-pointer"
    > 
      <span className="block w-[11px] h-[11px] bg-brand-purple rounded-full"></span>
      <span className="block w-[11px] h-[11px] bg-brand-purple rounded-full"></span>
    </button>
);

function Header({ scrollTo }) { 

     const handleMenuClick = (targetId) => {
      scrollTo(`#${targetId}`);
    };

    // 메뉴 항목 정의
    const navItems = [
      { label: 'About me', targetId: 'about-me' },
      { label: 'Project', targetId: 'project' },
      { label: 'Career&Education', targetId: 'career-education' },
    ];
    
    return (
        <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between p-6">
            
            <Logo scrollTo={scrollTo} /> 

            <nav className="flex items-center h-12 gap-8 px-6 bg-nav-bg backdrop-blur-sm rounded-full">
                <HomeDots scrollTo={scrollTo} /> 
                
                {navItems.map((item) => (
                    <button
                        key={item.targetId}
                        onClick={() => handleMenuClick(item.targetId)}
                        className="text-sm font-light text-brand-dark cursor-pointer"
                    >
                        {item.label}
                    </button>
                ))}
            </nav>

            <GitHubButton />

        </header>
    );
}

export default Header;