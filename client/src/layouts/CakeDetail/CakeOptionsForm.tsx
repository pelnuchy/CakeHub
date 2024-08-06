// components/CakeOptionsForm.tsx
import React from 'react';
import Button from '../../components/Button';

const CakeOptionsForm = ({
  cakeDetail,
  selectedSize,
  selectedFlavor,
  selectedQuantity,
  setSelectedSize,
  setSelectedFlavor,
  setSelectedQuantity,
  handleAddToCart,
}: {
  cakeDetail: any;
  selectedSize: string;
  selectedFlavor: string;
  selectedQuantity: number;
  setSelectedSize: (size: string) => void;
  setSelectedFlavor: (flavor: string) => void;
  setSelectedQuantity: (quantity: number) => void;
  handleAddToCart: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const [isSpamming, setIsSpamming] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSpamming) {
      setIsSpamming(true);
      handleAddToCart(e);
      setTimeout(() => {
        setIsSpamming(false);
      }, 2000);
    }
  };

  return (
    <div className="lg:w-1/3">
      <div className="font-sans text-3xl font-bold">{cakeDetail.cakeName}</div>
      <p className="mt-2 text-2xl font-semibold text-red-500">{Number(cakeDetail.price).toLocaleString()} VNĐ</p>
      <p className="mt-4">{cakeDetail.description}</p>
      <p className="mt-4 text-sm text-gray-600">Mã bánh: {cakeDetail.cakeID}</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mt-6">
          <p className="text-sm font-semibold">Nhân bánh:</p>
          <div className="mt-2 flex">
            {['Chanh dây', 'Dâu tây', 'Socola'].map((flavor) => (
              <button
                key={flavor}
                type="button"
                className={`mr-2 rounded border px-4 py-2 ${selectedFlavor === flavor ? 'bg-primary-500 text-white' : ''}`}
                onClick={() => setSelectedFlavor(flavor)}
              >
                {flavor}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold">Kích thước:</p>
          <div className="mt-2 flex">
            {['S', 'M', 'L'].map((size) => (
              <button
                key={size}
                type="button"
                className={`mr-2 rounded border px-4 py-2 ${selectedSize === size ? 'bg-primary-500 text-white' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold">Thông điệp:</p>
          <input type="text" placeholder="Nhập thông điệp cho bánh" className="mt-2 w-full rounded border p-2" />
        </div>

        <div className="mt-6 flex items-center">
          <button
            type="button"
            className="rounded border px-4 py-2 hover:bg-primary-500"
            onClick={() => setSelectedQuantity(Math.max(selectedQuantity - 1, 1))}
          >
            -
          </button>
          <span className="mx-4">{selectedQuantity}</span>
          <button
            type="button"
            className="rounded border px-4 py-2 hover:bg-primary-500"
            onClick={() => setSelectedQuantity(selectedQuantity + 1)}
          >
            +
          </button>
        </div>

        <Button type="submit" className="mt-6 w-full">
          Thêm vào giỏ hàng
        </Button>
      </form>
    </div>
  );
};

export default CakeOptionsForm;
