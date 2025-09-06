// src/components/ModalContext.jsx

import React, { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal은 ModalProvider 안에서 사용해야 합니다!');
  }
  return context;
};

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    console.log("✅ '모달 열기' 신호", project);
    
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, selectedProject }}>
      {children}
    </ModalContext.Provider>
  );
};
