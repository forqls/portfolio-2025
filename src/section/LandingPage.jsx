// client/src/section/LandingPage.jsx
import React from 'react';
import Header from '../components/Header.jsx'; 


function LandingPage() {
  return (
    <section 
      className="h-screen bg-transparent"
    >
      <Header />

      <div className="h-full flex flex-col items-center justify-center text-center -mt-12">
        
        <h1 className="text-[131px] leading-[1.6em] font-black text-brand-dark pr-6">
            Engineering
          </h1>
        
        <h2 className="text-[131px] leading-none -mt-8">
          <span className="font-light text-brand-dark">the </span>
          <span className="font-dynapuff font-bold bg-gradient-to-r from-grad-purple-start to-grad-purple-end bg-clip-text text-transparent">
            difference
          </span>
        </h2>

        <p className="text-[71px] leading-tight text-brand-dark">
          <span className="font-medium">I'm Hyobin An, a </span>
          <span className="font-black">developer</span>
        </p>
      </div>
    </section>
  );
}

export default LandingPage;