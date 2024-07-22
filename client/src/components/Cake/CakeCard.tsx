import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cake } from '../../utils/cakeData';

import Cake1 from '../../assets/cake/cake1.jpg';
import Cake2 from '../../assets/cake/cake2.jpg';
import Cake3 from '../../assets/cake/cake3.jpg';
import Cake4 from '../../assets/cake/cake4.jpg';
import Cake5 from '../../assets/cake/cake5.jpg';
import Cake6 from '../../assets/cake/cake6.jpg';
import Cake7 from '../../assets/cake/cake7.jpg';
import Cake8 from '../../assets/cake/cake8.jpg';
import Cake9 from '../../assets/cake/cake9.jpg';
import Cake10 from '../../assets/cake/cake10.jpg';




const CakeCard = ({ cake }: { cake: any }) => {
  const { cakeID, img_url, cakeName, price } = cake;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cake/${cakeID}`);
  };
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
    <div
      className="flex h-[360px] w-[270px] cursor-pointer flex-col rounded-xl border border-gray-700 bg-white"
      onClick={handleClick}
    >
      <div className="flex justify-center">

        <img src={images[img_url]} alt={cakeName} className="mt-3 h-[240px] w-[240px] rounded-xl object-cover" />
      </div>
      <div className="flex-grow p-4">
        <h3 className="mb-2 truncate text-base font-medium">{cakeName}</h3>
        <h4 className="mb-2 text-sm font-normal text-gray-600">{cakeID}</h4>
        <p className="text-base font-bold text-red-500">{price} VNĐ</p>
      </div>
    </div>
  );
};

export default CakeCard;
