import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Checkout from './pages/Checkout';
import Anniversary from './pages/CakeOccasion/Anniversary';

export default function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
