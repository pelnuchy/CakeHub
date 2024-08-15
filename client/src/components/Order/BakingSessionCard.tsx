import React from 'react';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

interface Cake {
  name: string;
  quantity: number;
  size: string,
  flavor: string,
  message: string,
  imgSrc: string,
}

interface Order {
  id: string;
  date: string;
  time: string;
  cakes: Cake[];
  isCompleted: boolean;
  countdown?: string;
  status: string; // Add status to track order state
}

interface OrderCardProps {
  order: Order;
  onStart: () => void;
  onConfirm: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onStart, onConfirm }) => (
  <div className="m-4 flex flex-col rounded-lg border bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
    <h3 className="mb-2 text-lg font-semibold text-gray-900">Đơn hàng #{order.id}</h3>
    <p className="text-gray-800">
      {order.date} {order.time}
    </p>
    <div className="my-4">
      {order.cakes.map((cake, index) => (
        <div key={index} className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src={cake.imgSrc} alt={cake.name} className="mr-3 h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-medium text-black">{cake.name}</p>
              <p className="text-sm text-gray-800">{cake.flavor} - {cake.size}cm</p>
            </div>
          </div>
          <p className="text-gray-800">SL: {cake.quantity}</p>
        </div>
      ))}
    </div>
    {order.status === 'completed' ? (
      <button className="mt-4 flex w-full items-center justify-center rounded bg-green-500 py-2 text-white transition-colors duration-300 hover:bg-green-600">
        <FaCheckCircle className="mr-2 h-5 w-5" /> Đã hoàn thành
      </button>
    ) : order.status === 'countdown' ? (
      <button
        className="mt-4 flex w-full items-center justify-center rounded bg-yellow-500 py-2 text-white transition-colors duration-300 hover:bg-yellow-600"
        onClick={onConfirm}
      >
        <FaClock className="mr-2 h-5 w-5" /> {order.countdown}
      </button>
    ) : (
      <button
        className="mt-4 flex w-full items-center justify-center rounded bg-pink-500 py-2 text-white transition-colors duration-300 hover:bg-gray-600"
        onClick={onStart}
      >
        <FaCheckCircle className="mr-2 h-5 w-5" /> Bắt đầu
      </button>
    )}
  </div>
);

export default OrderCard;
