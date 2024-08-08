import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import the icons you need
import Button from '../../components/Button';

interface Ingredient {
  id: string;
  name: string;
  price: string;
  unit: string;
  quantity: number;
  expiryDate: string;
  status: string;
  paymentMethod: string;
}

const ingredients: Ingredient[] = [
  {
    id: '240542',
    name: 'Dâu tây',
    price: '20.000 đồng',
    unit: 'g',
    quantity: 10000,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: '',
  },
  {
    id: '198353',
    name: 'Chanh dây',
    price: '20.000 đồng',
    unit: 'g',
    quantity: 10000,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: '',
  },
  {
    id: '345289',
    name: 'Sô cô la',
    price: '20.000 đồng',
    unit: 'g',
    quantity: 10000,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: '',
  },
  {
    id: '343434',
    name: 'Trứng',
    price: '20.000 đồng',
    unit: 'g',
    quantity: 9900,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: 'Cash on Delivery',
  },
  {
    id: '773003',
    name: 'Đường',
    price: '20.000 đồng',
    unit: 'g',
    quantity: 10000,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: 'Transfer Bank',
  },
  {
    id: '588255',
    name: 'Sữa',
    price: '20.000 đồng',
    unit: 'ml',
    quantity: 10000,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: 'Transfer Bank',
  },
  {
    id: '778894',
    name: 'Bột bắp',
    price: '20.000 đồng',
    unit: 'ml',
    quantity: 10000,
    expiryDate: '16/8/2024',
    status: 'Chưa hết hạn',
    paymentMethod: 'Transfer Bank',
  },
  {
    id: '889542',
    name: 'Bột Tartar',
    price: '20.000 đồng',
    unit: 'g',
    quantity: 10000,
    expiryDate: '5/8/2024',
    status: 'Hết hạn',
    paymentMethod: 'Transfer Bank',
  },
  {
    id: '885252',
    name: 'Dầu thực vật',
    price: '20.000 đồng',
    unit: 'ml',
    quantity: 5000,
    expiryDate: '5/8/2024',
    status: 'Hết hạn',
    paymentMethod: 'Transfer Bank',
  },
];

const InventoryTable: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý nguyên liệu tồn kho</h1>
        <Button>+ Thêm nguyên liệu</Button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="font-semibold">
            Hiện
          </label>
          <select
            id="show"
            className="rounded border border-primary-500 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
          <span className="font-semibold">mục</span>
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="rounded border border-primary-500 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b px-4 py-3">ID nguyên liệu</th>
              <th className="border-b px-4 py-3">Tên nguyên liệu</th>
              <th className="border-b px-4 py-3">Đơn giá</th>
              <th className="border-b px-4 py-3">Đơn vị</th>
              <th className="border-b px-4 py-3">Số lượng</th>
              <th className="border-b px-4 py-3">Hạn sử dụng</th>
              <th className="border-b px-4 py-3">Status</th>
              <th className="border-b px-4 py-3">Sửa / Xóa</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => (
              <tr key={ingredient.id} className="odd:bg-white even:bg-gray-50">
                <td className="border-b px-4 py-3 text-center">{ingredient.id}</td>
                <td className="border-b px-4 py-3 text-center">{ingredient.name}</td>
                <td className="border-b px-4 py-3 text-center">{ingredient.price}</td>
                <td className="border-b px-4 py-3 text-center">{ingredient.unit}</td>
                <td className="border-b px-4 py-3 text-center">{ingredient.quantity.toLocaleString()}</td>
                <td className="border-b px-4 py-3 text-center">{ingredient.expiryDate}</td>
                <td
                  className={`border-b px-4 py-3 text-center ${ingredient.status === 'Chưa hết hạn' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {ingredient.status}
                </td>
                <td className="flex justify-center space-x-2 px-4 py-3 text-center">
                  <button className="text-blue-500 transition duration-300 hover:text-blue-700">
                    <FaEdit className="h-5 w-5" />
                  </button>
                  <button className="text-red-500 transition duration-300 hover:text-red-700">
                    <FaTrashAlt className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <div className="flex space-x-1">
          <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
            Trước
          </button>
          <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
            1
          </button>
          <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
            2
          </button>
          <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
            3
          </button>
          <button className="rounded-lg bg-primary-500 px-3 py-1 text-black transition duration-300 hover:bg-yellow-600">
            Sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;
