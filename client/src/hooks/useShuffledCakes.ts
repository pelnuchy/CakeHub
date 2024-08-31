import { useState, useEffect } from 'react';
import { shuffleArray } from '../utils/shuffleArray';
import axios from 'axios';
import { Cake } from '../utils/interfaces';
export const useShuffledCakes = (numCake: number): Cake[] => {
  const [randomCakes, setRandomCakes] = useState<Cake[]>([]);

  useEffect(() => {
    const fetchAndShuffleCakes = async () => {
      const cakeDB = await fetchRandomCakes();
      if (numCake != 0 && cakeDB != null)
      {
        let shuffledCakes = cakeDB.slice(0, numCake);
        setRandomCakes(shuffledCakes);
      }
    };

    fetchAndShuffleCakes();
  }, [numCake]);

  const fetchRandomCakes = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-cakes`);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  return randomCakes;
};
