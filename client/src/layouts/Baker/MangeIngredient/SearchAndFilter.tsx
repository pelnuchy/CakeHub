import React from 'react';

const SearchAndFilter: React.FC = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <label htmlFor="show" className="font-semibold">
          Hiện
        </label>
        <select
          id="show"
          className="rounded border border-primary-500 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
        <span className="font-semibold">mục</span>
      </div>
    </div>
  );
};

export default SearchAndFilter;
