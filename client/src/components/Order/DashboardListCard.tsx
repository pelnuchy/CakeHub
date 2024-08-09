import React from 'react';
import OrderCard from './DashboardCard';

interface Order {
  id: number;
  items: {
    name: string;
    flavor: string;
    size: string;
    quantity: number;
    message?: string;
    imgSrc: string;
  }[];
}

interface OrderListProps {
  orders: Order[];
  onAddOrder?: (order: Order) => void;
  onRemoveOrder?: (order: Order) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, onAddOrder, onRemoveOrder }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {orders.map((order) => (
      <OrderCard
        key={order.id}
        order={order}
        onAdd={onAddOrder ? () => onAddOrder(order) : undefined}
        onRemove={onRemoveOrder ? () => onRemoveOrder(order) : undefined}
      />
    ))}
  </div>
);

export default OrderList;
