import { useState, useEffect } from 'react';
import { cakeData, Cake } from '../utils/cakeData';
import { shuffleArray } from '../utils/shuffleArray';

export const useShuffledCakes = (numCake: number): Cake[] => {
  const [randomCakes, setRandomCakes] = useState<Cake[]>([]);

  useEffect(() => {
    const shuffledCakes = shuffleArray(cakeData).slice(0, numCake);
    setRandomCakes(shuffledCakes);
  }, [numCake]);

  return randomCakes;
};
