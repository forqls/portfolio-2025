// src/components/FixedButtons.jsx
import React, { useState } from 'react';


// 아이콘 SVG 컴포넌트들
const MailIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const UpArrowIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);


const FixedButtons = () => {
  const myEmail = 'ekdgozz@gmail.com';
  const [copied, setCopied] = useState(false);

  // 이메일 주소 복사하는 함수
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후에 "Copied!" 메시지 사라짐
    });
  };

  // 페이지 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 부드럽게 스크롤
    });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-30">
      
      {/* --- 1. 이메일 버튼 --- */}
      <div className="relative group">
        <button
          onClick={handleCopyEmail}
          className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm hover:scale-110 transition-transform"
        >
          <MailIcon />
        </button>
        {/* 마우스 올렸을 때 보이는 이메일 주소 */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-brand-dark text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          {myEmail}
          <div className="absolute top-full right-4 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-brand-dark"></div>
        </div>
        {/* 복사 성공 시 보이는 메시지 */}
        {copied && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-green-500 text-white text-sm rounded-md transition-opacity">
            Copied!
          </div>
        )}
      </div>

      {/* --- 2. 위로가기 버튼 --- */}
      <button 
        onClick={scrollToTop}
        className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm hover:scale-110 transition-transform"
      >
        <UpArrowIcon />
      </button>

    </div>
  );
};

export default FixedButtons;