import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const HandlePayment = () => {
  const navigate = useNavigate();

  const userInfoString = sessionStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  if (!userInfo || userInfo.role !== 'customer') {
    navigate('/login');
  }

  const location = useLocation();

  useEffect(() => {
    const checkTransactionStatus = async (orderId: string) => {
      let orderDetail = JSON.parse(localStorage.getItem('orderDetail') || '{}');
      console.log('Order detail:', orderDetail);
      try {
        const startTime = Date.now();
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/transactionStatusMomo/${orderId}`);
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        const responseTimeISO = new Date(responseTime).toISOString();

        // Thêm key paymentTime vào orderDetail
        orderDetail = {
          ...orderDetail,
          paymentTime: responseTimeISO,
        };

        if (response.data.data.resultCode === 0) {
          console.log('Transaction successful');
          await axios.post(`${process.env.REACT_APP_API_URL}/create-order`, { orderDetail });
          await axios.put(`${process.env.REACT_APP_API_URL}/remove-all-cakes-from-cart/${userInfo.userID}/cart`);
          //delay 5 seconds
          await new Promise((resolve) => setTimeout(resolve, 5000));
          navigate('/purchase');
        } else {
          navigate('/checkout');
        }
      } catch (error) {
        console.error('Error checking transaction status:', error);
      }
    };
    const queryParams = new URLSearchParams(location.search);
    const orderId = queryParams.get('orderId');
    if (orderId) {
      console.log(`Order ID found in URL: ${orderId}`);
      // Thực hiện các hành động kiểm tra trạng thái giao dịch
      checkTransactionStatus(orderId);
    } else {
      console.log('No Order ID found in URL');
    }
  }, [location.search, navigate, userInfo.userID]);
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex items-center space-x-2">
        <svg
          className="h-5 w-5 animate-spin text-primary-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        </svg>

        <p className="text-lg font-medium text-gray-800">Đang xử lý thanh toán...</p>
      </div>
    </div>
  );
};

export default HandlePayment;
