import React, { useState } from 'react';
import Button from '../../components/Button';

interface Order {
  id: number;
  name: string;
  flavor: string;
  size: string;
  image: string;
}

const initialTodaysOrders: Order[] = [
  { id: 355, name: 'Bánh kem trái cây', flavor: 'Trái cây', size: 'Lớn', image: '/path/to/image1.jpg' },
  { id: 356, name: 'Bánh kem dâu', flavor: 'Dâu', size: 'Nhỏ', image: '/path/to/image2.jpg' },
  { id: 357, name: 'Bánh kem sô cô la', flavor: 'Sô cô la', size: 'Trung bình', image: '/path/to/image3.jpg' },
];

const OrderCard: React.FC<{ order: Order; onAdd?: () => void; onRemove?: () => void }> = ({
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
  const [todaysOrders, setTodaysOrders] = useState<Order[]>(initialTodaysOrders);
  const [newBakingSessionOrders, setNewBakingSessionOrders] = useState<Order[]>([]);

  const addOrderToBakingSession = (order: Order) => {
    if (newBakingSessionOrders.length >= 6) {
      alert('Phiên làm bánh mới đã đầy. Không thể thêm đơn hàng mới.');
      return;
    }
    setNewBakingSessionOrders([...newBakingSessionOrders, order]);
    setTodaysOrders(todaysOrders.filter((o) => o.id !== order.id));
  };

  const removeOrderFromBakingSession = (order: Order) => {
    setNewBakingSessionOrders(newBakingSessionOrders.filter((o) => o.id !== order.id));
    setTodaysOrders([...todaysOrders, order]);
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
          <Button className="px-4 py-2">Tiến hành làm bánh</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
