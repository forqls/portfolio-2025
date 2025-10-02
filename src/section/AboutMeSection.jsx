// client/src/section/AboutMeSection.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

import CssIcon from '../assets/skill_icons/CSS3.svg?react';
import HtmlIcon from '../assets/skill_icons/html5.svg?react';
import JsIcon from '../assets/skill_icons/JavaScript.svg?react';
import JqueryIcon from '../assets/skill_icons/jQuery.svg?react';
import ReactIcon from '../assets/skill_icons/React.svg?react';
import TailwindIcon from '../assets/skill_icons/Tailwind.svg?react';
import JavaIcon from '../assets/skill_icons/Java.svg?react';
import SpringIcon from '../assets/skill_icons/Spring_Boot.svg?react';
import MyBatisIcon from '../assets/skill_icons/MyBatis.svg?react';
import OracleIcon from '../assets/skill_icons/Oracle.svg?react';
import MySqlIcon from '../assets/skill_icons/MySQL.svg?react';
import NodejsIcon from '../assets/skill_icons/NodeJS.svg?react';
import FigmaIcon from '../assets/skill_icons/Figma.svg?react';
import GithubIcon from '../assets/skill_icons/GitHub.svg?react';
import NotionIcon from '../assets/skill_icons/Notion.svg?react';
import DiscordIcon from '../assets/skill_icons/Discord.svg?react';

// 데이터: Q&A, 스킬, 키워드, 아이콘 매핑
const interviews = [
  {
    question: '개발자가 된 계기와 성향은?',
    answer: '웹 서비스를 만들면서 단순한 기능 구현을 넘어서 사용자 경험을 고려한 기능 중심 개발에 흥미를 느꼈습니다. 프론트와 백엔드를 모두 경험하며 서비스 전체의 사이클을 이해하고, 작은 차이를 만들어 더 나은 개발자가 되고자 노력하고 있습니다.',
  },
  {
    question: '개발할 때 가장 중요하게 생각하는 것은?',
    answer: '작은 디테일이 경험 전체를 바꾼다는 믿음으로 기능 하나를 구현하더라도 코드, 예외 처리, 보안, 성능까지 신경 쓰려고 노력합니다. 또한, 동료 프로젝트에선 소통과 역할을 중시하며, 작은 피드백도 빠르게 반영하는 유연한 자세를 유지하려고 합니다.',
  },
  {
    question: '자기개발을 위해 어떤 노력을 해왔나요?',
    answer: '효율적인 개발을 위해 지속적인 학습과 피드백 수용을 실천해왔습니다. 오류가 발생했을 때 단순히 고치기보다 원인을 분석하고 체계적인 해결 방안을 찾는 습관을 들였습니다. 스터디와 프로젝트를 통해 다양한 도전을 즐기고 있습니다.',
  },
];
const skills = [
  { category: 'Frontend', tools: ['CSS3', 'HTML5', 'JavaScript', 'jQuery', 'React', 'Tailwind CSS'] },
  { category: 'Backend', tools: ['Java', 'Spring Boot', 'MyBatis', 'Oracle', 'MySQL', 'Servlet', 'JSP'] },
  { category: 'Fullstack/Server', tools: ['Node.js'] },
  { category: 'Tools', tools: ['Figma', 'GitHub', 'Notion', 'Discord'] },
];
const keywords = ['꾸준한성장', '실행력', '피드백환영', '열정가득'];
const skillIcons = {
  'CSS3': <CssIcon />,
  'HTML5': <HtmlIcon />,
  'JavaScript': <JsIcon />,
  'jQuery': <JqueryIcon />,
  'React': <ReactIcon />,
  'Tailwind CSS': <TailwindIcon />,
  'Java': <JavaIcon />,
  'Spring Boot': <SpringIcon />,
  'MyBatis': <MyBatisIcon />,
  'Oracle': <OracleIcon />,
  'MySQL': <MySqlIcon />,
  'Node.js': <NodejsIcon />,
  'Figma': <FigmaIcon />,
  'GitHub': <GithubIcon />,
  'Notion': <NotionIcon />,
  'Discord': <DiscordIcon />,
};


// 팀원 리뷰 데이터
const reviews = [
  {
    title : "사회에서 다시 만나고 싶은 분",
    content: "효빈님은 섬세한 디자인 감각과 프론트엔드 활용 능력이 돋보이는 동료입니다. 여기에 안주하지 않고, 백엔드 역량을 책임감을 갖고 꾸준히 발전시키려는 모습이 특히 인상 깊었습니다.프로젝트 중 궁금한 점이 생겼을 때 늘 친절하고 꼼꼼하게 답변해주어, 원활한 소통 덕분에 프로젝트 진행에 큰 도움을 받았습니다. 함께하는 동안 팀원들에게 훌륭한 멘토와 같은 존재가 되어주었습니다.",
    author: "이*윤님/VPLAY",
  },
  {
    title : "성장으로 증명하는 동료",
    content: "사용자 경험(UX)을 최우선으로 생각하며 개발에 임하는 자세에서 많이 배웠습니다. 프론트엔드 화면을 구성할 때 보여준 사용자 중심적 사고는, 백엔드 API를 설계할 때도 빛을 발하며 서비스의 완성도를 높이는 데 크게 기여했습니다.또한, 맡은 백엔드 분야에 대한 강한 책임감과 새로운 기술을 자신의 역량으로 만드려는 열정으로 프로젝트가 진행될수록 빠르게 성장하는 모습을 보여주어 팀 전체에 강력한 동기부여가 되었습니다. ",
    author: "권*혁님/VPLAY",
  },
  {
    title : "조용한 커밋(positive), 투명한 공유",
    content: "효빈님은 자신의 역할을 넘어 팀에 필요한 일을 스스로 찾아 해결하는 주도적인 동료입니다. 프로젝트 중 예상치 못한 이슈가 발생했을 때, 이를 가장 먼저 발견하고 묵묵히 해결해내는 모습에서 강한 책임감을 느낄 수 있었습니다.특히, 문제 해결 과정을 팀원들과 투명하게 공유하는 소통 능력 덕분에 모두가 진행 상황을 명확히 파악하고 안정적으로 프로젝트를 진행할 수 있었습니다. 효빈님 덕분에 프로젝트가 훨씬 수월하게 마무리될 수 있었다고 생각합니다.",
    author: "윤*호님/하모니",
  },
  {
    title : "성장의 가장 빠른 지름길, '솔직함'",
    content: "효빈님은 자신의 한계를 솔직하게 인정하고, 팀의 성장을 위해 적극적으로 질문하는 용기 있는 동료입니다. 모르는 기술을 마주했을 때 주저하지 않고 질문하고, 해결책을 얻으면 단순히 적용하는 것을 넘어 완벽히 자신의 것으로 소화해내는빠른 학습 능력을 보여주었습니다. 특히, 한번 맡은 기능은 어떤 어려움이 있더라도 끝까지 책임지고 완성해내는 끈기는 프로젝트의 안정성을 높이는 데 크게 기여했습니다. 효빈님의 이러한 태도는 '함께 성장하는 개발자'의 가장 좋은 예시라고 생각합니다.",
    author: "손*준님/하모니 & VPLAY & 딜온",
  },
  {
    title : "긍정을 실천하는 분",
    content: '효빈님은 위기 상황에서 팀의 중심을 잡아주는 든든한 동료입니다. 빠듯한 마감일과 예상치 못한 문제로 팀의 사기가 저하될 때마다, "괜찮아요, 함께 해결하면 돼요" 라는 긍정적인 말과 함께 해결책을 찾아 나서는 모습으로 팀에 활력을 불어넣었습니다.특히 실수를 자책하는 분위기 대신 성장의 기회로 삼는 건설적인 태도를 제시하여, 팀원들이 다시 개발에 집중하고 심리적 안정감을 얻는 데 큰 도움을 주었습니다. 효빈님의 긍정 덕분에 저희 팀은 어려운 순간들을 함께 극복하고 나아갈 수 있었습니다.',
    author: "강*오님/하모니",
  },
  {
    title : "함께하면 '좋은 결과'를 만드는 동료",
    content: "효빈님은 맡은 역할에 대한 강한 책임감으로 언제나 팀에 깊은 신뢰를 주는 동료였습니다. 바쁜 프로젝트 상황 속에서도 약속된 일정은 반드시 지켜내는 모습은 팀의 안정적인 운영에 큰 힘이 되었습니다.",
    author: "박*훈님/딜온",
  },
  {
    title : "1+1=3을 만드는 개발자",
    content: "처음 접하는 기술 스택으로 새로운 프로젝트를 시작하는 것은 팀 전체에 큰 도전이었습니다. 모두가 낯선 환경에 어려움을 겪을 때, 효빈님은 '함께'의 가치를 실현하며 팀의 구심점 역할을 했습니다.각자 고군분투하기보다 자신이 먼저 학습한 내용을 팀원들에게 적극적으로 공유하고, 어려운 문제는 다 같이 모여 해결하는 협업 문화를 주도했습니다. 효빈님의 이러한 헌신적인 노력 덕분에 저희 팀은 기술적인 장벽을 빠르게 극복하고 프로젝트를 성공적으로 완수할 수 있었습니다.",
    author: "문*종님/딜온",
  },
  {
    title : "좋은 기획 + 투명한 소통 = 최고의 파트너",
    content: "효빈님은 깊은 고민을 통해 최적의 화면을 구성하는 기획력이 돋보이는 동료입니다. 적극적인 코드 리뷰와 투명한 진행 상황 공유로 팀의 협업을 이끌어, 함께 일하기에 더없이 좋은 파트너였습니다.",
    author: "황*현님/딜온",
  },
  
];

// 아이콘 컴포넌트
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.47109L1.48725 0L9.58796 8.01742C9.71853 8.14589 9.82216 8.29866 9.89288 8.46693C9.96359 8.6352 10 8.81566 10 8.99792C10 9.18017 9.96359 9.36063 9.89288 9.5289C9.82216 9.69718 9.71853 9.84994 9.58796 9.97841L1.48725 18L0.0014019 16.5289L7.60448 9L0 1.47109Z" fill="currentColor"/>
  </svg>
);


const AboutMeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about-me" className="relative z-10 min-h-screen px-8 py-24 sm:px-16 lg:px-32 bg-transparent">
      <div className="container mx-auto">

        {/* About me & Interview 제목 */}
        <div className="mb-[1.2rem] text-left">
            <h2 className="text-[3.25rem] font-bold text-brand-dark mb-6 w-full">About me</h2>
            <h3 className="text-[1.875rem] font-medium text-brand-dark w-full">Interview</h3>
        </div>

        {/* 메인 콘텐츠 그리드 (좌우 컬럼) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16">
          
          {/* 왼쪽 컬럼 */} 
          <div className="lg:col-span-2">
            {/* Interview Q&A */}
            <div className="space-y-5 mb-16">
              {interviews.map((item, index) => (
                <div key={index} className="border-2 border-[#DCDFF1] bg-[#EAEFF5]/10 backdrop-blur-[20px] rounded-2xl px-[1.875rem] pt-[1.875rem] pb-[2.8125rem]">
                   <h4 className="text-[1.375rem] font-semibold text-brand-dark mb-[1.2rem]">Q. {item.question}</h4>
                   <p className="text-lg font-light text-brand-dark leading-[1.425]">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Skills & Tools */}
          <div>
              <h2 className="text-[1.875rem] font-semibold text-brand-dark mb-[1.875rem]">Skills & Tools</h2>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="flex items-center">
                    <p className="flex-shrink-0 text-[1.375rem] font-medium text-brand-dark px-[1.625rem] pt-[0.3rem] pb-[0.4rem] bg-skills-bg rounded-full">{skill.category}</p> 
                    <div className="flex flex-wrap gap-[0.625rem] ml-4">
                      {skill.tools.map((tool) => (
                        <div key={tool} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/60 rounded-full backdrop-blur-sm">
                          {skillIcons[tool] && (
                            <span className="w-5 h-5 flex items-center justify-center text-brand-dark">{skillIcons[tool]}</span>
                          )}
                          <span className="text-sm font-medium text-brand-dark">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

  
          {/* 오른쪽 컬럼 */}
          <div className="flex flex-col space-y-[1.375rem]">
            
            {/* 1. 프로필 이미지 div: backdrop-blur 추가 */}
            <div className="flex items-end justify-center bg-profile-image-bg/80 backdrop-blur-[20px] border-[20px] border-profile-border rounded-[15px] aspect-square">
              {/* 이미지 너비를 w-2/3로 수정 */}
              <img src="/profile-image.png" alt="안효빈 프로필 사진" className="w-2/3" />
            </div>

            {/* 2. 해시태그 div: backdrop-blur 추가 */}
            <div className="bg-profile-image-bg/80 backdrop-blur-[20px] border border-profile-border rounded-[15px] p-[2.5rem] px-[2.1875rem]">
              <div className="flex justify-between">
                {keywords.map((keyword) => (
                  <span key={keyword} className="text-lg font-medium text-brand-dark">#{keyword}</span>
                ))}
              </div>
            </div>
            
            {/* 3. 자기소개 div: backdrop-blur 추가 */}
            <div className="bg-profile-image-bg/80 backdrop-blur-[20px] border border-profile-border rounded-[15px] p-[2.5rem] px-[2.1875rem] text-left">
              <p className="text-lg font-light leading-relaxed text-brand-dark">
                <span className="font-semibold">작은 차이</span>를 만드는 개발자, <span className="font-semibold">안효빈</span>입니다.
                <br/>서비스 전반의 흐름을 이해하고, 
                <br/><span className="font-semibold">백엔드</span>와 <span className="font-semibold">프론트</span>를 넘나드는 개발자로 
                <br/>성장하고 있습니다.
              </p>
            </div>

            {/* 팀원 리뷰 보기 버튼 */}
            <button 
              onClick={openModal}
              className="inline-flex items-center self-start justify-center py-[0.5rem] px-[2.1875rem] text-xl font-medium text-brand-dark rounded-full bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-90 transition-opacity gap-[1.625rem]"
            >
              팀원 리뷰 보기
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* 모달 창 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="팀원 리뷰"
        overlayClassName="fixed inset-0 flex items-center justify-center z-40 custom-modal-overlay"
        className="relative w-full h-screen bg-[#E9EDF5] text-brand-dark shadow-xl py-24 px-32"
      >
        <button 
          onClick={closeModal} 
          className="absolute top-6 right-6 text-gray-600 hover:text-black transition-colors z-10"
        >
          <CloseIcon />
        </button>

        <div className="h-full overflow-y-auto pr-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white/60 p-6 rounded-lg flex flex-col justify-between">
                <p className="text-lg font-medium text-brand-dark leading-[1.425] mb-4">{review.title}</p>
                <p className="leading-relaxed">“ {review.content} ”</p>
                <p className="text-right text-gray-500 mt-4">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default AboutMeSection;