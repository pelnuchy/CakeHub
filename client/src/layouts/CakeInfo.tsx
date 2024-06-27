import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { cakeData } from '../utils/cakeData';
import Related from './CakeList/Related';

const CakeInfo = () => {
  const { id } = useParams();
  const cake = cakeData.find((cake) => cake.id === id);

  if (!cake) {
    return <div>Cake not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <div className="w-2/3 pr-8">
          <img src={cake.img_url} alt={cake.cakeName} className="w-full rounded-xl object-cover" />
        </div>
        <div className="w-1/3">
          <div className="font-sans text-3xl font-bold">{cake.cakeName}</div>
          <p className="mt-2 text-2xl font-semibold text-red-500">{cake.price} VNĐ</p>
          <p className="mt-4">{cake.description}</p>
          <p className="mt-4 text-sm text-gray-600">Mã bánh: {cake.id}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold">Nhân bánh:</p>
            <div className="mt-2 flex">
              <button className="mr-2 rounded border px-4 py-2">Chanh dây</button>
              <button className="mr-2 rounded border px-4 py-2">Dâu tây</button>
              <button className="rounded border px-4 py-2">Socola</button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold">Kích thước:</p>
            <div className="mt-2 flex">
              <button className="mr-2 rounded border px-4 py-2">S</button>
              <button className="mr-2 rounded border bg-red-500 px-4 py-2 text-white">M</button>
              <button className="rounded border px-4 py-2">L</button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold">Thông điệp:</p>
            <input type="text" placeholder="Nhập thông điệp cho bánh" className="mt-2 w-full rounded border p-2" />
          </div>

          <div className="mt-6 flex items-center">
            <button className="rounded border px-4 py-2">-</button>
            <span className="mx-4">2</span>
            <button className="rounded border px-4 py-2">+</button>
          </div>

          <Link to="/login" className="mt-6 w-full">
            <button className="w-full rounded bg-bgr-gradient py-3 font-semibold text-white">Thêm vào giỏ hàng</button>
          </Link>
        </div>
      </div>

      <Related />
    </div>
  );
};

export default CakeInfo;
