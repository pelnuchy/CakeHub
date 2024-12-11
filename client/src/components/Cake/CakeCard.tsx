import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cake } from '../../utils/interfaces';

const CakeCard = ({ cake }: { cake: Cake | null | undefined }) => {
  const navigate = useNavigate();

  if (!cake) {
    return (
      <div className="flex h-full w-full max-w-xs cursor-pointer flex-col rounded-xl border border-gray-200 bg-gray-200 shadow-lg transition-transform md:max-w-sm">
        <div className="relative mx-4 mb-2 mt-4 flex h-80 items-center justify-center overflow-hidden rounded-xl bg-gray-300"></div>
        <div className="flex-grow p-4">
          <h3 className="mb-2 line-clamp-1 text-base font-medium text-gray-500">No Cake Info</h3>
          <h4 className="mb-2 text-sm font-normal text-gray-500">No ID</h4>
          <p className="text-base font-bold text-gray-500">0 VNĐ</p>
        </div>
      </div>
    );
  }

  const rootCakeID = cake.cakeID.split('-')[0];

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
          src={cake.img_url}
          alt={cake.cakeName}
          className="absolute inset-0 h-full w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex-grow p-4">
        <h3 className="mb-2 line-clamp-1 text-base font-medium hover:underline">{cake.cakeName}</h3>
        <h4 className="mb-2 text-sm font-normal text-gray-600">{rootCakeID}</h4>
        <p className="text-base font-bold text-red-500">{Number(cake.price).toLocaleString()} VNĐ</p>
      </div>
    </div>
  );
};

export default CakeCard;
