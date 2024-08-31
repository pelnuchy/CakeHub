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
  const [sumOfCake, setSumOfCake] = useState<boolean[]>([]);
  const [sumOfCakeToHandleOrder, setSumOfCakeToHandleOrder] = useState<number[]>([]);
  const [limitCake, setLimitCake] = useState<number>(0);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const combineDateAndTime = (date: Date | null, time: string): Date | null => {
    if (!date) return null;

    const [hours, minutes] = time.split(':').map(Number);
    const combinedDate = new Date(date);

    combinedDate.setHours(hours);
    combinedDate.setMinutes(minutes);
    combinedDate.setSeconds(0);
    combinedDate.setMilliseconds(0);

    return combinedDate;
  };

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
  if (!userInfo || userInfo.role !== 'customer') {
    navigate('/login');
  }

  const onSuccessPaypal = async (details: any, data: any) => {
    if (details.status === 'COMPLETED') {
      const combinedDate = combineDateAndTime(startDate, time);
      const totalCakeQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      const orderDetail = {
        shippingDate: combinedDate,
        shippingAddress: address,
        paymentTime: details.update_time,
        total_price: totalPrice,
        status: 'ordered',
        user_id: userInfo.userID,
        s_cakeQuantity: totalCakeQuantity,
        cakes: cartItems.map((item) => ({
          cake_id: item.id,
          cakeMessage: item.message,
          cakeQuantity: item.quantity,
          total_price: item.price * item.quantity,
        })),
      };

      try {
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

  const fetchSumCakeOrder = async (userID: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/check-num-cake-order/${userID}?dateSelected=${startDate}`,
      );
      const sumOfCake = response.data.data;
      return sumOfCake;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchLimitCakes = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/limit-cakes-baseon-bake`);
      const limitCake = response.data.limitCake;
      return limitCake;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const checkCakeAvailability = (sumOfCakeToHandleOrder: number[], cartItems: any[], limitCake: number) => {
    const hours = [13, 14, 15, 16, 17, 18];
    return hours.map((hour, index) => {
      return limitCake - sumOfCakeToHandleOrder[index];
    });
  };

  const selectedHour = parseInt(time.split(':')[0], 10);
  const availability = checkCakeAvailability(sumOfCakeToHandleOrder, cartItems, limitCake);

  // Tính tổng số lượng bánh trong giỏ hàng
  const totalCakesInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Kiểm tra số lượng bánh trong giỏ hàng so với giá trị availability của khung giờ đã chọn
  const canCheckout = totalCakesInCart <= availability[selectedHour - 13];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // lấy giới hạn bánh được đặt trong khung giờ
        const limitCakeDB: number = await fetchLimitCakes();
        setLimitCake(limitCakeDB);
        // lấy số lượng bánh đã đặt trong ngày qua 6 khung giờ
        const sumOfCakeDB: number[] = await fetchSumCakeOrder(userInfo.userID);
        setSumOfCakeToHandleOrder(sumOfCakeDB);
        // chuyển số lượng bánh đã đặt trong ngày qua 6 khung giờ thành boolean
        const changeNumToBoolean: boolean[] = sumOfCakeDB.map((quantity: number) => (quantity <= limitCake ? true : false));
        setSumOfCake(changeNumToBoolean);

        if (!window.paypal) {
          addPaypalScript();
        } else {
          setSdkReady(true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [sdkReady, startDate]);

  const timeSlots = ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  // Hàm kiểm tra xem khung giờ hiện tại đã qua hay chưa
  const isTimeSlotDisabled = (slot:string) => {
    const now = new Date();
    const selectedDate = startDate ? new Date(startDate) : new Date();
    const isToday = now.toDateString() === selectedDate.toDateString();
    const [hour, minutes] = slot.split(':').map(Number);
    const isPast = hour < now.getHours() || (hour === now.getHours() && minutes <= now.getMinutes());
    return isToday && isPast;
  };
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
              <div className="font-bold">{item.total_price.toLocaleString()} VND</div>
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
              minDate={new Date()} // Ngăn chọn ngày trước ngày hiện tại
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
              {timeSlots.map((slot, index) => (
                <option key={slot} value={slot} disabled={isTimeSlotDisabled(slot)||!sumOfCake[index]}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          {sdkReady ? (
            cartItems.length > 0 ? (
              canCheckout ? (
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
                <div className="text-red-500">
                  Số lượng bánh trong giỏ hàng là {totalCakesInCart} vượt quá số lượng bánh còn lại có thể đặt trong khung giờ {time} giờ.<br />
                  Số lượng bánh còn lại có thể đặt: {availability[selectedHour - 13]}.
                </div>
              )
            ) : (
              <div className="text-red-500">Giỏ hàng của bạn đang trống.</div>
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
