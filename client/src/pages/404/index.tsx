import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-8xl font-bold text-primary-500">404</h1>
        <h2 className="mb-4 text-3xl font-semibold">Không tìm thấy trang</h2>
        <p className="mb-8 text-gray-700">Xin lỗi, trang bạn truy cập không tồn tại</p>
        <Button onClick={handleGoHome}>Trở về trang chủ</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
