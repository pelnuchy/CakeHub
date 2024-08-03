import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  const gotoCheckout = () => {
    navigate('/checkout');
  };
  const { cartItems, removeFromCart, updateCartItem } = useCart();
  const [notification, setNotification] = useState('');

  const handleQuantityChange = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      if (window.confirm('Số lượng bằng 0. Bạn có muốn xóa sản phẩm khỏi giỏ hàng không?')) {
        removeFromCart(itemId);
        setNotification('Sản phẩm đã được xóa khỏi giỏ hàng.');
      }
    } else {
      updateCartItem(itemId, { quantity });
    }
  };

  const handleSizeChange = (itemId: string, size: string) => {
    updateCartItem(itemId, { size });
  };

  const handleFlavorChange = (itemId: string, flavor: string) => {
    updateCartItem(itemId, { flavor });
  };

  const totalCakePrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 50000;
  const totalPrice = totalCakePrice + shippingFee;

  console.log(cartItems);
  const handleTitleOrImageClick = (itemId: string) => {
    const rootCakeID = itemId.split('-')[0];
    navigate(`/cake/${rootCakeID}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Giỏ hàng</h1>
      {notification && <div className="mb-4 text-green-500">{notification}</div>}
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
              <th className="p-4 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item: any, itemIndex: any) => (
              <tr key={itemIndex} className="border-b hover:bg-gray-100">
                <td className="flex items-center p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mr-4 h-16 w-16 cursor-pointer object-cover"
                    onClick={() => handleTitleOrImageClick(item.id)}
                  />
                  <span className="cursor-pointer hover:underline" onClick={() => handleTitleOrImageClick(item.id)}>
                    {item.name}
                  </span>
                </td>
                <td className="p-4">{item.price.toLocaleString()} VND</td>
                <td className="p-4">
                  <select
                    value={item.size}
                    onChange={(e) => handleSizeChange(item.id, e.target.value)}
                    className="rounded border px-2 py-1"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </td>
                <td className="p-4">
                  <select
                    value={item.flavor}
                    onChange={(e) => handleFlavorChange(item.id, e.target.value)}
                    className="rounded border px-2 py-1"
                  >
                    <option value="Chanh dây">Chanh dây</option>
                    <option value="Dâu tây">Dâu tây</option>
                    <option value="Socola">Socola</option>
                  </select>
                </td>
                <td className="p-4">
                  <div className="flex items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuantityChange(item.id, item.quantity - 1);
                      }}
                      className="mr-2 rounded bg-gray-300 px-2 py-1"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleQuantityChange(item.id, item.quantity + 1);
                      }}
                      className="ml-2 rounded bg-gray-300 px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4">{(item.total_price).toLocaleString()} VND</td>
                <td className="p-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item.id);
                    }}
                    className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-end">
        <div className="w-1/3 rounded-lg border p-4 shadow-md">
          <h2 className="mb-4 text-xl font-bold">Tổng đơn hàng</h2>
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
          <Button onClick={gotoCheckout} className="w-full">
            Đặt bánh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
