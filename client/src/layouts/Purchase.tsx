import React, { useState } from 'react';

// Initial order data
const initialOrders = [
  {
    id: 54879,
    items: [
      {
        name: 'Bánh kem sinh nhật hình tên tháng 12',
        price: '250,000 VND',
        imgSrc: '../../assets/cake/cake1.jpg',
        quantity: 2,
      },
      {
        name: 'Bánh kem sinh nhật "Tặng cả bầu trời"',
        price: '200,000 VND',
        imgSrc: '../../assets/cake/cake2.jpg',
        quantity: 1,
      },
    ],
    delivery: {
      method: 'Giao hàng tiết kiệm',
      address: 'Food Centre, Pasteur, District 3, TP.HCM',
      cost: '50,000 VND',
    },
    total: '750,000 VND',
    discount: '50,000 VND',
    status: 'Đã xử lý',
  },
  {
    id: 54880,
    items: [
      {
        name: 'Bánh sinh nhật hình cái nơ',
        price: '450,000 VND',
        imgSrc: '../../assets/cake/cake3.jpg',
        quantity: 1,
      },
    ],
    delivery: {
      method: 'Giao hàng nhanh',
      address: 'Food Centre, Pasteur, District 3, TP.HCM',
      cost: '50,000 VND',
    },
    total: '500,000 VND',
    discount: '50,000 VND',
    status: 'Đã nhận hàng',
  },
];

// Status steps
const orderStatuses = ['Đã đặt hàng', 'Đang xử lý', 'Đã xử lý', 'Đã giao', 'Đã nhận hàng'];

// Get progress percentage based on status
const getStatusProgress = (status: string) => {
  switch (status) {
    case 'Đã đặt hàng':
      return '20%';
    case 'Đang xử lý':
      return '40%';
    case 'Đã xử lý':
      return '60%';
    case 'Đã giao':
      return '80%';
    case 'Đã nhận hàng':
      return '100%';
    default:
      return '0%';
  }
};

// Purchase component
const Purchase = () => {
  // State to manage orders
  const [orders, setOrders] = useState(initialOrders);

  // Handle button click
  const handleReceivedClick = (id: any) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: 'Đã nhận hàng' } : order)));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-primary-600">Đơn hàng của tôi</h1>
      {/* <nav className="mb-8">
        <ul className="flex space-x-6 border-b-2 border-gray-200 pb-2">
          <li className="cursor-pointer font-semibold text-primary-500">Đơn mua</li>
          <li className="cursor-pointer text-gray-500 hover:text-primary-500">Lịch sử mua hàng</li>
        </ul>
      </nav> */}
      {orders.map((order) => (
        <div key={order.id} className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Đơn hàng #{order.id}</h2>
            {order.status === 'Đã giao' ? (
              <button
                onClick={() => handleReceivedClick(order.id)}
                className="rounded-lg bg-primary-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-primary-600"
              >
                Đã nhận hàng
              </button>
            ) : (
              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  order.status === 'Đã nhận hàng' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}
              >
                {order.status}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-2">
              {order.items.map((item, index) => (
                <div key={index} className="mb-6 flex border-b pb-4">
                  <img src={item.imgSrc} alt={item.name} className="h-32 w-32 rounded-lg object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                    <p className="text-gray-600">Số lượng: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800">Địa chỉ giao hàng</h4>
              <p className="text-gray-600">{order.delivery.method}</p>
              <p className="text-gray-600">{order.delivery.address}</p>
              <div className="mt-4">
                <p className="flex justify-between text-gray-800">
                  <span className="font-medium">Tổng tiền:</span>
                  <span className="font-semibold">{order.total}</span>
                </p>
                <p className="flex justify-between text-gray-800">
                  <span className="font-medium">Phí vận chuyển:</span>
                  <span className="font-semibold">{order.delivery.cost}</span>
                </p>
                <p className="flex justify-between text-gray-800">
                  <span className="font-medium">Giảm giá:</span>
                  <span className="font-semibold">{order.discount}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-primary-500 transition-all duration-500"
                style={{ width: getStatusProgress(order.status) }}
              ></div>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              {orderStatuses.map((status, index) => (
                <span
                  key={index}
                  className={`relative ${order.status === status ? 'font-bold text-primary-500' : 'text-gray-600'}`}
                >
                  {status}
                  {order.status === status && (
                    <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 transform rounded-full bg-primary-500"></span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Purchase;
