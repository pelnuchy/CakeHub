import React from 'react';
import { Link } from 'react-router-dom';

const BakerNav: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-[100px] z-40 w-full bg-gray-500 shadow-md">
      <div className="flex justify-between px-96 py-2">
        <Link to="/baker/dashboard" className="text-black hover:underline">
          Quản lý đơn hàng
        </Link>
        <Link to="/baker/bakingsession" className="text-black hover:underline">
          Tiến trình làm bánh
        </Link>
        <Link to="/baker/ingredient" className="text-black hover:underline">
          Quản lý nguyên liệu
        </Link>
        <Link to="/baker/cake" className="text-black hover:underline">
          Quản lý bánh
        </Link>
      </div>
    </nav>
  );
};

export default BakerNav;
