import React from 'react';
import { FaCheckCircle, FaClock, FaPlay } from 'react-icons/fa';

interface Cake {
  name: string;
  quantity: number;
  size: string;
  flavor: string;
  message: string;
  imgSrc: string;
}

interface Order {
  id: string;
  date: string;
  time: string;
  cakes: Cake[];
  status: string;
}

interface OrderCardProps {
  order: Order;
  onStart: () => void;
  onConfirm: () => void;
}

const SessionOrderCard: React.FC<OrderCardProps> = ({ order, onStart, onConfirm }) => (
  <div className="m-4 flex flex-col rounded-lg border bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
    <h3 className="mb-2 text-lg font-semibold text-gray-900">Đơn hàng #{order.id}</h3>
    <p className="text-gray-800">
      {order.date} {order.time}
    </p>
    <div className="my-4 max-h-40 w-full overflow-y-auto">
      {order.cakes.map((cake, index) => (
        <div key={index} className="mb-2">
          <img src={cake.imgSrc} alt={cake.name} className="mr-3 h-20 w-20 rounded object-cover" />
          <div>
            <p className="text-black">{cake.name}</p>
            <p className="text-gray-800">Vị: {cake.flavor}</p>
            <p className="text-gray-800">Kích thước: {cake.size}cm</p>
            <p className="text-gray-800">Số lượng: {cake.quantity}</p>
            {cake.message && <p className="text-gray-800">Lời chúc: {cake.message}</p>}
          </div>
        </div>
      ))}
    </div>
    {order.status === 'delivering' ? (
      <button className="mt-4 flex w-full items-center justify-center rounded bg-green-500 py-2 text-white transition-colors duration-300 hover:bg-green-600">
        <FaCheckCircle className="mr-2 h-5 w-5" /> Đã hoàn thành
      </button>
    ) : order.status === 'handling_2' ? (
      <button
        className="mt-4 flex w-full items-center justify-center rounded bg-yellow-500 py-2 text-white transition-colors duration-300 hover:bg-yellow-600"
        onClick={onConfirm}
      >
        <FaClock className="mr-2 h-5 w-5" /> Đang xử lý
      </button>
    ) : (
      <button
        className="mt-4 flex w-full items-center justify-center rounded bg-blue-500 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
        onClick={onStart}
      >
        <FaPlay className="mr-2 h-5 w-5" /> Bắt đầu
      </button>
    )}
  </div>
);

export default SessionOrderCard;
