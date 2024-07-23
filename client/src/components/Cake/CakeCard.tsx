import React from 'react';
import { useNavigate } from 'react-router-dom';

const CakeCard = ({ cake }: { cake: any }) => {
  const { cakeID, img_url, cakeName, price } = cake;
  const navigate = useNavigate();

  const rootCakeID = cakeID.split("-")[0];

  const handleClick = () => {
    navigate(`/cake/${rootCakeID}`);
  };

  return (
    <div
      className="flex h-[360px] w-[270px] cursor-pointer flex-col rounded-xl border border-gray-700 bg-white"
      onClick={handleClick}
    >
      <div className="m-4 flex h-[240px] w-[240px] items-center justify-center overflow-hidden rounded-xl">
        <img
          src={img_url}
          alt={cakeName}
          className="transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="flex-grow p-4">
        <h3 className="mb-2 truncate text-base font-medium hover:underline">{cakeName}</h3>
        <h4 className="mb-2 text-sm font-normal text-gray-600">{rootCakeID}</h4>
        <p className="text-base font-bold text-red-500">{Number(price).toLocaleString()} VNĐ</p>
      </div>
    </div>
  );
};

export default CakeCard;
