import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
const Checkout: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('13:00');
  const [orders, setOrders] = useState<any[]>([]);

  const { cartItems } = useCart();

  const totalCakePrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 50000;
  const totalPrice = totalCakePrice + shippingFee;

  const userInfoString = sessionStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDate = getFormattedDate(startDate);
    const checkoutInfo = { formattedDate, address, time };
    try {
      console.log('Checkout info:', checkoutInfo);
      const response = await axios.put(`http://localhost:8000/update-order-checkout/${userInfo.userID}`, checkoutInfo);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getFormattedDate = (date: Date | null) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  const fetchOrderCheckout = async (userID: string): Promise<any[]> => {
    try {
      const response = await axios.get(`http://localhost:8000/get-info-ordering/${userID}`);
      const orders = response.data.data; // Access the 'data' field
      //console.log('Fetched orders:', orders);

      // Map through orders and use the already detailed cake information
      const orderDetails = orders.map((order: any) => {
        return {
          orderId: order.orderID,
          total: `${Number(order.total_price).toLocaleString()} VND`,
          items: order.cakes.map((cake: any) => ({
            name: cake.cakeName,
            price: `${Number(cake.total_price).toLocaleString()} VND`,
            size: cake.size,
            flavor: cake.flavor,
            quantity: cake.cakeQuantity,
            imgSrc: cake.img_url,
          })),
        };
      });

      //console.log('Order details with cake info:', orderDetails);
      return orderDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };
  useEffect(() => {
    const getOwnOrder = async () => {
        const ownOrderServer = await fetchOrderCheckout(userInfo.userID);
        setOrders(ownOrderServer);
    };
    getOwnOrder();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">THÔNG TIN GIAO HÀNG</h1>
      <form className="rounded-lg bg-white p-8 shadow-lg" onSubmit={handleEdit}>
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
          <Button type = "submit" className="w-[50vh]">Thanh Toán</Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
