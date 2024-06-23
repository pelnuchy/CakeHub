import CakeCard from '../components/Cake/CakeCard';
import { cakeData } from '../utils/cakeData';

const CakeBestSeller = () => {
  return (
    <div className="bg-bgr-gradient px-8 py-1">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-4 bg-red-500"></div>
            <h2 className="text-4xl font-bold">Bánh bán chạy</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cakeData.slice(0, 4).map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeBestSeller;
