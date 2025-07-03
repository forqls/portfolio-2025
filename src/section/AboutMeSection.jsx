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


// ▼▼▼▼▼ 팀원 리뷰 데이터를 배열로 관리합니다. ▼▼▼▼▼
const reviews = [
  {
    content: "책임감이 강하고, 맡은 바는 시간 안에 해결하려는 모습이 좋았습니다. 시간 약속도 잘 지키고, 무엇보다 프로젝트에 애정을 갖고 진심으로 참여하는 모습이 인상적이었습니다. 피드백도 긍정적으로 수용하고...",
    author: "남궁혜민님/웹퍼블리셔",
  },
  {
    content: "디자인 퀄리티 향상을 위해 항상 노력하는 모습이 보였습니다. 주어진 디자인에만 안주하지 않고, 먼저 개선점을 찾아 제안해주시는 모습에서 깊은 인상을 받았습니다. 소통 시에도 명확하게 의견을 전달해주셔서...",
    author: "김남준님/기획자",
  },
  {
    content: "뛰어난 문제 해결 능력을 갖추고 있습니다. 복잡한 로직도 두려워하지 않고, 체계적으로 분석하여 해결책을 찾아내는 능력이 탁월합니다. 막히는 부분이 있을 때, 함께 머리를 맞대고 해결의 실마리를 찾아가는 과정이...",
    author: "박지민님/백엔드 개발자",
  },
  // ... (여기에 다른 리뷰들을 추가하면 됩니다) ...
  {
    content: "소통에 적극적입니다.",
    author: "전정국님/FE개발자",
  },
  {
    content: "포기하지 않는 집요함이 있습니다.",
    author: "김석진님/DBA",
  },
  {
    content: "항상 긍정적인 에너지가 넘칩니다.",
    author: "정호석님/서버 개발자",
  },
  {
    content: "책임감이 강하고, 맡은 바는 시간 안에 해결하려는 모습이 좋았습니다. 시간 약속도 잘 지키고, 무엇보다 프로젝트에 애정을 갖고 진심으로 참여하는 모습이 인상적이었습니다. 피드백도 긍정적으로 수용하고...",
    author: "남궁혜민님/웹퍼블리셔",
  },
  {
    content: "디자인 퀄리티 향상을 위해 항상 노력하는 모습이 보였습니다. 주어진 디자인에만 안주하지 않고, 먼저 개선점을 찾아 제안해주시는 모습에서 깊은 인상을 받았습니다. 소통 시에도 명확하게 의견을 전달해주셔서...",
    author: "김남준님/기획자",
  },
  {
    content: "뛰어난 문제 해결 능력을 갖추고 있습니다. 복잡한 로직도 두려워하지 않고, 체계적으로 분석하여 해결책을 찾아내는 능력이 탁월합니다. 막히는 부분이 있을 때, 함께 머리를 맞대고 해결의 실마리를 찾아가는 과정이...",
    author: "박지민님/백엔드 개발자",
  },
  // ... (여기에 다른 리뷰들을 추가하면 됩니다) ...
  {
    content: "소통에 적극적입니다.",
    author: "전정국님/FE개발자",
  },
  {
    content: "포기하지 않는 집요함이 있습니다.",
    author: "김석진님/DBA",
  },
  {
    content: "항상 긍정적인 에너지가 넘칩니다.",
    author: "정호석님/서버 개발자",
  },
  {
    content: "책임감이 강하고, 맡은 바는 시간 안에 해결하려는 모습이 좋았습니다. 시간 약속도 잘 지키고, 무엇보다 프로젝트에 애정을 갖고 진심으로 참여하는 모습이 인상적이었습니다. 피드백도 긍정적으로 수용하고...",
    author: "남궁혜민님/웹퍼블리셔",
  },
  {
    content: "디자인 퀄리티 향상을 위해 항상 노력하는 모습이 보였습니다. 주어진 디자인에만 안주하지 않고, 먼저 개선점을 찾아 제안해주시는 모습에서 깊은 인상을 받았습니다. 소통 시에도 명확하게 의견을 전달해주셔서...",
    author: "김남준님/기획자",
  },
  {
    content: "뛰어난 문제 해결 능력을 갖추고 있습니다. 복잡한 로직도 두려워하지 않고, 체계적으로 분석하여 해결책을 찾아내는 능력이 탁월합니다. 막히는 부분이 있을 때, 함께 머리를 맞대고 해결의 실마리를 찾아가는 과정이...",
    author: "박지민님/백엔드 개발자",
  },
  // ... (여기에 다른 리뷰들을 추가하면 됩니다) ...
  {
    content: "소통에 적극적입니다.",
    author: "전정국님/FE개발자",
  },
  {
    content: "포기하지 않는 집요함이 있습니다.",
    author: "김석진님/DBA",
  },
  {
    content: "항상 긍정적인 에너지가 넘칩니다.",
    author: "정호석님/서버 개발자",
  },
  {
    content: "책임감이 강하고, 맡은 바는 시간 안에 해결하려는 모습이 좋았습니다. 시간 약속도 잘 지키고, 무엇보다 프로젝트에 애정을 갖고 진심으로 참여하는 모습이 인상적이었습니다. 피드백도 긍정적으로 수용하고...",
    author: "남궁혜민님/웹퍼블리셔",
  },
  {
    content: "디자인 퀄리티 향상을 위해 항상 노력하는 모습이 보였습니다. 주어진 디자인에만 안주하지 않고, 먼저 개선점을 찾아 제안해주시는 모습에서 깊은 인상을 받았습니다. 소통 시에도 명확하게 의견을 전달해주셔서...",
    author: "김남준님/기획자",
  },
  {
    content: "뛰어난 문제 해결 능력을 갖추고 있습니다. 복잡한 로직도 두려워하지 않고, 체계적으로 분석하여 해결책을 찾아내는 능력이 탁월합니다. 막히는 부분이 있을 때, 함께 머리를 맞대고 해결의 실마리를 찾아가는 과정이...",
    author: "박지민님/백엔드 개발자",
  },
  // ... (여기에 다른 리뷰들을 추가하면 됩니다) ...
  {
    content: "소통에 적극적입니다.",
    author: "전정국님/FE개발자",
  },
  {
    content: "포기하지 않는 집요함이 있습니다.",
    author: "김석진님/DBA",
  },
  {
    content: "항상 긍정적인 에너지가 넘칩니다.",
    author: "정호석님/서버 개발자",
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
    {/* fill 속성을 text-brand-dark와 맞추기 위해 currentColor를 사용합니다. */}
    <path d="M0 1.47109L1.48725 0L9.58796 8.01742C9.71853 8.14589 9.82216 8.29866 9.89288 8.46693C9.96359 8.6352 10 8.81566 10 8.99792C10 9.18017 9.96359 9.36063 9.89288 9.5289C9.82216 9.69718 9.71853 9.84994 9.58796 9.97841L1.48725 18L0.0014019 16.5289L7.60448 9L0 1.47109Z" fill="currentColor"/>
  </svg>
);


const AboutMeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative z-10 min-h-screen px-8 py-24 sm:px-16 lg:px-32">
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