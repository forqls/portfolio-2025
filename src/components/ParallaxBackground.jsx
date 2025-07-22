// src/components/ParallaxBackground.jsx
import React, { useState, useEffect } from 'react';

const ParallaxBackground = () => {
  // 1. 스크롤 위치(Y축)를 기억할 공간 만들기
  const [scrollY, setScrollY] = useState(0);

  // 2. 스크롤할 때마다 스크롤 위치를 업데이트하는 함수
  const handleScroll = () => {
    setScrollY(window.pageYOffset); 
  };

  // 3. 페이지가 처음 나타날 때, 스크롤 이벤트 감지를 시작!
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 페이지가 사라질 때, 이벤트 감지를 멈춰서 컴퓨터를 쉬게 해줌 (메모리 누수 방지)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full z-[-10] bg-[#E9EDF5] bg-cover bg-center"
      style={{
        backgroundImage: `url('/background_large.png')`, // 네가 합쳐준 하나의 긴 이미지!
        // ★★★ 바로 여기가 마법의 핵심! ★★★
        // 스크롤 값에 0.5를 곱해서, 배경이 콘텐츠보다 '느리게' 움직이게 함
        transform: `translateY(-${scrollY * 0.5}px)`,
      }}
    />
  );
};

export default ParallaxBackground;