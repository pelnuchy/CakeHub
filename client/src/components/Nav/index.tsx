import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="mt-[100px] w-full bg-gray-500">
      {' '}
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
