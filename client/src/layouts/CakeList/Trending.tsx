import CakeCard from '../../components/Cake/CakeCard';
import { useShuffledCakes } from '../../hooks/useShuffledCakes';

const Trending = () => {
  const randomCakes = useShuffledCakes(8);

  return (
    <div className="bg-white px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
            <h2 className="text-4xl font-bold text-black">Xu hướng - tháng 5</h2>
          </div>
          <span className="cursor-pointer text-blue-600 hover:underline">Xem tất cả</span>
        </div>

        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {randomCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
