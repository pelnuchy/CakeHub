import React from 'react';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

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
}

const orders: Order[] = [
  {
    id: 350,
    date: '16/07/2024',
    time: '14:00',
    cakes: [
      { name: 'Bánh kem giáng sinh đỏ', price: 350000, quantity: 1 },
      { name: 'Bánh kem kỉ niệm', price: 400000, quantity: 1 },
    ],
    isCompleted: true,
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
  },
];

const OrderCard: React.FC<{ order: Order }> = ({ order }) => (
  <div className="m-4 flex flex-col rounded-lg border bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
    <h3 className="mb-2 text-lg font-semibold text-gray-900">Đơn hàng #{order.id}</h3>
    <p className="text-gray-800">
      {order.date}, {order.time}
    </p>
    <div className="my-4">
      {order.cakes.map((cake, index) => (
        <div key={index} className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/path/to/cake/image.jpg" alt={cake.name} className="mr-3 h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-medium text-black">{cake.name}</p>
              <p className="text-sm text-gray-800">{cake.price.toLocaleString()} VND</p>
            </div>
          </div>
          <p className="text-gray-800">SL: {cake.quantity}</p>
        </div>
      ))}
    </div>
    {order.isCompleted ? (
      <button className="mt-4 flex w-full items-center justify-center rounded bg-green-500 py-2 text-white transition-colors duration-300 hover:bg-green-600">
        <FaCheckCircle className="mr-2 h-5 w-5" /> Bắt đầu
      </button>
    ) : order.countdown ? (
      <button className="mt-4 flex w-full items-center justify-center rounded bg-yellow-500 py-2 text-white transition-colors duration-300 hover:bg-yellow-600">
        <FaClock className="mr-2 h-5 w-5" /> {order.countdown}
      </button>
    ) : (
      <button className="mt-4 flex w-full items-center justify-center rounded bg-pink-500 py-2 text-white transition-colors duration-300 hover:bg-gray-600">
        <FaCheckCircle className="mr-2 h-5 w-5" /> Xác nhận
      </button>
    )}
  </div>
);

const Dashboard: React.FC = () => (
  <div className="container mx-auto p-8">
    <h1 className="mb-8 text-center text-3xl font-bold text-black">Quản lý phiên làm bánh</h1>
    <div className="mb-8 flex justify-center space-x-2">
      {orders.map((order) => (
        <button
          key={order.id}
          className={`m-2 rounded-full px-4 py-2 font-medium ${
            order.isCompleted ? 'bg-green-200 text-green-800' : 'bg-pink-200 text-pink-800'
          }`}
        >
          #{order.id}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  </div>
);

export default Dashboard;
