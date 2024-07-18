import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Related from './CakeList/Related';
import { cakeData } from '../utils/cakeData';

const CakeInfo = () => {
  const { id } = useParams<{ id: string }>();
  const cake = cakeData.find((cake) => cake.id === id);

  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');
  const [selectedSize, setSelectedSize] = useState('M'); // Default size
  const [selectedFlavor, setSelectedFlavor] = useState('Sô cô la'); // Default flavor
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity

  const handleAddToCart = () => {
    if (cake) {
      addToCart({
        id: cake.id,
        name: cake.cakeName,
        price: cake.price,
        size: selectedSize,
        flavor: selectedFlavor,
        quantity: selectedQuantity,
        image: cake.img_url,
      });
      setNotification(`${cake.cakeName} đã được thêm vào giỏ hàng.`);
    }
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleFlavorChange = (flavor: string) => {
    setSelectedFlavor(flavor);
  };

  const handleQuantityChange = (quantity: number) => {
    setSelectedQuantity(quantity);
  };

  if (!cake) {
    return <div>Cake not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <div className="w-2/3 pr-8">
          <img src={cake.img_url} alt={cake.cakeName} className="w-full rounded-xl object-cover" />
        </div>
        <div className="w-1/3">
          <div className="font-sans text-3xl font-bold">{cake.cakeName}</div>
          <p className="mt-2 text-2xl font-semibold text-red-500">{cake.price} VNĐ</p>
          <p className="mt-4">{cake.description}</p>
          <p className="mt-4 text-sm text-gray-600">Mã bánh: {cake.id}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold">Nhân bánh:</p>
            <div className="mt-2 flex">
              <button
                className={`mr-2 rounded border px-4 py-2 ${selectedFlavor === 'Chanh dây' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleFlavorChange('Chanh dây')}
              >
                Chanh dây
              </button>
              <button
                className={`mr-2 rounded border px-4 py-2 ${selectedFlavor === 'Dâu tây' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleFlavorChange('Dâu tây')}
              >
                Dâu tây
              </button>
              <button
                className={`rounded border px-4 py-2 ${selectedFlavor === 'Socola' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleFlavorChange('Socola')}
              >
                Socola
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold">Kích thước:</p>
            <div className="mt-2 flex">
              <button
                className={`mr-2 rounded border px-4 py-2 ${selectedSize === 'S' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleSizeChange('S')}
              >
                S
              </button>
              <button
                className={`mr-2 rounded border px-4 py-2 ${selectedSize === 'M' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleSizeChange('M')}
              >
                M
              </button>
              <button
                className={`rounded border px-4 py-2 ${selectedSize === 'L' ? 'bg-red-500 text-white' : ''}`}
                onClick={() => handleSizeChange('L')}
              >
                L
              </button>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold">Thông điệp:</p>
            <input type="text" placeholder="Nhập thông điệp cho bánh" className="mt-2 w-full rounded border p-2" />
          </div>

          <div className="mt-6 flex items-center">
            <button className="rounded border px-4 py-2" onClick={() => handleQuantityChange(selectedQuantity - 1)}>
              -
            </button>
            <span className="mx-4">{selectedQuantity}</span>
            <button className="rounded border px-4 py-2" onClick={() => handleQuantityChange(selectedQuantity + 1)}>
              +
            </button>
          </div>

          <button onClick={handleAddToCart} className="mt-6 w-full">
            <div className="w-full rounded bg-bgr-gradient py-3 font-semibold text-white">Thêm vào giỏ hàng</div>
          </button>

          {notification && <div className="mt-4 text-green-500">{notification}</div>}
        </div>
      </div>

      <Related />
    </div>
  );
};

export default CakeInfo;
