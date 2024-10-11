import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CustomRouter from './CustomRouter';

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>Your Website Title</title>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/capcut_course" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
