import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment-timezone';
import { format } from 'date-fns';

// Status steps
const orderStatuses = ['Đã đặt hàng', 'Đang xử lý', 'Đang giao hàng', 'Đã nhận hàng'];

const translatOrderStatus = (status: string) => {
  switch (status) {
    case 'ordered':
      return 'Đã đặt hàng';
    case 'handling_1' || 'handling_2':
      return 'Đang xử lý';
    case 'delivering':
      return 'Đang giao hàng';
    case 'completed':
      return 'Đã nhận hàng';
    default:
      return 'Chưa đặt bánh';
  }
};
// Get progress percentage based on status
const getStatusProgress = (status: string) => {
  switch (status) {
    case 'Đã đặt hàng':
      return '3%';
    case 'Đang xử lý':
      return '33.5%';
    case 'Đang giao hàng':
      return '65%';
    case 'Đã nhận hàng':
      return '100%';
    default:
      return '0%';
  }
};
const transSize = (size: number) => {
  if (size === 10) return 'S';
  if (size === 16) return 'M';
  if (size === 24) return 'L';
};
const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, 'yyyy-MM-dd');
};

const formatTime = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, 'HH:mm');
};
// Purchase component
const Purchase = () => {
  const navigate = useNavigate();
  // State to manage orders
  const [orders, setOrders] = useState<any[]>([]);

  const userInfo = sessionStorage.getItem('userInfo');
  const sessionStorageData = userInfo ? JSON.parse(userInfo) : null;

  if (!sessionStorageData || sessionStorageData.role !== 'customer') {
    navigate('/login');
  }

  // Handle button click
  const handleReceivedClick = async (id: any) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: 'Đã nhận hàng' } : order)));
    await axios.put(`${process.env.REACT_APP_API_URL}/update-completed-order/${id}?time=${new Date().toISOString()}`);
  };

  useEffect(() => {
    const getOwnOrder = async () => {
      const userInfoString = sessionStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const ownOrderServer = await fetchOwnOrder(userInfo.userID);
        setOrders(ownOrderServer);
      } else {
        console.log('No user info found');
      }
    };
    getOwnOrder();
  }, []);
  const fetchOwnOrder = async (userID: string): Promise<any[]> => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-own-ordered/${userID}`);
      const orders = response.data.data; // Access the 'data' field
      console.log(orders);

      // Map through orders and use the already detailed cake information
      const orderDetails = orders.map((order: any) => {
        return {
          id: order._id,
          status: translatOrderStatus(order.status),
          address: order.shippingAddress,
          date: formatDate(moment.tz(`${order.shippingDate}`, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm')),
          time: formatTime(moment.tz(`${order.shippingDate}`, 'Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm')),
          total: `${Number(order.total_price).toLocaleString()} VND`,
          items: order.cakes.map((cake: any) => ({
            name: cake.cakeName,
            price: `${Number(cake.total_price).toLocaleString()} VND`,
            size: transSize(cake.size),
            flavor: cake.flavor,
            quantity: cake.cakeQuantity,
            imgSrc: cake.img_url,
          })),
        };
      });
      return orderDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-primary-600">Đơn hàng của tôi</h1>
      {orders.map((order) => (
        <div key={order.id} className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Đơn hàng #{order.id}</h2>
            {order.status === 'Đang giao hàng' ? (
              <button
                onClick={() => handleReceivedClick(order.id)}
                className="rounded-lg bg-primary-500 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-primary-600"
              >
                Đã nhận hàng
              </button>
            ) : (
              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${order.status === 'Đã nhận hàng' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
              >
                {order.status}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="col-span-2">
              {order.items.map((item: any, index: any) => (
                <div key={index} className="mb-6 flex border-b pb-4">
                  <img src={item.imgSrc} alt={item.name} className="h-32 w-32 rounded-lg object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-800">{item.price}</p>
                    <p className="text-gray-800">Kích thước: {item.size}</p>
                    <p className="text-gray-800">Vị: {item.flavor}</p>
                    <p className="text-gray-800">Số lượng: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800 mt-6">Địa chỉ giao hàng</h4>
              <p className="text-gray-800">{order.address}</p>
              <h4 className="font-semibold text-gray-800 mt-6">Ngày nhận bánh dự kiến</h4>
              <p className="text-gray-800">{order.date} {order.time}</p>
              <div className="mt-4">
                <p className="flex justify-between text-gray-800">
                  <span className="font-medium">Tổng tiền:</span>
                  <span className="font-semibold">{order.total}</span>
                </p>
                <p className="flex justify-between text-gray-800">
                  <span className="font-medium">Phí vận chuyển:</span>
                  <span className="font-semibold">{Number(50000).toLocaleString()}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-primary-500 transition-all duration-500"
                style={{ width: getStatusProgress(order.status) }}
              ></div>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-800">
              {orderStatuses.map((status, index) => (
                <span
                  key={index}
                  className={`relative ${order.status === status ? 'font-bold text-primary-500' : 'text-gray-800'}`}
                >
                  {status}
                  {order.status === status && (
                    <span className="absolute -bottom-2.5 left-1/2 h-2 w-2 -translate-x-1/2 transform rounded-full bg-primary-500"></span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default Purchase;
