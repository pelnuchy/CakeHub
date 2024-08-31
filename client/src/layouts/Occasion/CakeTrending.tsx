import React, { useState, useEffect } from 'react';
import SortControl from './SortControl';
import CakeCard from '../../components/Cake/CakeCard';
import { Cake } from '../../utils/interfaces';
import { useShuffledCakes } from '../../hooks/useShuffledCakes';

const CakeTrendingPage = () => {
  const [sortOption, setSortOption] = useState<string>('');
  const [sortedCakes, setSortedCakes] = useState<Cake[]>([]);
  const randomCakes = useShuffledCakes(12);
  useEffect(() => {
    setSortedCakes(sortCakes(randomCakes, sortOption));
  }, [randomCakes, sortOption]);

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
            <h2 className="text-4xl font-bold">Bánh xu hướng</h2>
          </div>
        </div>
        <SortControl sortOption={sortOption} onSortChange={handleSortChange} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeTrendingPage;
