import React, { useState } from 'react';
import Modal from '../Modal';
import { Ingredient } from '../../layouts/Baker/MangeIngredient/IngredientType';

interface AddIngredientPopupProps {
  onSave: (ingredient: Ingredient) => void;
  onClose: () => void;
}

const AddIngredientPopup: React.FC<AddIngredientPopupProps> = ({ onSave, onClose }) => {
  const [ingredient, setIngredient] = useState<Ingredient>({
    id: '',
    name: '',
    price: '',
    perquantity: 0,
    unit: '',
    quantity: 0,
    expiryDate: '',
    status: true,
    paymentMethod: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
      setIngredient({ ...ingredient, [name]: Number(value) });
    } else {
      setIngredient({ ...ingredient, [name]: value });
    }
  };

  const handleSave = () => {
    if (validateIngredient(ingredient)) {
      onSave(ingredient);
      onClose();
    } else {
      alert('Vui lòng kiểm tra lại thông tin nhập vào.');
    }
  };

  const validateIngredient = (ingredient: Ingredient): boolean => {
    return (
      !!ingredient.id &&
      !!ingredient.name &&
      !!ingredient.unit &&
      !!ingredient.price &&
      !!ingredient.perquantity &&
      Number(ingredient.quantity) >= 0
    );
  };

  return (
    <Modal onClose={onClose}>
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-primary-500">Thêm Nguyên Liệu Mới</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium">
              Mã Nguyên Liệu
            </label>
            <input
              id="id"
              type="text"
              name="id"
              value={ingredient.id}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Nhập mã nguyên liệu"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Tên Nguyên Liệu
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={ingredient.name}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Nhập tên nguyên liệu"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Giá (VND)
            </label>
            <input
              id="price"
              type="text"
              name="price"
              value={ingredient.price}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Nhập đơn giá"
            />
          </div>
          <div>
            <label htmlFor="unit" className="block text-sm font-medium">
              Đơn vị tính
            </label>
            <input
              id="perquantity"
              type="number"
              name="perquantity"
              value={ingredient.perquantity}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Nhập số lượng"
              min="0"
            />
            <select
              id="unit"
              name="unit"
              value={ingredient.unit}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            >
              <option value="g">g</option>
              <option value="ml">ml</option>
              <option value="quả">quả</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium">
              Số lượng
            </label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              value={ingredient.quantity}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Nhập số lượng"
              min="0"
            />
          </div>
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium">
              Ngày Hết Hạn
            </label>
            <input
              id="expiryDate"
              type="date"
              name="expiryDate"
              value={ingredient.expiryDate}
              onChange={handleChange}
              className="my-1 block w-full border border-gray-600 pl-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="w-32 transform rounded-md bg-gray-700 px-4 py-2 text-white shadow-sm transition-transform hover:scale-105 hover:bg-gray-600"
          >
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="w-32 transform rounded-md bg-primary-500 px-4 py-2 text-white shadow-sm transition-transform hover:scale-105 hover:bg-primary-400"
          >
            Lưu
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddIngredientPopup;
