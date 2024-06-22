import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full bg-gray-500 border-b border-gray-900">
      <div className="flex justify-between py-2 px-8 ">
        <a href="#!" className="text-black hover:underline">
          Bánh trang trí
        </a>
        <a href="#!" className="text-black hover:underline">
          Kỷ niệm
        </a>
        <a href="#!" className="text-black hover:underline">
          Giáng sinh
        </a>
        <a href="#!" className="text-black hover:underline">
          Sinh nhật
        </a>
      </div>
    </nav>
  );
};

export default Nav;
