import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const orderHistory = [
  {
    date: '10/02/2024',
    orderId: 'WU8919111',
    total: '2,000,000 VND',
    items: [
      {
        name: 'Bánh kem sinh nhật hình lịch tháng 12',
        price: '800,000 VND',
        size: '16cm',
        flavor: 'Vị dâu tây',
        quantity: 2,
        imgSrc: 'path_to_image_1',
      },
      {
        name: 'Bánh kem sinh nhật "Tặng cả bầu trời"',
        price: '350,000 VND',
        size: '10cm',
        flavor: 'Vị chanh dây',
        quantity: 1,
        imgSrc: 'path_to_image_2',
      },
    ],
  },
  {
    date: '10/02/2024',
    orderId: 'WU8919111',
    total: '850,000 VND',
    items: [
      {
        name: 'Bánh kem sinh nhật hình lịch tháng 12',
        price: '800,000 VND',
        size: '16cm',
        flavor: 'Vị dâu tây',
        quantity: 2,
        imgSrc: 'path_to_image_1',
      },
    ],
  },
];

const OrderHistory = () => {
  const [currentTab, setCurrentTab] = useState('orders');
  useEffect(() => {
    const getOrderHistory = async () => {
      const userInfoString = sessionStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const orderHistories = await fetchOrderHistory(userInfo.userID);
        // Assuming setOrderHistories should actually update the context's orderHistory
        // setOrderHistories(orderHistories); // This line is replaced with the context method
      } else {
        console.log('No user info found');
      }
    };
    getOrderHistory();
  }, []);

  const fetchOrderHistory = async (userID: string) => {
    try {
      const response = await axios.get(`http://localhost:8000/get-order-history/${userID}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Đơn hàng của tôi</h1>
      <nav className="mb-8">
        <ul className="flex space-x-6 border-b-2 border-gray-200 pb-2">
          <li
            className={`cursor-pointer font-semibold ${currentTab === 'orders'
              ? 'border-b-2 border-primary-500 text-primary-500'
              : 'text-gray-500 hover:text-primary-500'
              }`}
            onClick={() => setCurrentTab('orders')}
          >
            Đơn mua
          </li>
          <li
            className={`cursor-pointer font-semibold ${currentTab === 'history'
              ? 'border-b-2 border-primary-500 text-primary-500'
              : 'text-gray-500 hover:text-primary-500'
              }`}
            onClick={() => setCurrentTab('history')}
          >
            Lịch sử mua hàng
          </li>
        </ul>
      </nav>

      {currentTab === 'orders' && (
        <div className="grid grid-cols-1 gap-8">
          {orderHistory.map((order, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-gray-600">Ngày nhận bánh</p>
                  <p className="font-semibold text-gray-900">{order.date}</p>
                </div>
                <div>
                  <p className="text-gray-600">Đơn hàng</p>
                  <p className="font-semibold text-gray-900">{order.orderId}</p>
                </div>
                <div>
                  <p className="text-gray-600">Tổng tiền</p>
                  <p className="font-semibold text-gray-900">{order.total}</p>
                </div>
              </div>
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-6 flex border-b pb-4">
                  <img src={item.imgSrc} alt={item.name} className="h-32 w-32 rounded-lg object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                    <p className="text-gray-600">Kích thước: {item.size}</p>
                    <p className="text-gray-600">Vị: {item.flavor}</p>
                    <p className="text-gray-600">Số lượng: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {currentTab === 'history' && (
        <div className="text-center">
          <p className="text-gray-500">Lịch sử mua hàng hiện đang trống.</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
