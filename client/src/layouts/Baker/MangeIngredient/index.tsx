import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Button from '../../../components/Button';
import IngredientTable from './IngredientTable';
import Pagination from './Pagination';
import SearchAndFilter from './SearchAndFilter';
import { Ingredient } from './IngredientType';

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, 'yyyy-MM-dd');
};
const checkExpired = (expiryDate: Date) => {
  const today = new Date();
  return expiryDate > today;
};
const fetchIngredients = async (): Promise<any[]> => {
  try {
    const ingredients = await axios.get(`http://localhost:8000/baker/get-ingredients`);
    const ingredientData = ingredients.data.data;
    const ingredientDetails = ingredientData.map((ingre: any) => {
      return {
        id: ingre.ingredientID,
        name: ingre.ingredientName,
        quantity: ingre.ingredientQuantity,
        perquantity: ingre.ingredientPerQuantity,
        unit: ingre.ingredientUnit,
        price: ingre.ingredientPerPrice,
        expiryDate: formatDate(ingre.expired),
        status: checkExpired(new Date(ingre.expired)),
      };
    });
    return ingredientDetails;
  } catch (error) {
    console.log('Error fetching ingredients:', error);
    return [];
  }
};

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
      perquantity: 0,
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

  useEffect(() => {
    const getIngredients = async () => {
      const ingredientsServer = await fetchIngredients();
      setIngredients(ingredientsServer);
      console.log(ingredientsServer);
    };
    getIngredients();
  }, []);

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý nguyên liệu tồn kho</h1>
        <Button onClick={handleAdd}>+ Thêm nguyên liệu</Button>
      </div>
      <SearchAndFilter />
      <div className="overflow-x-auto">
        <IngredientTable
          ingredients={ingredients}
          isEditing={isEditing}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleSave={handleSave}
          handleChange={handleChange}
        />
      </div>
      <Pagination />
    </div>
  );
};

export default InventoryTable;
