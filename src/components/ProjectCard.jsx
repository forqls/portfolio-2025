// client/src/components/ProjectCard.jsx
import React, { useState, useEffect } from 'react';

const ProjectCard = ({ project, onCardClick, index }) => {
  const { thumbnail, title, description, tags } = project;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <button 
        onClick={() => onCardClick(project)}
        className={`bg-white/10 backdrop-blur-[20px] rounded-lg overflow-hidden text-left w-full
                    shadow-glass-soft hover:shadow-glass-card 
                    transition-all duration-700 ease-out 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
      <div className="w-full h-60 bg-gray-200">
        <img src={thumbnail} alt={`${title} 썸네일`} className="w-full h-full object-cover object-top" />
      </div>
      
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 h-20">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;