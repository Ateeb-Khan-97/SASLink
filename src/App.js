import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage/LoginPage';
import ResetPassword from './Components/LoginPage/Child/ResetPassword/ResetPassword';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/reset' element={<ResetPassword />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
