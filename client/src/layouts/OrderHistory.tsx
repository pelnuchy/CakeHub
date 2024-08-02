import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderHistory = () => {
  const navigate = useNavigate();
  const [orderHistories, setOrderHistories] = useState<any[]>([]);

  const transSize = (size: number) => {
    if (size === 10) return 'S';
    if (size === 16) return 'M';
    if (size === 24) return 'L';
  };

  useEffect(() => {
    const fetchOrderHistory = async (userID: string): Promise<any[]> => {
      try {
        const response = await axios.get(`http://localhost:8000/get-order-history/${userID}`);
        const orders = response.data.data; // Access the 'data' field

        const orderDetails = orders.map((order: any) => ({
          date: order.shippingDate,
          orderId: order.orderID,
          total: `${Number(order.total_price).toLocaleString()} VND`,
          items: order.cakes.map((cake: any) => ({
            name: cake.cakeName,
            price: `${Number(cake.total_price).toLocaleString()} VND`,
            size: transSize(cake.size),
            flavor: cake.flavor,
            quantity: cake.cakeQuantity,
            imgSrc: cake.img_url,
            id: cake.id, // Add cake ID for navigation
          })),
        }));

        return orderDetails;
      } catch (error) {
        console.log('Error fetching order history:', error);
        return [];
      }
    };

    const getOrderHistory = async () => {
      const userInfoString = sessionStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const orderHistories = await fetchOrderHistory(userInfo.userID);
        setOrderHistories(orderHistories);
      } else {
        console.log('No user info found');
      }
    };

    getOrderHistory();
  }, []);

  const handleCakeClick = (cakeId: string) => {
    console.log('cakeId:', cakeId);
    // navigate(`/cake/${cakeId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-primary-600">Lịch sử mua hàng</h1>

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
                  <img
                    src={item.imgSrc}
                    alt={item.name}
                    className="h-32 w-32 cursor-pointer rounded-lg object-cover"
                    onClick={() => handleCakeClick(item.id)}
                  />
                  <div className="ml-4 flex-1">
                    <h3
                      className="cursor-pointer text-lg font-semibold text-black hover:underline"
                      onClick={() => handleCakeClick(item.id)}
                    >
                      {item.name}
                    </h3>
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
    </div>
  );
};

export default OrderHistory;
