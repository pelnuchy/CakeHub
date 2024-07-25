import React from 'react';
import { useNavigate } from 'react-router-dom';

const CakeCard = ({ cake }: { cake: any }) => {
  const { cakeID, img_url, cakeName, price } = cake;
  const navigate = useNavigate();

  const rootCakeID = cakeID.split('-')[0];

  const handleClick = () => {
    navigate(`/cake/${rootCakeID}`);
  };

  return (
    <div
      className="flex h-full w-full max-w-xs cursor-pointer flex-col rounded-xl border border-gray-200 bg-white shadow-lg transition-transform md:max-w-sm"
      onClick={handleClick}
    >
      <div className="relative mx-4 mb-2 mt-4 flex h-80 items-center justify-center overflow-hidden rounded-xl">
        <img
          src={img_url}
          alt={`${cakeName}`}
          className="absolute inset-0 h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex-grow p-4">
        <h3 className="mb-2 line-clamp-1 text-base font-medium hover:underline">{cakeName}</h3>
        <h4 className="mb-2 text-sm font-normal text-gray-600">{rootCakeID}</h4>
        <p className="text-base font-bold text-red-500">{Number(price).toLocaleString()} VNĐ</p>
      </div>
    </div>
  );
};

export default CakeCard;
