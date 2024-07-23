import CakeCard from '../../components/Cake/CakeCard';
import { useShuffledCakes } from '../../hooks/useShuffledCakes';

const Related = () => {
  const randomCakes = useShuffledCakes(4);

  return (
    <div className="bg-white py-4">
      <div className="container ml-9">
        <div className="mb-4 flex items-center">
          <div className="mr-2 h-8 w-4 bg-bgr-gradient"></div>
          <h2 className="text-4xl font-bold">Bánh liên quan</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {randomCakes.map((cake, index) => (
            <CakeCard key={index} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Related;
