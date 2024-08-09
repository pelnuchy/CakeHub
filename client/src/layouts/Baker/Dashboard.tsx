import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OrderList from '../../components/Order/DashboardListCard';

const Dashboard: React.FC = () => {
  const [todaysOrders, setTodaysOrders] = useState<any[]>([]);
  const [newBakingSessionOrders, setNewBakingSessionOrders] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTodayOrdered = async () => {
      const todayOrderedServer = await fetchTodayOrdered();
      const todayPreparingServer = await fetchTodayPreparing();
      setTodaysOrders(todayOrderedServer);
      setNewBakingSessionOrders(todayPreparingServer);
      console.log(todayOrderedServer);
      console.log(todayPreparingServer);
    };
    getTodayOrdered();
  }, []);

  const fetchTodayOrdered = async (): Promise<any[]> => {
    try {
      const ordered = await axios.get(`http://localhost:8000/get-ordered-cake/baker?status=ordered`);
      const todayOrders = ordered.data.data;

      const orderDetails = todayOrders.map((order: any) => {
        return {
          id: order.orderID,
          items: order.cakes.map((cake: any) => ({
            name: cake.cakeName,
            size: cake.size,
            flavor: cake.flavor,
            quantity: cake.cakeQuantity,
            message: cake.cakeMessage,
            imgSrc: cake.img_url,
          })),
        };
      });
      return orderDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };

  const fetchTodayPreparing = async (): Promise<any[]> => {
    try {
      const preparing = await axios.get(`http://localhost:8000/get-ordered-cake/baker?status=preparing`);
      const todayOrders = preparing.data.data;

      const orderDetails = todayOrders.map((order: any) => {
        return {
          id: order.orderID,
          items: order.cakes.map((cake: any) => ({
            name: cake.cakeName,
            size: cake.size,
            flavor: cake.flavor,
            quantity: cake.cakeQuantity,
            imgSrc: cake.img_url,
          })),
        };
      });
      return orderDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };

  const addOrderToBakingSession = async (order: any) => {
    if (newBakingSessionOrders.length >= 6) {
      alert('Phiên làm bánh mới đã đầy. Không thể thêm đơn hàng mới.');
      return;
    }
    setNewBakingSessionOrders([...newBakingSessionOrders, order]);
    setTodaysOrders(todaysOrders.filter((o) => o.id !== order.id));
    await axios.put(`http://localhost:8000/update-order-status/baker/${order.id}?status=preparing`);
  };

  const removeOrderFromBakingSession = async (order: any) => {
    setNewBakingSessionOrders(newBakingSessionOrders.filter((o) => o.id !== order.id));
    setTodaysOrders([...todaysOrders, order]);
    await axios.put(`http://localhost:8000/update-order-status/baker/${order.id}?status=ordered`);
  };

  const handleDashBoardToBakingSession = async () => {
    for (const order of newBakingSessionOrders) {
      await axios.put(`http://localhost:8000/update-order-status/baker/${order.id}?status=handling`);
    }
    navigate('/baker/bakingsession');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Đơn hàng hôm nay</h1>
      <div className="mb-8 rounded-lg bg-pink-100 p-4 shadow-lg">
        <div className="max-h-96 overflow-y-auto">
          <OrderList orders={todaysOrders} onAddOrder={addOrderToBakingSession} />
        </div>
      </div>
      <h1 className="mb-8 mt-8 text-3xl font-bold">Phiên làm bánh mới</h1>
      <div className="rounded-lg bg-yellow-100 p-4 shadow-lg">
        <div className="max-h-96 overflow-y-auto">
          <OrderList orders={newBakingSessionOrders} onRemoveOrder={removeOrderFromBakingSession} />
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="px-4 py-2" onClick={handleDashBoardToBakingSession}>
            Tiến hành làm bánh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
