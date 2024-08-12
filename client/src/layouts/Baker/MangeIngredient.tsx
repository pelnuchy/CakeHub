import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa'; // Import the icons you need
import Button from '../../components/Button';
import axios from 'axios';
import { format } from 'date-fns';
import exp from 'constants'; interface Ingredient {
  id: string;
  name: string;
  price: string;
  unit: string;
  quantity: number;
  expiryDate: string;
  status: boolean; // Changed to boolean
  paymentMethod: string;
}

const InventoryTable: React.FC = () => {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setIsEditing(id);
  };

  const handleDelete = (id: string) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const handleAdd = () => {
    const newIngredient: Ingredient = {
      id: '0',
      name: 'New Ingredient',
      price: '0 đồng',
      unit: 'g',
      quantity: 0,
      expiryDate: '',
      status: true, // New ingredient status
      paymentMethod: '',
    };
    setIngredients([newIngredient, ...ingredients]);
  };

  const handleSave = (id: string) => {
    setIsEditing(null);
  };

  const handleChange = (id: string, field: string, value: string | number) => {
    if (field === 'expiryDate') {
      const today = new Date();
      const expiryDate = new Date(value as string);
      const isExpired = expiryDate < today;

      setIngredients(
        ingredients.map((ingredient) =>
          ingredient.id === id
            ? { ...ingredient, expiryDate: value as string, status: !isExpired } // Update status based on expiryDate
            : ingredient,
        ),
      );
    } else {
      setIngredients(
        ingredients.map((ingredient) => (ingredient.id === id ? { ...ingredient, [field]: value } : ingredient)),
      );
    }
  };

  const checkExpired = (expiryDate: Date) => {
    const today = new Date();
    return expiryDate > today;
  }
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return format(date, 'dd/MM/yyyy');
  };
  useEffect(() => {
    const getIngredients = async () => {
      const ingredientsServer = await fetchIngredients();
      setIngredients(ingredientsServer);
      console.log(ingredientsServer);
    };
    getIngredients();
  }, []);

  const fetchIngredients = async (): Promise<any[]> => {
    try {
      const ingredients = await axios.get(`http://localhost:8000/baker/get-ingredients`);
      const ingredientData = ingredients.data.data;
      const ingredientDetails = ingredientData.map((ingre: any) => {
        return {
          id: ingre.ingredientID,
          name: ingre.ingredientName,
          quantity: ingre.ingredientQuantity,
          unit: ingre.ingredientUnit,
          price: ingre.ingredientPrice,
          expiryDate: formatDate(ingre.expired),
          status: checkExpired(new Date(ingre.expired))
        };
      });
      return ingredientDetails;
    } catch (error) {
      console.log('Error fetching ingredients:', error);
      return [];
    }
  };
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý nguyên liệu tồn kho</h1>
        <Button onClick={handleAdd}>+ Thêm nguyên liệu</Button>
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
                <td className="border-b px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <input
                      type="text"
                      value={ingredient.id}
                      onChange={(e) => handleChange(ingredient.id, 'id', e.target.value)}
                      className="w-full border-b px-2"
                    />
                  ) : (
                    ingredient.id
                  )}
                </td>
                <td className="border-b px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <input
                      type="text"
                      value={ingredient.name}
                      onChange={(e) => handleChange(ingredient.id, 'name', e.target.value)}
                      className="w-full border-b px-2"
                    />
                  ) : (
                    ingredient.name
                  )}
                </td>
                <td className="border-b px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <input
                      type="text"
                      value={ingredient.price}
                      onChange={(e) => handleChange(ingredient.id, 'price', Number(e.target.value))}
                      className="w-full border-b px-2"
                    />
                  ) : (
                    ingredient.price.toLocaleString() + ' VND'
                  )}
                </td>
                <td className="border-b px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <input
                      type="text"
                      value={ingredient.unit}
                      onChange={(e) => handleChange(ingredient.id, 'unit', e.target.value)}
                      className="w-full border-b px-2"
                    />
                  ) : (
                    ingredient.unit
                  )}
                </td>
                <td className="border-b px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <input
                      type="number"
                      value={ingredient.quantity}
                      onChange={(e) => handleChange(ingredient.id, 'quantity', Number(e.target.value))}
                      className="w-full border-b px-2"
                    />
                  ) : (
                    ingredient.quantity.toLocaleString()
                  )}
                </td>
                <td className="border-b px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <input
                      type="text"
                      value={ingredient.expiryDate}
                      onChange={(e) => handleChange(ingredient.id, 'expiryDate', e.target.value)}
                      className="w-full border-b px-2"
                    />
                  ) : (
                    ingredient.expiryDate
                  )}
                </td>
                <td
                  className={`border-b px-4 py-3 text-center ${ingredient.status ? 'text-green-500' : 'text-red-500'}`}
                >
                  {ingredient.status ? 'Chưa hết hạn' : 'Hết hạn'}
                </td>
                <td className="flex justify-center space-x-2 px-4 py-3 text-center">
                  {isEditing === ingredient.id ? (
                    <button
                      onClick={() => handleSave(ingredient.id)}
                      className="text-blue-500 transition duration-300 hover:text-blue-700"
                    >
                      <FaSave className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(ingredient.id)}
                      className="text-blue-500 transition duration-300 hover:text-blue-700"
                    >
                      <FaEdit className="h-5 w-5" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(ingredient.id)}
                    className="text-red-500 transition duration-300 hover:text-red-700"
                  >
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
