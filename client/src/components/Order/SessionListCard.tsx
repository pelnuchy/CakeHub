import React from 'react';

interface Order {
  id: number;
  status: 'pending' | 'countdown' | 'completed';
}

const OrderList: React.FC<{ orders: Order[] }> = ({ orders }) => (
  <div className="mb-8 flex justify-center space-x-2">
    {orders.map((order) => (
      <button
        key={order.id}
        className={`m-2 rounded-full px-4 py-2 font-medium ${
          order.status === 'completed'
            ? 'bg-green-200 text-green-800'
            : order.status === 'countdown'
              ? 'bg-yellow-200 text-yellow-800'
              : 'bg-pink-200 text-pink-800'
        }`}
      >
        #{order.id}
      </button>
    ))}
  </div>
);

export default OrderList;
