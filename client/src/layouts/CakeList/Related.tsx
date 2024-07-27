import CakeCard from '../../components/Cake/CakeCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Related = () => {
  const [relatedCakes, setRelatedCakes] = useState<object[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const getrelatedCakes = async () => {
      const cakeDB = await fetchRelatedCakes();
      setRelatedCakes(cakeDB);
    };

    getrelatedCakes();
  }, [id]);

  const fetchRelatedCakes = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/get-cake-related/${id}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="bg-white py-16">
      <div className="container ml-9">
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
          <h2 className="text-4xl font-bold">Bánh liên quan</h2>
        </div>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {relatedCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Related;
