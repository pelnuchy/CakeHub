import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-[100px] z-40 w-full bg-gray-500 shadow-md">
      <div className="flex justify-between px-96 py-2">
        <Link to="/custom" className="text-black hover:underline">
          Bánh trang trí
        </Link>
        <Link to="/anniversary" className="text-black hover:underline">
          Kỷ niệm
        </Link>
        <Link to="/christmas" className="text-black hover:underline">
          Giáng sinh
        </Link>
        <Link to="/birthday" className="text-black hover:underline">
          Sinh nhật
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
