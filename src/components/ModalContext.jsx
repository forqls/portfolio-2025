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
    // 👇 ★★★ 여기에 테스트 램프를 설치했어! ★★★
    // "자세히 보기"를 눌렀을 때, 이 메시지가 콘솔에 뜨는지 확인해 보자!
    console.log("✅ '모달 열기' 신호가 본부에 도착했습니다!", project);
    
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
