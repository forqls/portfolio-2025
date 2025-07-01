// client/src/section/ProjectSection.jsx
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ProjectCard from '../components/ProjectCard.jsx';

// 프로젝트 데이터 예시
const projects = [
  { id: 1, thumbnail: '/vplay_thumbnail.jpg', title: 'VPLAY', description: '디자인, 템플릿, 폰트, 아이콘 등 다양한 디지털 자산을 다운로드할 수 있는 크리에이티브 리소스 플랫폼입니다.', tags: ['팀', '메인'], category: 'Team' },
  { id: 2, thumbnail: '/harmony_thumbnail.jpg', title: '하모니', description: '직장 후원 대상 시스템, 명세한 목표 금액 설정과 기부 성향을 통한 기부 플랫폼입니다.', tags: ['팀', '사이드'], category: 'Team' },
  { id: 3, thumbnail: '/dealon_thumbnail.jpg', title: '딜온', description: '일반 중고 거래와 경매 기능을 통합하여, 다양한 거래 방식을 플랫폼에서 지원하는 중고 거래 시스템입니다.', tags: ['팀', '메인', '진행중'], category: 'Team' },
  { id: 4, thumbnail: '/portfolio_thumbnail.jpg', title: '포트폴리오_2025', description: '리액트를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오 사이트입니다.', tags: ['솔로', '사이드'], category: 'Single' },
  { id: 5, thumbnail: '/naturelica_thumbnail.jpg', title: '네이처리카', description: '워드프레스 기반으로 제작한 웹사이트입니다.', tags: ['솔로', '사이드', '워드프레스'], category: 'Single' },
  { id: 6, thumbnail: '/portfolio_old_thumbnail.jpg', title: '포트폴리오_2023', description: 'HTML, CSS, jQuery를 활용해 기획부터 UI 구현까지 직접 제작한 포트폴리오입니다.', tags: ['솔로', '사이드'], category: 'Single' },
];

const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

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
        
        
       {/* ▼▼▼▼▼ key를 activeFilter로 지정하여 필터가 바뀔 때마다 그리드를 새로 렌더링합니다. ▼▼▼▼▼ */}
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
        // 오버레이 스타일은 그대로 유지
        overlayClassName="fixed inset-0 bg-black/70 flex items-center justify-center z-40 p-4"
        // 모달창 자체의 스타일도 그대로 유지
        className="relative w-full max-w-[80%] h-[90vh] bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        {selectedProject && (
          // <> 태그를 div로 바꾸고 relative를 적용하여 버튼 위치의 새로운 기준점으로 만듭니다.
          <div className="relative w-full h-full">
            {/* ▼▼▼▼▼ 닫기 버튼의 className을 수정합니다. ▼▼▼▼▼ */}
            <button 
              onClick={() => setSelectedProject(null)} 
              // fixed로 화면 기준, top-6(1.5rem), right-6(1.5rem)으로 위치 지정
              className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            >
              <CloseIcon />
            </button>
            <div className="h-full overflow-y-auto pr-4">
              <h2 className="text-4xl font-bold mb-2">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              <div className="w-full h-96 bg-gray-200 rounded-lg mb-6">
                  <img src={selectedProject.thumbnail} alt={`${selectedProject.title} 썸네일`} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProjectSection;