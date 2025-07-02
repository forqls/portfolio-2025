// client/src/section/ProjectSection.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ProjectCard from '../components/ProjectCard.jsx';

// 프로젝트 데이터 예시
// const projects = [
//   { id: 1, thumbnail: '/vplay_thumbnail.jpg', title: 'VPLAY', description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.', tags: ['팀', '메인'], category: 'Team' },
//   { id: 2, thumbnail: '/harmony_thumbnail.jpg', title: '하모니', description: '직장 후원 대상 시스템, 명세한 목표 금액 설정과 기부 성향을 통한 기부 플랫폼입니다.', tags: ['팀', '사이드'], category: 'Team' },
//   { id: 3, thumbnail: '/dealon_thumbnail.jpg', title: '딜온', description: '일반 중고 거래와 경매 기능을 통합하여, 다양한 거래 방식을 플랫폼에서 지원하는 중고 거래 시스템입니다.', tags: ['팀', '메인', '진행중'], category: 'Team' },
//   { id: 4, thumbnail: '/portfolio_thumbnail.jpg', title: '포트폴리오_2025', description: '리액트를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오 사이트입니다.', tags: ['솔로', '사이드'], category: 'Single' },
//   { id: 5, thumbnail: '/naturelica_thumbnail.jpg', title: '네이처리카', description: '워드프레스 기반으로 제작한 웹사이트입니다.', tags: ['솔로', '사이드', '워드프레스'], category: 'Single' },
//   { id: 6, thumbnail: '/portfolio_old_thumbnail.jpg', title: '포트폴리오_2023', description: 'HTML, CSS, jQuery를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오입니다.', tags: ['솔로', '사이드'], category: 'Single' },
// ];

const CloseIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);



// src/section/ProjectSection.jsx
const projects = [
  {
    id: 1,
    thumbnail: '/vplay_thumbnail.jpg',
    title: 'VPLAY',
    description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.',
    period: '2024.01 - 2024.02',
    headcount: '4인 (풀스택 개발)',
    gradient: { from: '#1F1F2C', to: '#383270' }, // VPLAY 전용 그라데이션
    tags: ['팀', '메인'],
    category: 'Team',
    githubUrl: 'https://github.com/forqls/vplay',
    deployUrl: '#',
    myRole: [
      'ERD 설계 및 Oracle DB 구축 (개발)',
      'Spring Security와 JWT를 활용한 인증/인가 시스템 구현',
      '제작의뢰문의 기능 등 RESTful API 설계 및 개발',
      'Figma를 활용한 UI/UX 기획 및 디자인',
    ],
    techStack: { backend: 'Spring Boot, Oracle, PostgreSQL', frontend: 'React, Tailwind CSS' },
    problemSolving: 'Oracle DB 환경을 클라우드 배포를 위해 PostgreSQL로 마이그레이션하며 DBMS간의 SQL 문법 차이를 해결하고 안정성을 확보했습니다.',
    notionUrl: '#'
  },
  {
    id: 2,
    thumbnail: '/harmony_thumbnail.jpg',
    title: '하모니',
    description: '직장 후원 대상 시스템, 명세한 목표 금액 설정과 기부 성향을 통한 기부 플랫폼입니다.',
    period: '2023.11 - 2023.12',
    headcount: '5인 (팀 프로젝트)',
    gradient: { from: '#4E65FF', to: '#7A3DFF' }, // 하모니 전용 그라데이션
    tags: ['팀', '사이드'],
    category: 'Team',
    githubUrl: '#',
    deployUrl: '#',
    myRole: [ '기부금 결제 연동 API 개발 (PG사)', '사용자별 기부 성향 분석 로직 구현' ],
    techStack: { backend: 'Node.js, Express', frontend: 'Vue.js, SCSS' },
    problemSolving: '결제 API 연동 시 발생할 수 있는 네트워크 오류에 대비하여, 재시도 로직과 에러 로깅 시스템을 구축하여 안정성을 높였습니다.',
    notionUrl: '#'
  },
  {
    id: 3,
    thumbnail: '/dealon_thumbnail.jpg',
    title: '딜온',
    description: '기부 목표 설정과 성향 분석을 통한 기부 플랫폼입니다.',
    period: '2025.03.14 - 2025.03.26',
    headcount: '9인 (풀스택 개발)',
    gradient: { from: '#4E65FF', to: '#7A3DFF' },
    tags: ['팀', '사이드'],
    category: 'Team',
    githubUrl: '#',
    deployUrl: '#',
    // --- 👇 '하모니' 프로젝트의 상세 내용 ---
    myRole: [
      '기부금 결제 연동 API 개발 (PG사)',
      '사용자별 기부 성향 분석 로직 구현',
      // ... 하모니 프로젝트에서 한 역할들
    ],
    techStack: {
      backend: 'Node.js, Express',
      frontend: 'Vue.js, SCSS'
    },
    problemSolving: '결제 API 연동 시 발생할 수 있는 네트워크 오류에 대비하여, 재시도 로직과 에러 로깅 시스템을 구축하여 안정성을 높였습니다.',
    notionUrl: '#'
  },
  {
    id: 4,
    thumbnail: '/portfolio_thumbnail.jpg',
    title: '포트폴리오_2025',
    description: '기부 목표 설정과 성향 분석을 통한 기부 플랫폼입니다.',
    period: '2025.03.14 - 2025.03.26',
    headcount: '9인 (풀스택 개발)',
    gradient: { from: '#4E65FF', to: '#7A3DFF' },
    tags: ['팀', '사이드'],
    category: 'Team',
    githubUrl: '#',
    deployUrl: '#',
    // --- 👇 '하모니' 프로젝트의 상세 내용 ---
    myRole: [
      '기부금 결제 연동 API 개발 (PG사)',
      '사용자별 기부 성향 분석 로직 구현',
      // ... 하모니 프로젝트에서 한 역할들
    ],
    techStack: {
      backend: 'Node.js, Express',
      frontend: 'Vue.js, SCSS'
    },
    problemSolving: '결제 API 연동 시 발생할 수 있는 네트워크 오류에 대비하여, 재시도 로직과 에러 로깅 시스템을 구축하여 안정성을 높였습니다.',
    notionUrl: '#'
  },
  {
    id: 5,
    thumbnail: '/naturelica_thumbnail.jpg',
    title: '네이쳐리카',
    description: '기부 목표 설정과 성향 분석을 통한 기부 플랫폼입니다.',
    period: '2025.03.14 - 2025.03.26',
    headcount: '9인 (풀스택 개발)',
    gradient: { from: '#4E65FF', to: '#7A3DFF' },
    tags: ['팀', '사이드'],
    category: 'Team',
    githubUrl: '#',
    deployUrl: '#',
    // --- 👇 '하모니' 프로젝트의 상세 내용 ---
    myRole: [
      '기부금 결제 연동 API 개발 (PG사)',
      '사용자별 기부 성향 분석 로직 구현',
      // ... 하모니 프로젝트에서 한 역할들
    ],
    techStack: {
      backend: 'Node.js, Express',
      frontend: 'Vue.js, SCSS'
    },
    problemSolving: '결제 API 연동 시 발생할 수 있는 네트워크 오류에 대비하여, 재시도 로직과 에러 로깅 시스템을 구축하여 안정성을 높였습니다.',
    notionUrl: '#'
  },
  {
    id: 6,
    thumbnail: '/portfolio_old_thumbnail.jpg',
    title: '포트폴리오_2023',
    description: '기부 목표 설정과 성향 분석을 통한 기부 플랫폼입니다.',
    period: '2025.03.14 - 2025.03.26',
    headcount: '9인 (풀스택 개발)',
    gradient: { from: '#4E65FF', to: '#7A3DFF' },
    tags: ['팀', '사이드'],
    category: 'Team',
    githubUrl: '#',
    deployUrl: '#',
    // --- 👇 '하모니' 프로젝트의 상세 내용 ---
    myRole: [
      '기부금 결제 연동 API 개발 (PG사)',
      '사용자별 기부 성향 분석 로직 구현',
      // ... 하모니 프로젝트에서 한 역할들
    ],
    techStack: {
      backend: 'Node.js, Express',
      frontend: 'Vue.js, SCSS'
    },
    problemSolving: '결제 API 연동 시 발생할 수 있는 네트워크 오류에 대비하여, 재시도 로직과 에러 로깅 시스템을 구축하여 안정성을 높였습니다.',
    notionUrl: '#'
  },
];


  useEffect(() => {
    // 필터링 애니메이션 로직
    const allProjects = projects.filter(p => activeFilter === 'All' || p.category === activeFilter);
    setFilteredProjects(allProjects);
  }, [activeFilter]);
  
  useEffect(() => {
    // selectedProject에 데이터가 있으면(모달이 열리면) true
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // body의 스크롤을 막습니다.
    } else {
      document.body.style.overflow = 'unset'; // body의 스크롤을 다시 허용합니다.
    }

    // 컴포넌트가 사라질 때 원래대로 돌려놓는 정리(cleanup) 함수
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filters = ['All', 'Team', 'Single'];

  return (
    <section className="relative z-10 min-h-screen bg-transparent px-8 py-24 sm:px-16 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-brand-dark mb-4">Project</h2>
        
       <div className="inline-flex items-center gap-2 bg-[#F9F9F9]/50 p-[0.6rem] rounded-full mb-8 backdrop-blur-[40px]">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              // 2. 개별 버튼: 패딩(py-2.5 px-[15px]), 폰트, 기본 투명 배경 등
              // 3. activeFilter 상태에 따라 동적으로 스타일 변경
              className={`px-[15px] pt-[0.325rem] pb-[0.425rem] rounded-full font-medium text-brand-dark transition-colors duration-300 ${
                activeFilter === filter 
                ? 'bg-gradient-to-r from-brand-pink to-brand-purple shadow-sm' 
                : 'bg-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            // ▼▼▼▼▼ 각 카드에 index를 전달합니다. ▼▼▼▼▼
            <ProjectCard 
              key={project.id} 
              project={project} 
              onCardClick={() => setSelectedProject(project)} 
              index={index}
            />
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 보기 모달 */}
         <Modal
        isOpen={!!selectedProject}
        onRequestClose={() => setSelectedProject(null)}
        contentLabel="프로젝트 상세"
        // ▼▼▼ overlayClassName, style prop 모두 없는지 확인! ▼▼▼
        closeTimeoutMS={200} // 애니메이션 시간과 맞춰주기
        className="contents" // 모달 내용물은 우리가 직접 꾸밀 것이므로 그대로 둠
      >
        <div className="relative w-[80vw] h-auto flex items-start">
          <div className="w-full max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-y-auto invisible-scrollbar">
            {selectedProject && ( // selectedProject가 있을 때만 렌더링
              <div className="">
                
                {/* 상단 이미지 및 제목 */}
               <div
                  className="w-full text-center text-white pt-20 px-12 pb-12"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${selectedProject.gradient?.from || '#4A5568'}, ${selectedProject.gradient?.to || '#2D3748'})`
                  }}
                >
                  <div className="inline-block w-full max-w-lg h-auto rounded-lg shadow-lg mb-11">
                    <img alt={`${selectedProject.title} 썸네일`} className="w-full h-full object-cover rounded-md" src={selectedProject.thumbnail} />
                  </div>
                  <h2 className="text-[1.625rem] font-bold mb-6 text-white">{selectedProject.title}</h2>
                  <p className="text-base text-white mb-6">{selectedProject.description}</p> {/* text-white로 변경 */}
                  <p className="text-sm font-medium text-white mb-6"> {/* text-white로 변경 */}
                    <span>{selectedProject.period}</span>
                    <span className="ml-2.5">[{selectedProject.headcount}]</span>
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>


                {/* 하단 상세 내용 */}
                <div className="space-y-12 text-left p-12 md:p-16 lg:p-20">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">주요 역할 (My Role)</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      {selectedProject.myRole.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">기술 스택 (Tech Stack)</h3>
                    <div className="space-y-3">
                       <p><strong className="font-semibold">Backend:</strong> {selectedProject.techStack.backend}</p>
                       <p><strong className="font-semibold">Frontend:</strong> {selectedProject.techStack.frontend}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">문제 해결 경험</h3>
                     <p className="text-gray-600 leading-relaxed">{selectedProject.problemSolving}</p>
                  </div>

                  <div>
                     <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">더 자세한 개발 과정이 궁금하다면?</h3>
                     <div className="flex gap-4">
                       <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Repository ↗</a>
                       <a href={selectedProject.notionUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">기획/설계 문서 보기 (Notion) ↗</a>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="absolute top-6 -right-16 flex flex-col items-center gap-4">
            <button onClick={() => setSelectedProject(null)} className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-800 transition-colors">
              <CloseIcon />
            </button>
            <a href={selectedProject?.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-800 transition-colors">
              <GithubIcon />
            </a>
            <a href={selectedProject?.deployUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 text-white rounded-full hover:bg-gray-800 transition-colors">
              <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default ProjectSection;