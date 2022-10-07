import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resumes from './components/Resumes';
import ResumeFacts from './components/ResumeFacts';
import ResumeCard from './components/ResumeCard';
import CreateResume from './components/CreateResume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/resumes" element={<Resumes/>}>
          <Route index element={<p>Select one Resume</p>}/>
          <Route path=':resumeId' element={<ResumeCard/>}/>
        </Route>
        <Route path="/resumefacts" element={<ResumeFacts />}/>
        <Route path="/create" element={<CreateResume />}/>
      </Route>
    </Routes>
  
  </BrowserRouter>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
