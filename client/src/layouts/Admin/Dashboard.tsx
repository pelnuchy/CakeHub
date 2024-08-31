import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import revenueImg from '../../assets/admin_dashboard_item/green.png';
import spendingImg from '../../assets/admin_dashboard_item/red.png';
import profitImg from '../../assets/admin_dashboard_item/yellow.png';
import { useNavigate } from 'react-router-dom';
import { Ingredient, Product } from '../../utils/interfaces';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [viewByYear, setViewByYear] = useState<boolean>(false);
  const [cakesSold, setCakesSold] = useState<Product[]>([]);
  const [ingredientsSold, setIngredientsSold] = useState<Ingredient[]>([]);

  const userInfo = sessionStorage.getItem('userInfo');
  const sessionStorageData = userInfo ? JSON.parse(userInfo) : null;

  if (!sessionStorageData || sessionStorageData.role !== 'admin') {
    navigate('/login');
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleYearToggle = () => {
    setViewByYear(!viewByYear);
  };

  useEffect(() => {
    const getListCakesSold = async () => {
      const listCakesSold = await fetchListCakesSold();
      setCakesSold(listCakesSold);
    };

    const getListIngredientsSold = async () => {
      const listIngredientsSold = await fetchIngredientsSold();
      console.log(listIngredientsSold);
      setIngredientsSold(listIngredientsSold);
    };

    getListCakesSold();
    getListIngredientsSold();
  }, [selectedDate]);

  const fetchListCakesSold = async (): Promise<Product[]> => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-list-cakes-sold`);
      const listCakesSold = response.data.data;

      const cakeSoldDetail = listCakesSold.flatMap((listCakesSold: any) =>
        listCakesSold.cakes.map((cake: any) => ({
          name: cake.cakeName,
          quantity: cake.cakeQuantity,
          revenue: cake.total_price,
          date: new Date(cake.completeTime),
          image: cake.img_url,
        })),
      );

      return cakeSoldDetail;
    } catch (error) {
      console.log('Error fetching list:', error);
      return [];
    }
  };

  const fetchIngredientsSold = async (): Promise<Ingredient[]> => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-list-ingredients-sold`);
      const listIngredientsSold = response.data.data;

      const ingredientSoldDetail = listIngredientsSold.flatMap((listIngredientsSold: any) =>
        listIngredientsSold.ingredients_list.map((ingredient: any) => ({
          name: ingredient.name,
          quantity: ingredient.quantity.toString() + ' ' + ingredient.unit,
          price: ingredient.price.toString(),
          total: ((ingredient.price * ingredient.quantity) / ingredient.perQuantity).toString(),
          date: new Date(ingredient.time),
        })),
      );

      return ingredientSoldDetail;
    } catch (error) {
      console.log('Error fetching list:', error);
      return [];
    }
  };

  // Ensure selectedDate is not null
  const selectedYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();
  const selectedMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();

  const filteredProducts = cakesSold.filter((product) => {
    const productYear = product.date.getFullYear();
    const productMonth = product.date.getMonth();
    return productYear === selectedYear && (viewByYear || productMonth === selectedMonth);
  });

  const aggregatedProducts = viewByYear
    ? filteredProducts.reduce((acc, product) => {
        const existingProduct = acc.find((p) => p.name === product.name);
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
          existingProduct.revenue = (parseFloat(existingProduct.revenue) + parseFloat(product.revenue)).toFixed(0); // Remove decimal
        } else {
          acc.push({ ...product });
        }
        return acc;
      }, [] as Product[])
    : filteredProducts;

  const filteredIngredients = ingredientsSold.filter((ingredient) => {
    const ingredientYear = Number(ingredient.expiryDate);
    const ingredientMonth = Number(ingredient.expiryDate);
    return ingredientYear === selectedYear && (viewByYear || ingredientMonth === selectedMonth);
  });

  const formatDate = (date: Date) => {
    return viewByYear
      ? date.getFullYear()
      : date.toLocaleDateString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
  };

  const totalRevenue = aggregatedProducts.reduce((total, product) => total + Number(product.revenue), 0);
  const totalCost = filteredIngredients.reduce((total, ingredient) => total + ingredient.price, 0);
  const totalProfit = totalRevenue - totalCost;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-4 text-left shadow">
          <h2 className="mb-2 ml-4 text-xl font-bold">Tổng doanh thu</h2>
          <p className="ml-4 text-3xl font-semibold text-green-500">{totalRevenue.toLocaleString()} VNĐ</p>
          <div className="h-26 overflow-hidden">
            <img src={revenueImg} alt="revenue_img" className="h-21 w-full object-cover" />
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 text-left shadow">
          <h2 className="mb-2 ml-4 text-xl font-bold">Tổng chi tiêu</h2>
          <p className="ml-4 text-3xl font-semibold text-red-500">{totalCost.toLocaleString()} VNĐ</p>
          <div className="h-24">
            <img src={spendingImg} alt="spending_img" className="h-h1 mt-4 w-full object-cover" />
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 text-left shadow">
          <h2 className="mb-2 ml-4 text-xl font-bold">Tổng lợi nhuận</h2>
          <p className="ml-4 text-3xl font-semibold text-yellow-500">{totalProfit.toLocaleString()} VNĐ</p>
          <div className="h-26 overflow-hidden">
            <img src={profitImg} alt="profit_img" className="h-21 w-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={handleYearToggle}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition-transform duration-200 hover:bg-blue-600 hover:shadow-lg"
        >
          {viewByYear ? 'View by Month' : 'View by Year'}
        </button>
        <div className="flex w-1/3 items-center">
          <span className="mr-2 text-gray-500 hover:text-blue-600">📅</span>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat={viewByYear ? 'yyyy' : 'MMMM yyyy'}
            showMonthYearPicker={!viewByYear}
            showYearPicker={viewByYear}
            className="w-full rounded-lg border border-blue-300 p-3 shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">Danh sách sản phẩm đã bán</h2>
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="border px-4 py-2">STT</th>
                <th className="border px-4 py-2">Mẫu bánh</th>
                <th className="border px-4 py-2">Số lượng</th>
                <th className="border px-4 py-2">Thành tiền</th>
                <th className="border px-4 py-2">Thời điểm</th>
              </tr>
            </thead>
            <tbody>
              {aggregatedProducts.map((product, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2">{Number(product.revenue).toLocaleString()} VNĐ</td>
                  <td className="border px-4 py-2">{formatDate(product.date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-xl font-bold">Danh sách nguyên liệu đã chi tiêu</h2>
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="border px-4 py-2">STT</th>
                <th className="border px-4 py-2">Nguyên liệu</th>
                <th className="border px-4 py-2">Số lượng</th>
                <th className="border px-4 py-2">Đơn giá</th>
                <th className="border px-4 py-2">Thành tiền</th>
                <th className="border px-4 py-2">Thời điểm</th>
              </tr>
            </thead>
            <tbody>
              {filteredIngredients.map((ingredient, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{ingredient.name}</td>
                  <td className="border px-4 py-2">{ingredient.quantity}</td>
                  <td className="border px-4 py-2">{Number(ingredient.price).toLocaleString()} VNĐ</td>
                  <td className="border px-4 py-2">{Number(ingredient.price).toLocaleString()} VNĐ</td>
                  <td className="border px-4 py-2">{formatDate(new Date(ingredient.expiryDate))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
