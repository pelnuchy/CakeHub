import React, { useState, useEffect } from 'react';
import OrderList from '../../components/Order/SessionListCard';
import OrderCard from '../../components/Order/BakingSessionCard';
import axios from 'axios';
import { format } from 'date-fns';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ToastComponent from '../../components/ToastComponent';

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, 'yyyy-MM-dd');
};

const formatTime = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, 'HH:mm');
};
const BakingSession: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<any[]>([]);
  const userInfo = sessionStorage.getItem('userInfo');
  const sessionStorageData = userInfo ? JSON.parse(userInfo) : null;

  if (!sessionStorageData || sessionStorageData.role !== 'baker') {
    navigate('/login');
  }
  const handleStart = async (id: string) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/baker/calculate-ingredient/${id}`);
      const status = response.status;
      if (status == 201 || status == 401)
        toast.error(response.data.status);
      else {
        await axios.put(`${process.env.REACT_APP_API_URL}/update-order-status/baker/${id}?status=handling_2`);
        setOrders((prevOrders) =>
          prevOrders.map((order) => (order.id === id ? { ...order, status: 'handling_2' } : order)),
        );
        toast.success(response.data.status);
      }
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  const handleConfirm = async (id: string) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/update-order-status/baker/${id}?status=delivering`);
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order.id === id ? { ...order, status: 'delivering' } : order)),
      );
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  useEffect(() => {
    const getTodayOrdered = async () => {
      const todayHandlingServer = await fetchHandlingToday();
      setOrders(todayHandlingServer);
    };
    getTodayOrdered();
  }, []);

  const fetchHandlingToday = async (): Promise<any[]> => {
    try {
      const ordered = await axios.get(`${process.env.REACT_APP_API_URL}/get-handling-cake/baker`);
      const handlingOrders = ordered.data.data;

      const orderDetails = handlingOrders.map((order: any) => {
        return {
          id: order._id,
          date: formatDate(moment.tz(`${order.shippingDate}`, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm')),
          time: formatTime(moment.tz(`${order.shippingDate}`, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm')),
          status: order.status,
          cakes: order.cakes.map((cake: any) => ({
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

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-black">Quản lý phiên làm bánh</h1>
      <OrderList orders={orders} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onStart={() => handleStart(order.id)}
            onConfirm={() => handleConfirm(order.id)}
          />
        ))}
      </div>
      <ToastComponent />
    </div>
  );
};

export default BakingSession;
