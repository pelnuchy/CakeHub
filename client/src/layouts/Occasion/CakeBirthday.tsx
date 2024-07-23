import CakeCard from '../../components/Cake/CakeCard';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
const CakeBirthday = () => {
  const occasion  = useLocation();
  const [birthdayCakes, setCakeBirthday] = useState<object[]>([]);
  useEffect(() => {
    const getAllCakeBirthday = async () => {
      const cakes = await fetchAllCakeBirthday(occasion);// Pass the id to your fetch function
      setCakeBirthday(cakes);
    };
    getAllCakeBirthday();
  }, [occasion]);// Add id as a dependency to useEffect

  const fetchAllCakeBirthday = async (occasion: any) => {
    try {
      const response = await axios.get(`http://localhost:8000/get-all-cakes-occasion${occasion.pathname}`); // path name đã bao gồm dấu /
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-white px-8 py-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
            <h2 className="text-4xl font-bold">Bánh sinh nhật</h2>
          </div>
          <span className="text-blue-500 underline">View All</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {birthdayCakes.map((cake, index) => (
            <CakeCard
              key={index}
              cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeBirthday;
