import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cakeData } from '../utils/cakeData';
import axios from 'axios';
import Related from './CakeList/Related';

import Cake1 from '../assets/cake/cake1.jpg';
import Cake2 from '../assets/cake/cake2.jpg';
import Cake3 from '../assets/cake/cake3.jpg';
import Cake4 from '../assets/cake/cake4.jpg';
import Cake5 from '../assets/cake/cake5.jpg';
import Cake6 from '../assets/cake/cake6.jpg';
import Cake7 from '../assets/cake/cake7.jpg';
import Cake8 from '../assets/cake/cake8.jpg';
import Cake9 from '../assets/cake/cake9.jpg';
import Cake10 from '../assets/cake/cake10.jpg';

const CakeInfo = () => {
  const { id } = useParams();
  const [cake, setCake] = useState(Object);
  //const cake = cakeData.find((cake) => cake.id === id);

  useEffect(() => {
    const getCakeDetail = async () => {
      const cakes = await fetchCakeDetail(id);// Pass the id to your fetch function
      setCake(cakes);
      //console.log(cakeDB); 
    };
    getCakeDetail();
  }, [id]);// Add id as a dependency to useEffect

  const fetchCakeDetail = async (id: any) => {
    try {
      const response = await axios.get(`http://localhost:8000/get-details-cake/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  if (!cake) {
    return <div>Cake not found</div>;
  }

  type Images = {
    [key: string]: string;
  };
  const images: Images = {
    '../../assets/cake/cake1.jpg': Cake1,
    '../../assets/cake/cake2.jpg': Cake2,
    '../../assets/cake/cake3.jpg': Cake3,
    '../../assets/cake/cake4.jpg': Cake4,
    '../../assets/cake/cake5.jpg': Cake5,
    '../../assets/cake/cake6.jpg': Cake6,
    '../../assets/cake/cake7.jpg': Cake7,
    '../../assets/cake/cake8.jpg': Cake8,
    '../../assets/cake/cake9.jpg': Cake9,
    '../../assets/cake/cake10.jpg': Cake10
    // Thêm các ảnh khác vào đối tượng này
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <div className="w-2/3 pr-8">
          <img src={images[cake.img_url]} alt={cake.cakeName} className="w-full rounded-xl object-cover" />
        </div>
        <div className="w-1/3">
          <div className="font-sans text-3xl font-bold">{cake.cakeName}</div>
          <p className="mt-2 text-2xl font-semibold text-red-500">{cake.price} VNĐ</p>
          <p className="mt-4">{cake.description}</p>
          <p className="mt-4 text-sm text-gray-600">Mã bánh: {cake.cakeID}</p>

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
