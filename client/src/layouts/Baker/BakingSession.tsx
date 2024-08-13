import React, { useState, useEffect } from 'react';
import OrderList from '../../components/Order/SessionListCard';
import OrderCard from '../../components/Order/BakingSessionCard';
import axios from 'axios';
interface Cake {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  date: string;
  time: string;
  cakes: Cake[];
  isCompleted: boolean;
  countdown?: string;
  status: 'pending' | 'countdown' | 'completed';
}

const initialOrders: Order[] = [
  {
    id: 350,
    date: '16/07/2024',
    time: '14:00',
    cakes: [
      { name: 'Bánh kem giáng sinh đỏ', price: 350000, quantity: 1 },
      { name: 'Bánh kem kỉ niệm', price: 400000, quantity: 1 },
    ],
    isCompleted: true,
    countdown: undefined,
    status: 'completed',
  },
  {
    id: 351,
    date: '16/07/2024',
    time: '15:00',
    cakes: [
      { name: 'Bánh kem bắp', price: 350000, quantity: 1 },
      { name: 'Bánh gato trái dâu', price: 400000, quantity: 2 },
    ],
    isCompleted: true,
    countdown: undefined,
    status: 'completed',
  },
  {
    id: 352,
    date: '16/07/2024',
    time: '17:00',
    cakes: [
      { name: 'Bánh gato hình người tuyết', price: 400000, quantity: 1 },
      { name: 'Bánh gato giáng sinh', price: 400000, quantity: 1 },
    ],
    isCompleted: false,
    countdown: '03:34:12',
    status: 'countdown',
  },
  {
    id: 353,
    date: '16/07/2024',
    time: '20:00',
    cakes: [
      { name: 'Bánh kem bắp', price: 350000, quantity: 1 },
      { name: 'Bánh gato trái dâu', price: 400000, quantity: 1 },
    ],
    isCompleted: false,
    countdown: undefined,
    status: 'pending',
  },
  {
    id: 354,
    date: '16/07/2024',
    time: '22:00',
    cakes: [
      { name: 'Bánh kem bắp', price: 350000, quantity: 1 },
      { name: 'Bánh gato giáng sinh', price: 400000, quantity: 1 },
    ],
    isCompleted: false,
    countdown: undefined,
    status: 'pending',
  },
];
const BakingSession: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleStart = (id: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === id ? { ...order, status: 'countdown', countdown: '03:00:00' } : order)),
    );
  };

  const handleConfirm = (id: number) => {
    setOrders((prevOrders) => prevOrders.map((order) => (order.id === id ? { ...order, status: 'completed' } : order)));
  };

  useEffect(() => {
    const getTodayOrdered = async () => {
      const todayHandlingServer = await fetchHandlingToday();
      setOrders(todayHandlingServer);
      console.log(todayHandlingServer);
    };
    getTodayOrdered();
  }, []);

  const fetchHandlingToday = async (): Promise<any[]> => {
    try {
      const ordered = await axios.get(`http://localhost:8000/get-status-cake/baker?status=handling`);
      const handlingOrders = ordered.data.data;

      const orderDetails = handlingOrders.map((order: any) => {
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
    </div>
  );
};

export default BakingSession;
