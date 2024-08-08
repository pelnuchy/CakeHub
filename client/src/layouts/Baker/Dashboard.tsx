import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderCard: React.FC<{ order: any; onAdd?: () => void; onRemove?: () => void }> = ({
  order,
  onAdd,
  onRemove,
}) => (
  <div className="m-4 flex transform flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
    <h3 className="mb-2 text-lg font-semibold">Đơn hàng #{order.id}</h3>
    <img src={order.image} alt={order.name} className="mb-2 h-20 w-20 rounded object-cover" />
    <p className="text-black">{order.name}</p>
    <p className="text-gray-800">Vị: {order.flavor}</p>
    <p className="text-gray-800">Kích thước: {order.size}</p>
    <p className="text-gray-800">Số lượng: {order.quantity}</p>
    <p className="text-gray-800">Lời chúc: {order.message}</p>
    {onAdd && (
      <button
        onClick={onAdd}
        className="mt-4 w-full rounded bg-pink-500 py-2 text-white transition-colors hover:bg-pink-600"
      >
        Thêm
      </button>
    )}
    {onRemove && (
      <button
        onClick={onRemove}
        className="mt-4 w-full rounded bg-red-500 py-2 text-white transition-colors hover:bg-red-600"
      >
        Xoá
      </button>
    )}
  </div>
);

const Dashboard: React.FC = () => {
  const [todaysOrders, setTodaysOrders] = useState<any[]>([]);
  const [newBakingSessionOrders, setNewBakingSessionOrders] = useState<any[]>([]);
  const navigate = useNavigate();

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

      // Map through orders and use the already detailed cake information
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

      // Map through orders and use the already detailed cake information
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
        <div className="flex overflow-x-auto pb-4">
          {todaysOrders.map((order) => (
            <OrderCard key={order.id} order={order} onAdd={() => addOrderToBakingSession(order)} />
          ))}
        </div>
      </div>
      <h1 className="mb-8 mt-8 text-3xl font-bold">Phiên làm bánh mới</h1>
      <div className="rounded-lg bg-yellow-100 p-4 shadow-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newBakingSessionOrders.map((order) => (
            <OrderCard key={order.id} order={order} onRemove={() => removeOrderFromBakingSession(order)} />
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="px-4 py-2" onClick={handleDashBoardToBakingSession}>Tiến hành làm bánh</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;