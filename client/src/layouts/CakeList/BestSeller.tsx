import CakeCard from '../../components/Cake/CakeCard';
import { useShuffledCakes } from '../../hooks/useShuffledCakes';

const BestSeller = () => {
  const randomCakes = useShuffledCakes(4);

  return (
    <div className="bg-bgr-gradient px-8 py-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-8 w-4 bg-red-500"></div>
          <h2 className="text-4xl font-bold">Bánh bán chạy</h2>
        </div>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {randomCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
