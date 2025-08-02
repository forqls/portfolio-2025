// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Modal from 'react-modal';
// 👇 1. App.jsx에서 이사 온 ModalProvider를 여기서 import 해줘.
import { ModalProvider } from './components/ModalContext.jsx';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  // ⛔️ StrictMode는 여전히 주석 처리해두자.
  // <React.StrictMode>
    // 👇 2. <App />을 <ModalProvider>로 감싸주면,
    // 이제 App과 그 안의 모든 자식들이 모달 상태를 공유받을 수 있어!
    <ModalProvider>
      <App />
    </ModalProvider>
  // </React.StrictMode>
);
