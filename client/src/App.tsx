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
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQPage from './pages/FAQ';
import NotFoundPage from './pages/404';

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
