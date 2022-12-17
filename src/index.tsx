import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App/App';
import './index.css';
// 导入mock才会在请求相应路径的时候拦截到，不导入会报错
import './mock/blog'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
