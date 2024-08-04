import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SortControl from './SortControl';
import CakeCard from '../../components/Cake/CakeCard';

const CakeCustom = () => {
  const occasion = useLocation();
  const [customCakes, setCakeCustom] = useState<object[]>([]);
  const [sortOption, setSortOption] = useState<string>('');

  useEffect(() => {
    const getAllCakeCustom = async () => {
      const cakes = await fetchCakeCustom(occasion);
      setCakeCustom(sortCakes(cakes, sortOption));
    };
    getAllCakeCustom();
  }, [occasion, sortOption]);

  const fetchCakeCustom = async (occasion: any) => {
    try {
      const response = await axios.get(`http://localhost:8000/get-all-cakes-occasion${occasion.pathname}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const sortCakes = (cakes: any[], option: string) => {
    switch (option) {
      case 'nameAsc':
        return cakes.sort((a, b) => a.cakeName.localeCompare(b.cakeName));
      case 'nameDesc':
        return cakes.sort((a, b) => b.cakeName.localeCompare(a.cakeName));
      case 'priceAsc':
        return cakes.sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return cakes.sort((a, b) => b.price - a.price);
      default:
        return cakes;
    }
  };

  return (
    <div className="bg-white px-8 py-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
            <h2 className="text-4xl font-bold">Bánh trang trí</h2>
          </div>
        </div>
        <SortControl sortOption={sortOption} onSortChange={handleSortChange} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {customCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeCustom;
