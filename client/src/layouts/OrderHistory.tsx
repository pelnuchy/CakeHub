import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [currentTab, setCurrentTab] = useState('orders');
  const [orderHistories, setOrderHistories] = useState<any[]>([]);

  useEffect(() => {
    const getOrderHistory = async () => {
      const userInfoString = sessionStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const orderHistories = await fetchOrderHistory(userInfo.userID);
        setOrderHistories(orderHistories);
        console.log('Order history:', orderHistories);
      } else {
        console.log('No user info found');
      }
    };
    getOrderHistory();
  }, []);

  const fetchOrderHistory = async (userID: string): Promise<any[]> => {
    try {
      const response = await axios.get(`http://localhost:8000/get-order-history/${userID}`);
      const orders = response.data.data; // Access the 'data' field
      console.log('Fetched orders:', orders);

      // Map through orders and use the already detailed cake information
      const orderDetails = orders.map((order: any) => {
        return {
          date: order.shippingDate,
          orderId: order.orderID,
          total: `${Number(order.total_price).toLocaleString()} VND`,
          items: order.cakes.map((cake: any) => ({
            name: cake.cakeName,
            price: `${Number(cake.price).toLocaleString()} VND`,
            size: cake.size,
            flavor: cake.flavor,
            quantity: cake.quantity,
            imgSrc: cake.img_url,
          })),
        };
      });

      console.log('Order details with cake info:', orderDetails);
      return orderDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Đơn hàng của tôi</h1>
      {/* <nav className="mb-8">
        <ul className="flex space-x-6 border-b-2 border-gray-200 pb-2">
          <li
            className={`cursor-pointer font-semibold ${
              currentTab === 'orders'
                ? 'border-b-2 border-primary-500 text-primary-500'
                : 'text-gray-500 hover:text-primary-500'
            }`}
            onClick={() => setCurrentTab('orders')}
          >
            Đơn mua
          </li>
          <li
            className={`cursor-pointer font-semibold ${
              currentTab === 'history'
                ? 'border-b-2 border-primary-500 text-primary-500'
                : 'text-gray-500 hover:text-primary-500'
            }`}
            onClick={() => setCurrentTab('history')}
          >
            Lịch sử mua hàng
          </li>
        </ul>
      </nav> */}

      {/* {currentTab === 'history' && ( */}
      {
        <div className="grid grid-cols-1 gap-8">
          {orderHistories.length > 0 ? (
            orderHistories.map((order, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-black">Ngày nhận bánh</p>
                    <p className="font-semibold text-gray-800">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-black">Đơn hàng</p>
                    <p className="font-semibold text-gray-800">{order.orderId}</p>
                  </div>
                  <div>
                    <p className="text-black">Tổng tiền</p>
                    <p className="font-semibold text-gray-800">{order.total}</p>
                  </div>
                </div>
                {order.items.map((item: any, itemIndex: any) => (
                  <div key={itemIndex} className="mb-6 flex border-b pb-4">
                    <img src={item.imgSrc} alt={item.name} className="h-32 w-32 rounded-lg object-cover" />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-black">{item.name}</h3>
                      <p className="text-gray-800">{item.price}</p>
                      <p className="text-gray-800">Kích thước: {item.size}</p>
                      <p className="text-gray-800">Vị: {item.flavor}</p>
                      <p className="text-gray-800">Số lượng: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="text-gray-700">Không có đơn hàng nào.</p>
          )}
        </div>
      }

      {/* {currentTab === 'orders' && (
        <div className="text-center">
          <p className="text-gray-500">Lịch sử mua hàng hiện đang trống.</p>
        </div>
      )} */}
    </div>
  );
};

export default OrderHistory;
