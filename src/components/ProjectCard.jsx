// client/src/components/ProjectCard.jsx
import React from 'react';

// '자세히 보기'에 사용할 아이콘
const DetailIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
);

const ProjectCard = ({ project, onCardClick }) => {
  // 1. ▼▼▼▼▼ 오류 방지 코드: project 데이터가 없을 경우 아무것도 보여주지 않음 ▼▼▼▼▼
  if (!project) {
    return null; 
  }

  const { thumbnail, title, description, tags } = project;

  return (
    <div className="group relative transition-transform duration-300 ease-out hover:-translate-y-[10px]">
      <div className={`bg-white/10 backdrop-blur-[20px] rounded-lg shadow overflow-hidden text-left w-full`}>
        <div className="w-full h-60 bg-gray-200">
          <img src={thumbnail} alt={`${title} 썸네일`} className="w-full h-full object-cover object-top" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 h-20">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

       {/* 마우스를 올렸을 때 나타날 콘텐츠 오버레이 */}
      <div 
        className="absolute inset-0 bg-[#EAEFF5]/80 backdrop-blur-[20px] rounded-lg flex flex-col items-center justify-center p-6 text-center
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <h3 className="text-xl font-bold mb-[1.2rem] text-gray-800">{title}</h3>
        
        <button 
          onClick={() => onCardClick(project)}
          className="inline-flex items-center px-6 py-2 bg-white text-black font-semibold rounded-full"
        >
          자세히 보기
          <DetailIcon />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;