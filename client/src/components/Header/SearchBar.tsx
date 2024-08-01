import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-auto items-center justify-center">
      <div className="flex h-10 w-full items-center rounded-xl bg-white px-4 py-1">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Tìm kiếm bánh"
          className="w-full rounded-l-full bg-transparent px-2 py-1 text-black outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        />
        <FaSearch
          className="mr-2 h-8 w-8 transform bg-white p-1 text-black transition-transform duration-300 ease-in-out hover:scale-110"
          onClick={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
