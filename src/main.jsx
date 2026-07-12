import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Project />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
