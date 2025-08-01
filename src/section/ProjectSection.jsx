// client/src/section/ProjectSection.jsx
import React, { useState, useEffect } from 'react';
import { projects } from '../constants'; 
import ProjectCard from '../components/ProjectCard';
import { useModal } from '../components/ModalContext';

const FilterButton = ({ filter, activeFilter, onClick }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${
      activeFilter === filter
        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
        : 'bg-white/50 text-gray-700 hover:bg-white'
    }`}
    onClick={() => onClick(filter)}
  >
    {filter}
  </button>
);


const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const { openModal } = useModal();

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);


  const filters = ['All', 'Team', 'Single'];

  return (
     <section id="project" className="relative z-10 min-h-screen bg-transparent px-8 py-24 sm:px-16 lg:px-32">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-brand-dark mb-4 text-left">Project</h2>
        <div className="inline-flex items-center gap-2 bg-[#F9F9F9]/50 p-[0.6rem] rounded-full mb-8 backdrop-blur-[40px]">
          {filters.map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-[15px] pt-[0.325rem] pb-[0.425rem] rounded-full font-medium text-brand-dark transition-colors duration-300 ${activeFilter === filter ? 'bg-gradient-to-r from-brand-pink to-brand-purple shadow-sm' : 'bg-transparent'}`}>
              {filter}
            </button>
          ))}
        </div>
        <div key={activeFilter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onCardClick={() => openModal(project)}
            index={index}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProjectSection;