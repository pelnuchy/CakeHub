import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../../components/Button';
import CakeTable from './CakeTable';
import { Cake } from '../../../utils/interfaces';
import { useNavigate } from 'react-router-dom';
import AddCakePopup from '../../../components/AddCakePopup';
import ToastComponent from '../../../components/ToastComponent';
import { toast } from 'react-toastify';

const fetchCakes = async (): Promise<Cake[]> => {
  try {
    const {
      data: { data },
    } = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-cakes-baker`);
    return data.map(
      (cake: any): Cake => ({
        ...cake,
      }),
    );
  } catch (error) {
    console.error('Error fetching cakes:', error);
    return [];
  }
};

const getNextCakeId = (cakes: Cake[]): string => {
  if (cakes.length === 0) return 'C1';

  const lastCakeId = cakes[cakes.length - 1].cakeID;
  const lastIdNumber = parseInt(lastCakeId.replace('C', ''));
  const newIdNumber = lastIdNumber + 1;
  return `C${newIdNumber}`;
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
      await axios.delete(`${process.env.REACT_APP_API_URL}/delete-cake/${id}`);
      setCakes(cakes.filter((cake) => cake.cakeID !== id));
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error('Giỏ hàng hoặc đơn hàng đã chứa bánh này. Không thể xóa bánh này');
      } else {
        toast.error('Có lỗi xảy ra khi xóa bánh');
      }
    }
  };

  const handleAdd = () => {
    setIsPopupOpen(true);
  };

  const handleSave = async (cake: Cake) => {
    setCakes([cake, ...cakes]);
    setIsPopupOpen(false);
    toast.success('Thêm bánh thành công');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản lý bánh trong kho</h1>
        <Button onClick={handleAdd}>+ Thêm bánh</Button>
      </div>
      <div className="overflow-x-auto">
        <CakeTable cakes={cakes} handleDelete={handleDelete} />
      </div>
      {isPopupOpen && (
        <AddCakePopup onSave={handleSave} onClose={handleClose} getNextCakeId={() => getNextCakeId(cakes)} />
      )}
      <ToastComponent />
    </div>
  );
};

export default CakeModel;
