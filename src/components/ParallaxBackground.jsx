// src/components/ParallaxBackground.jsx
import React, { useState, useEffect } from 'react';

const ParallaxBackground = ({ children }) => { // 1. children을 받도록 수정!
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // 2. 이 div가 이제 모든 콘텐츠를 감싸는 부모가 됨
    <div className="relative isolate overflow-hidden"> 
      
      {/* 3. 배경 이미지를 담는 레이어 */}
      <div
        className="fixed top-0 left-0 w-full h-[300vh] z-[-10] bg-cover bg-center" // 높이를 아주 길게!
        style={{
          backgroundImage: `url('/background_large.png')`,
          transform: `translateY(-${scrollY * 0.5}px)`, // 패럴랙스 효과
        }}
      />
      
      {/* 4. 실제 콘텐츠가 이 안으로 들어옴 */}
      {children} 
    </div>
  );
};

export default ParallaxBackground;