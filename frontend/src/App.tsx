import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import usePageStore from './stores/pageStore';
import LandingPage from './pages/Landing';
import InputInfoPage from './pages/InputInfo';

const App: React.FC = () => {
  const currentPage = usePageStore((state) => state.currentPage);

  return (
    <Router>
      <Routes>
        {/* Zustand 상태를 기반으로 기본 경로 리다이렉션 */}
        <Route path="/" element={<Navigate to={currentPage} />} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/info/input" element={<InputInfoPage/>} />
      </Routes>
    </Router>
  );
};

export default App;