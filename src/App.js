import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard/LandingPage';
import AppRobot from './containers/robot/home';

export default function App() {
  return (
    <div className='app'>
        <Routes>
            <Route path='/app' element={<Dashboard />} />
            <Route path='/' element={<AppRobot />} />
        </Routes>
    </div>
  )
}
