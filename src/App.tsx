import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Checkout from './pages/Checkout';
import Anniversary from './pages/CakeOccasion/Anniversary';
import Birthday from './pages/CakeOccasion/Birthday';
import Custom from './pages/CakeOccasion/Custom';
import Christmas from './pages/CakeOccasion/Christmas';
import CakeDetail from './pages/CakeDetail';

export default function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cake/:id" element={<CakeDetail />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/christmas" element={<Christmas />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
