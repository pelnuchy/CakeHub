import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cakeImage1 from '../assets/cake/cake1.jpg';
import cakeImage2 from '../assets/cake/cake2.jpg';

const Checkout: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [address, setAddress] = useState('146 Võ Thị Sáu, Phường 8, Quận 3, TP.HCM');
  const [time, setTime] = useState('13:00');

  const items = [
    {
      id: 1,
      name: 'Bánh sinh nhật tím',
      price: 300000,
      size: 'M',
      flavor: 'Sô cô la',
      quantity: 1,
      image: cakeImage1,
    },
    {
      id: 2,
      name: 'Bánh sinh nhật dâu',
      price: 500000,
      size: 'M',
      flavor: 'Dâu tây',
      quantity: 1,
      image: cakeImage2,
    },
  ];

  const totalCakePrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 50000;
  const totalPrice = totalCakePrice + shippingFee;

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">THÔNG TIN GIAO HÀNG</h1>
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold">Thông tin đơn hàng</h2>
        <div className="mb-6">
          {items.map((item) => (
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
            <span>{totalPrice.toLocaleString()} VND</span>
          </div>
        </div>
        <h2 className="mb-6 text-2xl font-semibold">Địa điểm giao bánh và thời gian</h2>
        <div className="mb-6">
          <label className="mb-2 block font-semibold">Địa chỉ giao hàng*</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full rounded-lg border p-3 shadow-sm"
          />
        </div>
        <div className="mb-6 flex justify-between">
          <div className="mr-2 w-1/2">
            <label className="mb-2 block font-semibold">Ngày nhận hàng*</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date ? date : new Date())}
              className="w-full rounded-lg border p-3 shadow-sm"
            />
          </div>
          <div className="ml-2 w-1/2">
            <label className="mb-2 block font-semibold">Giờ*</label>
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
        <button className="w-full rounded-lg bg-yellow-500 py-3 font-bold text-black shadow-md hover:bg-yellow-600">
          Thanh Toán
        </button>
      </div>
    </div>
  );
};

export default Checkout;
