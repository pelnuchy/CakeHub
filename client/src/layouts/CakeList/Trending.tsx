import CakeCard from '../../components/Cake/CakeCard';
import { useShuffledCakes } from '../../hooks/useShuffledCakes';
const Trending = () => {
  const randomCakes = useShuffledCakes(8);

  return (
    <div className="bg-white px-8 py-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
            <h2 className="text-4xl font-bold">Xu hướng - tháng 5</h2>
          </div>
          <span className="text-blue-500 underline">View All</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {randomCakes.map((cake,index) => (
            <CakeCard
            key={index} 
            cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
