// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    // ▼▼▼ 푸터에 직접 두 번째 배경 이미지를 적용! ▼▼▼
   <footer className="w-full h-48 bg-transparent flex items-center justify-center">
      <p className="text-sm text-gray-500">
        Copyright 2025. AnHyobin All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;