import React from 'react';
import IngredientRow from './IngredientRow';
import { Ingredient } from '../../../utils/interfaces';

interface IngredientTableProps {
  ingredients: Ingredient[];
  isEditing: string | null;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSave: (
    id: string,
    ingredientData: {
      name: string;
      price: number;
      unit: string;
      quantity: number;
      perquantity: number;
      expiryDate: string;
    },
  ) => void;
  handleChange: (id: string, field: string, value: string | number) => void;
}

const IngredientTable: React.FC<IngredientTableProps> = ({
  ingredients,
  isEditing,
  handleEdit,
  handleDelete,
  handleSave,
  handleChange,
}) => {
  return (
    <table className="min-w-full border border-gray-300 bg-white">
      <thead>
        <tr className="bg-gray-100">
          <th className="border-b px-4 py-3">Mã nguyên liệu</th>
          <th className="border-b px-4 py-3">Tên nguyên liệu</th>
          <th className="border-b px-4 py-3">Đơn giá</th>
          <th className="border-b"></th>
          <th className="border-b py-3">Đơn vị</th>
          <th className="border-b px-4 py-3">Số lượng tồn kho</th>
          <th className="border-b px-4 py-3">Hạn sử dụng</th>
          <th className="border-b px-4 py-3">Status</th>
          <th className="border-b px-4 py-3">Sửa / Xóa</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient) => (
          <IngredientRow
            key={ingredient.id}
            ingredient={ingredient}
            isEditing={isEditing}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleSave={handleSave}
            handleChange={handleChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default IngredientTable;
