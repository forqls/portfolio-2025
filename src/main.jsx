// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Modal from 'react-modal'; // 👈 1. react-modal을 import 해줘.

// 👇 ★★★ 바로 여기가 모든 문제의 해결책! ★★★
// "우리 리액트 앱의 본체는 'root'라는 ID를 가진 요소야!" 라고 등록해주는 거야.
Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
