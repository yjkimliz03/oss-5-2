// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router'; // Router 컴포넌트 임포트

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />); // Router 컴포넌트를 사용하여 라우팅 설정 적용
