import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Button from '../../../components/Button';
import IngredientTable from './IngredientTable';
import AddIngredientPopup from '../../../components/AddIngredientPopup';
import { Ingredient } from '../../../utils/interfaces';
import { useNavigate } from 'react-router-dom';

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
    const ingredients = await axios.get(`${process.env.REACT_APP_API_URL}/baker/get-ingredients`);
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
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  const userInfo = sessionStorage.getItem('userInfo');
  const sessionStorageData = userInfo ? JSON.parse(userInfo) : null;

  if (!sessionStorageData || sessionStorageData.role !== 'baker') {
    navigate('/login');
  }

  const handleEdit = async (id: string) => {
    setIsEditing(id);
  };

  const handleAdd = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleSave = async (ingredient: Ingredient) => {
    setIngredients([ingredient, ...ingredients]);
    setIsPopupOpen(false); // Close the popup
  };

  const handleSaveEdit = async (
    id: string,
    ingredientData: {
      name: string;
      price: number;
      unit: string;
      quantity: number;
      perquantity: number;
      expiryDate: Date;
    },
  ) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/baker/update-ingredient/${id}`, ingredientData);
      setIsEditing(null);
    } catch (error) {
      console.error('Failed to update ingredient:', error);
    }
  };

  const handleChange = async (id: string, field: string, value: string | number) => {
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
    };
    getIngredients();
  }, []);

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý nguyên liệu tồn kho</h1>
        <Button onClick={handleAdd}>+ Thêm nguyên liệu</Button>
      </div>
      <div className="overflow-x-auto">
        <IngredientTable
          ingredients={ingredients}
          isEditing={isEditing}
          handleEdit={handleEdit}
          handleSave={handleSaveEdit}
          handleChange={handleChange}
        />
      </div>
      {isPopupOpen && <AddIngredientPopup onSave={handleSave} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default InventoryTable;
