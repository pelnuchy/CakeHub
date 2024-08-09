import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-[100px] z-40 w-full bg-gray-500 shadow-md">
      <div className="flex justify-between px-96 py-2">
        <Link to="/admin/dashboard" className="text-black hover:underline">
          Dashboard
        </Link>
        <Link to="/admin/devicemanagement" className="text-black hover:underline">
          Quản lý thiết bị
        </Link>
      </div>
    </nav>
  );
};

export default AdminNav;
