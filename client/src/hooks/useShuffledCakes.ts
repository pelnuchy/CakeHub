import { useState, useEffect } from 'react';
import { shuffleArray } from '../utils/shuffleArray';
import axios from 'axios';
export const useShuffledCakes = (numCake: number): object[] => {
  const [randomCakes, setRandomCakes] = useState<object[]>([]);

  useEffect(() => {
    const fetchAndShuffleCakes = async () => {
      const cakeDB = await fetchRandomCakes();
      const shuffledCakes = shuffleArray(cakeDB).slice(0, numCake);
      setRandomCakes(shuffledCakes);
    };

    fetchAndShuffleCakes();
  }, [numCake]);

  const fetchRandomCakes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-all-cakes');
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  return randomCakes;
};
