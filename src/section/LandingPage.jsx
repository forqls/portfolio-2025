// src/section/LandingPage.jsx

function LandingPage() {
  return (
    // 배경 관련 코드는 모두 제거! 높이(h-screen)와 콘텐츠 정렬만 남깁니다.
    <section className="h-screen flex flex-col items-center justify-center text-center">
      
      {/* "Engineering"과 "the difference"를 한 줄에 배치하기 위해 flex 사용 */}
      <div className="flex items-center">
        {/* Engineering 텍스트 */}
        <h1 className="text-[131px] leading-none font-black text-brand-dark pr-6">
          Engineering
        </h1>
        
        {/* the difference 텍스트 */}
        <h2 className="text-[131px] leading-none">
          <span className="font-light text-brand-dark">the </span>
          <span className="font-dynapuff font-bold bg-gradient-to-r from-grad-purple-start to-grad-purple-end bg-clip-text text-transparent">
            difference
          </span>
        </h2>
      </div>

      {/* I'm Hyobin An, a developer 텍스트 */}
      <p className="text-[71px] leading-tight text-brand-dark -mt-4">
        <span className="font-medium">I'm Hyobin An, a </span>
        <span className="font-black">developer</span>
      </p>
    </section>
  );
}

export default LandingPage;