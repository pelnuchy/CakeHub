import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full bg-gray-500">
      <div className="flex justify-between px-8 py-2">
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
