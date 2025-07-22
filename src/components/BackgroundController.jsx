// src/components/BackgroundController.jsx
import React, { useState, useEffect } from 'react';

const BackgroundController = ({ scrollContainerRef }) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // 콘텐츠 레이어가 스크롤될 때마다 scrollTop 상태를 업데이트
    const handleScroll = () => {
      setScrollTop(scrollContainer.scrollTop);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  return (
    // 이 div는 화면에 고정되어, 스크롤 값에 따라 위치만 바뀜
    <div 
      className="fixed top-0 left-0 w-full h-auto z-0"
      style={{ transform: `translateY(${scrollTop * -0.3}px)` }}
    >
      {/* 1. 메인 배경 이미지 (화면 높이만큼) */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: 'url(/background_large.png)' }}
      />
      
    </div>
  );
};

export default BackgroundController;