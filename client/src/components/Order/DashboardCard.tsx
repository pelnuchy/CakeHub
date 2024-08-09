import React from 'react';

interface Item {
  name: string;
  flavor: string;
  size: string;
  quantity: number;
  message?: string;
  imgSrc: string;
}

interface Order {
  id: number;
  items: Item[];
}

interface OrderCardProps {
  order: Order;
  onAdd?: () => void;
  onRemove?: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, onAdd, onRemove }) => (
  <div className="m-4 flex transform flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md transition-transform hover:scale-105">
    <h3 className="mb-2 text-lg font-semibold">Đơn hàng #{order.id}</h3>
    <div className="mb-2 max-h-40 w-full overflow-y-auto">
      {order.items.map((item, index) => (
        <div key={index} className="mb-2">
          <img src={item.imgSrc} alt={item.name} className="mb-2 h-20 w-20 rounded object-cover" />
          <p className="text-black">{item.name}</p>
          <p className="text-gray-800">Vị: {item.flavor}</p>
          <p className="text-gray-800">Kích thước: {item.size}</p>
          <p className="text-gray-800">Số lượng: {item.quantity}</p>
          {item.message && <p className="text-gray-800">Lời chúc: {item.message}</p>}
        </div>
      ))}
    </div>
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

export default OrderCard;
