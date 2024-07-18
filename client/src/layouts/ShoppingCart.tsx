// ShoppingCart.tsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useCart();

  const totalCakePrice = cartItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const shippingFee = 50000;
  const totalPrice = totalCakePrice + shippingFee;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Giỏ hàng</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Sản phẩm</th>
              <th className="p-4 text-left">Đơn giá</th>
              <th className="p-4 text-left">Kích thước</th>
              <th className="p-4 text-left">Nhân bánh</th>
              <th className="p-4 text-left">Số lượng</th>
              <th className="p-4 text-left">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="flex items-center p-4">
                  <img src={item.image} alt={item.name} className="mr-4 h-16 w-16 object-cover" />
                  <span>{item.name}</span>
                </td>
                <td className="p-4">{item.price.toLocaleString()} VND</td>
                <td className="p-4">
                  <select className="rounded border px-2 py-1">
                    <option>{item.size}</option>
                  </select>
                </td>
                <td className="p-4">
                  <select className="rounded border px-2 py-1">
                    <option>{item.flavor}</option>
                  </select>
                </td>
                <td className="p-4">
                  <select className="rounded border px-2 py-1">
                    <option>{String(item.quantity).padStart(2, '0')}</option>
                  </select>
                </td>
                <td className="p-4">{(Number(item.price) * item.quantity).toLocaleString()} VND</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-end">
        <div className="w-1/3 rounded-lg border p-4 shadow-md">
          <h2 className="mb-4 text-xl font-bold">Tổng giá hàng</h2>
          <div className="mb-2 flex justify-between">
            <span>Tổng tiền bánh:</span>
            <span>{totalCakePrice.toLocaleString()} VND</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Phí vận chuyển:</span>
            <span>{shippingFee.toLocaleString()} VND</span>
          </div>
          <div className="mb-4 flex justify-between font-bold">
            <span>Tổng tiền thanh toán:</span>
            <span>{totalPrice.toLocaleString()} VND</span>
          </div>
          <button className="w-full rounded-lg bg-yellow-500 py-2 font-semibold text-black hover:bg-yellow-600">
            Đặt bánh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
