// src/section/ThankYouSection.jsx
import React from 'react';

const ThankYouSection = () => {
  return (
    <section 
      id="contact" 
      className="h-screen flex flex-col items-center justify-center text-center p-8"
    >
      <h2 className="font-dynapuff font-bold text-[131px] bg-gradient-to-r from-grad-purple-start to-grad-purple-end bg-clip-text text-transparent mb-4">
        Thank You :)
        </h2>
      <p className="text-[41px] font-medium text-brand-dark mb-8">
        추가로 궁금한 사항이 있다면 언제든지 편하게 연락 주세요.
      </p>
      <p className="text-xl text-brand-dark leading-relaxed">
        단순히 기능을 만드는 데 그치지 않고, 왜 필요한지 고민하며 더 나은 방향을 제안할 수 있는 개발자.
        <br />
        팀과 함께 성장하고, 꾸준히 배우며 변화에 유연하게 대응할 수 있는 개발자로 나아가고자 합니다.
      </p>
    </section>
  );
};

export default ThankYouSection;