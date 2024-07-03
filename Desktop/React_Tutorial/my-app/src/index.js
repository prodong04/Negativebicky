// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 전역 스타일을 위한 CSS 파일
import App from './App'; // App 컴포넌트 불러오기
import reportWebVitals from './reportWebVitals';

// ReactDOM.render 메서드를 사용해 App 컴포넌트를 페이지에 렌더링합니다.
// 여기서 document.getElementById('root')는 public/index.html 파일의 <div id="root"></div>를 가리킵니다.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 선택적으로 웹 바이탈즈(web vitals)을 측정할 수 있습니다.
reportWebVitals();
