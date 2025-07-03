// src/section/CareerEducationSection.jsx
import React from 'react';

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

const educationData = [
  {
    title: 'kh정보교육원',
    subtitle: 'React & Spring 기반 Java 개발자 양성과정 수료',
    details: [
      'Java, JavaScript, React, Spring 등 웹 개발에 필요한 주요 기술 스택 학습',
      'Oracle을 기반으로 한 데이터베이스 설계 및 SQL 활용 실습 경험',
      'HTML, CSS, jQuery를 활용한 반응형 UI 설계 및 프론트엔드 구현 역량 강화',
      'Servlet, JSP, MyBatis를 활용한 백엔드 구조 설계 및 구현 경험',
      'Spring Framework를 활용한 MVC 아키텍처 기반 웹 애플리케이션 개발',
      '20주간 매일 과제를 수행하며 익힌 프로그래밍 및 코드 리뷰 중심 학습',
      '팀 프로젝트(2회) 수행',
      'API 설계, DB 모델링 등 실무 중심의 전 과정을 경험',
      '스터디 참여를 통해 동료와 소통 능력과 실전 기술 이해도 향상'
    ],
    skills: [
      'Java', 'Spring Boot', 'MyBatis', 'Oracle', 'MySQL', 'Servlet', 'JSP',
      'JavaScript', 'React', 'CSS3', 'HTML5', 'jQuery', 'GitHub',
      'Notion', 'Discord'
    ]
  }
];

const careerData = [
  {
    title: '(주)이씨씨플라자',
    subtitle: 'e-메디어사업팀 · 웹 구축',
    details: [
      'HTML과 CSS를 기반으로 웹 접근성 및 표준을 고려한 비용산정솔루션 유지보수 작업 수행.',
      '기획자와의 원활한 협업을 위해 다양한 방법을 강구했으며, 지속적인 커뮤니케이션을 통해 프로젝트의 완성도를 높임',
      '자사 사이트를 포함한 5개 이상의 기업 웹사이트 유지보수 경험이 있으며, 클라이언트와의 직접 소통을 통해 요구사항을 구체화하고 프로젝트 방향성을 설정',
    ],
    skills: ['CSS3', 'HTML5', 'jQuery', 'Figma']
  }
];

const SkillsTools = ({ skills }) => (
  <div className="mt-8">
    <div className="flex flex-wrap gap-2">
      {skills.map((tool) => (
        <div key={tool} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 rounded-full backdrop-blur-sm">
          {skillIcons[tool] && (
            <span className="w-5 h-5 flex items-center justify-center text-brand-dark">{skillIcons[tool]}</span>
          )}
          <span className="text-sm font-medium text-brand-dark">{tool}</span>
        </div>
      ))}
    </div>
  </div>
);


const CareerEducationSection = () => {
  return (
    <section id="career" className="relative z-10 min-h-screen px-8 py-24 sm:px-16 lg:px-32 bg-transparent">
      <div className="container mx-auto">

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education 컬럼 */}
          <div className="flex flex-col">
            <h3 className="text-5xl font-bold text-brand-dark mb-4 text-left">Education</h3>
            {educationData.map((edu, index) => (
              // 2. 카드 컨테이너: h-full로 높이를 채우고, mt-2 적용
              <div key={index} className="bg-white/10 backdrop-blur-[40px] rounded-2xl text-left shadow-glass-soft mt-2 p-8 flex-grow h-full flex flex-col">
                <h4 className="text-[1.625rem] font-bold text-brand-dark">{edu.title}</h4>
                <p className="text-lg font-medium text-brand-dark mt-1 mb-6">{edu.subtitle}</p>
                {/* 3. li 간격: space-y-1로 수정 */}
                <ul className="list-disc list-inside space-y-1 text-base text-brand-dark flex-grow">
                  {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
                <SkillsTools skills={edu.skills} />
              </div>
            ))}
          </div>

          {/* Career 컬럼 */}
          <div className="flex flex-col">
            <h3 className="text-5xl font-bold text-brand-dark mb-4 text-left">Career</h3>
            {careerData.map((car, index) => (

              <div key={index} className="bg-white/10 backdrop-blur-[40px] rounded-2xl text-left shadow-glass-soft mt-2 p-8 flex-grow h-full flex flex-col">
                <h4 className="text-[1.625rem] font-bold text-brand-dark">{car.title}</h4>
                <p className="text-lg font-medium text-brand-dark mt-1 mb-6">{car.subtitle}</p>
                
                <ul className="list-disc list-inside space-y-1 text-base text-brand-dark flex-grow">
                  {car.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
                <SkillsTools skills={car.skills} />
              </div>
            ))}
          </div>

        </div>


      </div>
    </section>
  );
};

export default CareerEducationSection;