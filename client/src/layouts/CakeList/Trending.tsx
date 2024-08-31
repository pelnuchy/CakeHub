import { useState, useEffect } from 'react';
import CakeCard from '../../components/Cake/CakeCard';
import { useShuffledCakes } from '../../hooks/useShuffledCakes';
import SortControl from '../Occasion/SortControl';
import { Cake } from '../../utils/interfaces';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const [sortOption, setSortOption] = useState<string>('');
  const [sortedCakes, setSortedCakes] = useState<Cake[]>([]);
  const randomCakes = useShuffledCakes(8);
  const navigate = useNavigate();
  useEffect(() => {
    setSortedCakes(sortCakes(randomCakes, sortOption));
  }, [randomCakes, sortOption]);

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handleClick = () => {
    navigate('/trending');
  };

  const sortCakes = (cakes: any[], option: string) => {
    switch (option) {
      case 'nameAsc':
        return cakes.slice().sort((a, b) => a.cakeName.localeCompare(b.cakeName));
      case 'nameDesc':
        return cakes.slice().sort((a, b) => b.cakeName.localeCompare(a.cakeName));
      case 'priceAsc':
        return cakes.slice().sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return cakes.slice().sort((a, b) => b.price - a.price);
      default:
        return cakes;
    }
  };

  return (
    <div className="bg-white px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
            <h2 className="text-4xl font-bold text-black">Xu hướng</h2>
          </div>
          <Button onClick={handleClick} className="rounded-xl">
            Xem tất cả
          </Button>
        </div>
        <SortControl sortOption={sortOption} onSortChange={handleSortChange} />
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
