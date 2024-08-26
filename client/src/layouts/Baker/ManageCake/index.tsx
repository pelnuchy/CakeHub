import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../../components/Button';
import CakeTable from './CakeTable';
import Pagination from './Pagination';
import SearchAndFilter from './SearchAndFilter';
import { Cake } from '../../../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import AddCakePopup from '../../../components/AddCakePopup';

const fetchCakes = async (): Promise<Cake[]> => {
  try {
    const {
      data: { data },
    } = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-cakes`);
    return data.map(
      (cake: any): Cake => ({
        ...cake,
        createdAt: new Date(cake.createdAt),
        updatedAt: new Date(cake.updatedAt),
      }),
    );
  } catch (error) {
    console.error('Error fetching cakes:', error);
    return [];
  }
};

const CakeModel: React.FC = () => {
  const navigate = useNavigate();
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo');
    const sessionStorageData = userInfo ? JSON.parse(userInfo) : null;

    if (!sessionStorageData || sessionStorageData.role !== 'baker') {
      navigate('/login');
    }

    const getCakes = async () => {
      const cakesFromServer = await fetchCakes();
      setCakes(cakesFromServer);
    };

    getCakes();
  }, [navigate]);

  const handleDelete = async (id: string) => {
    try {
      setCakes(cakes.filter((cake) => cake.cakeID !== id));
      await axios.delete(`${process.env.REACT_APP_API_URL}/baker/delete-cake/${id}`);
    } catch (error) {
      console.error('Failed to delete cake:', error);
    }
  };

  const handleAdd = () => {
    console.log('Add button clicked');
    setIsPopupOpen(true);
  };

  const handleSave = async (cake: Cake) => {
    console.log('Save handler called with:', cake);
    setCakes([cake, ...cakes]);
    setIsPopupOpen(false);
  };

  const handleClose = () => {
    console.log('Popup close handler called');
    setIsPopupOpen(false);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý bánh trong kho</h1>
        <Button onClick={handleAdd}>+ Thêm bánh</Button>
      </div>
      <SearchAndFilter />
      <div className="overflow-x-auto">
        <CakeTable cakes={cakes} handleDelete={handleDelete} />
      </div>
      <Pagination />
      {isPopupOpen && <AddCakePopup onSave={handleSave} onClose={handleClose} />}
    </div>
  );
};

export default CakeModel;
