import React from 'react';

interface SortOptionsProps {
  sortOption: string;
  onSortChange: (option: string) => void;
}

const SortControl: React.FC<SortOptionsProps> = ({ sortOption, onSortChange }) => {
  return (
    <div className="mb-4 mt-8">
      <span className="mr-4 font-bold">Sắp xếp:</span>
      <button
        className={`mr-4 text-gray-700 hover:text-primary-300 ${sortOption === 'nameAsc' ? 'text-primary-500' : ''}`}
        onClick={() => onSortChange('nameAsc')}
      >
        Tên A → Z
      </button>
      <button
        className={`mr-4 text-gray-700 hover:text-primary-300 ${sortOption === 'nameDesc' ? 'text-primary-500' : ''}`}
        onClick={() => onSortChange('nameDesc')}
      >
        Tên Z → A
      </button>
      <button
        className={`mr-4 text-gray-700 hover:text-primary-300 ${sortOption === 'priceAsc' ? 'text-primary-500' : ''}`}
        onClick={() => onSortChange('priceAsc')}
      >
        Giá tăng dần
      </button>
      <button
        className={`text-gray-700 hover:text-primary-300 ${sortOption === 'priceDesc' ? 'text-primary-500' : ''}`}
        onClick={() => onSortChange('priceDesc')}
      >
        Giá giảm dần
      </button>
    </div>
  );
};

export default SortControl;
