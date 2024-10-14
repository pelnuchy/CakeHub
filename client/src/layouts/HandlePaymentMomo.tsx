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

  }, []);
  return (
    <div>
      <p>Đang xử lý thanh toán...</p>
    </div>
  );
};

export default HandlePayment;
