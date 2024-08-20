import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('13:00');
  const [sdkReady, setSdkReady] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalCakePrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  let totalPrice = 0;
  let shippingFee = 0;
  if (totalCakePrice === 0) {
    shippingFee = 0;
    totalPrice = 0;
  } else {
    shippingFee = 50000;
    totalPrice = totalCakePrice + shippingFee;
  }
  const userInfoString = sessionStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  // const getFormattedDate = (date: Date | null) => {
  //   if (!date) return '';
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  //   const year = date.getFullYear();
  //   return `${year}-${month}-${day}`;
  // };

  const onSuccessPaypal = async (details: any, data: any) => {
    //console.log('details, data', details, data);
    if (details.status === 'COMPLETED') {
      const orderDetail = {
        orderID: 'O002',
        shippingDate: startDate,
        shippingAddress: address,
        paymentTime: details.update_time,
        total_price: totalPrice,
        status: 'ordered',
        user_id: userInfo.userID,
        s_cakeQuantity: cartItems.length,
        cakes: cartItems.map((item) => ({
          cake_id: item.id,
          cakeMessage: item.message,
          cakeQuantity: item.quantity,
          total_price: item.price * item.quantity,
        })),
      };

      try {
        console.log('addPaypalScript', userInfo.userID);
        await axios.post(`${process.env.REACT_APP_API_URL}/create-order`, { orderDetail });
        await axios.put(`${process.env.REACT_APP_API_URL}/remove-all-cakes-from-cart/${userInfo.userID}/cart`);
        navigate('/purchase');
        window.location.reload();
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Transaction failed');
    }
  };

  const addPaypalScript = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/payment/config`);
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${res.data.data}&disable-funding=credit,card`;
      script.async = true;
      script.onload = () => setSdkReady(true);
      script.onerror = () => setSdkReady(false);
      document.body.appendChild(script);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    if (!window.paypal) {
      addPaypalScript();
    } else {
      setSdkReady(true);
    }
  }, [sdkReady]);

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">THÔNG TIN GIAO HÀNG</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold">Thông tin đơn hàng</h2>
        <div className="mb-6 bg-gray-500">
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 flex items-center justify-between rounded-lg bg-gray-50 p-4 shadow-sm">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="mr-4 h-20 w-20 rounded-lg object-cover" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Kích thước: {item.size}</p>
                  <p>Vị: {item.flavor}</p>
                  <p>Số lượng: {item.quantity}</p>
                  {item.message && <p>Lời chúc: {item.message}</p>}
                </div>
              </div>
              <div className="font-bold">{item.price.toLocaleString()} VND</div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 pt-4">
          <div className="mb-2 flex justify-between">
            <span className="font-semibold">Tổng tiền bánh:</span>
            <span className="font-semibold">{totalCakePrice.toLocaleString()} VND</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span className="font-semibold">Phí vận chuyển:</span>
            <span className="font-semibold">{shippingFee.toLocaleString()} VND</span>
          </div>
          <div className="mb-6 flex justify-between text-lg font-bold">
            <span>Tổng tiền thanh toán:</span>
            <span className="text-red-500">{totalPrice.toLocaleString()} VND</span>
          </div>
        </div>
        <h2 className="mb-6 text-2xl font-semibold">Địa điểm giao bánh và thời gian</h2>
        <div className="mb-6">
          <label className="mb-2 block font-semibold">
            Địa chỉ giao hàng<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full rounded-lg border p-3 shadow-sm"
          />
        </div>
        <div className="mb-6 flex justify-between">
          <div className="mr-2 w-1/2">
            <label className="mb-2 block font-semibold">
              Ngày nhận hàng<span className="text-red-500">*</span>
            </label>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date ? date : new Date())}
              className="w-full rounded-lg border p-3 shadow-sm"
            />
          </div>
          <div className="ml-2 w-1/2">
            <label className="mb-2 block font-semibold">
              Giờ<span className="text-red-500">*</span>
            </label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full rounded-lg border p-3 shadow-sm"
            >
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          {sdkReady ? (
            address ? (
              <div className="w-full max-w-[50vh] pt-8">
                <PayPalButton
                  amount={totalPrice / 25000}
                  onSuccess={onSuccessPaypal}
                  onError={(err: any) => {
                    alert('Transaction error: ' + err);
                  }}
                />
              </div>
            ) : (
              <div className="text-red-500">Vui lòng điền địa chỉ giao hàng để thanh toán.</div>
            )
          ) : (
            <div>Đang tải...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
