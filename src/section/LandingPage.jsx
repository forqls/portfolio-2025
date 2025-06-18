// client/src/section/LandingPage.jsx
import React from 'react';
import Header from '../components/Header.jsx'; 

function LandingPage() {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-fixed 
                 bg-[linear-gradient(to_bottom,white_90%,#E9EDF5),url('/background.png')]"
    >
      <Header />

      <div className="h-full flex flex-col items-center justify-center text-center -mt-12">
        
        {/* 1. "Engineering"과 "the difference"를 감싸던 flex div를 제거하여 세로로 배치되게 합니다. */}
        
        {/* Engineering 텍스트 */}
        <h1 className="text-[131px] leading-[1.6em] font-black text-brand-dark pr-6">
            Engineering
          </h1>
        
        {/* the difference 텍스트 */}
        {/* 2. 위쪽 h1과 붙어 보이도록 음수 마진(-mt-8)을 적용합니다. */}
        <h2 className="text-[131px] leading-none -mt-8">
          <span className="font-light text-brand-dark">the </span>
          <span className="font-dynapuff font-bold bg-gradient-to-r from-grad-purple-start to-grad-purple-end bg-clip-text text-transparent">
            difference
          </span>
        </h2>

        {/* I'm Hyobin An, a developer 텍스트 */}
        <p className="text-[71px] leading-tight text-brand-dark">
          <span className="font-medium">I'm Hyobin An, a </span>
          <span className="font-black">developer</span>
        </p>
      </div>
    </section>
  );
}

export default LandingPage;