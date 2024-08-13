import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="flex space-x-1">
        <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
          Trước
        </button>
        <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
          1
        </button>
        <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
          2
        </button>
        <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
          3
        </button>
        <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
          Sau
        </button>
      </div>
    </div>
  );
};

export default Pagination;
