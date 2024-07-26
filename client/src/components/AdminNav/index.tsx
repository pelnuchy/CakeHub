import React from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  return (
    <nav className="w-full bg-gray-500">
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
