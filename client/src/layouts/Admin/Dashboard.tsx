import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import revenueImg from '../../assets/admin_dashboard_item/green.png';
import spendingImg from '../../assets/admin_dashboard_item/red.png';
import profitImg from '../../assets/admin_dashboard_item/yellow.png';
import { useNavigate } from 'react-router-dom';

interface DashboardCake {
  name: string;
  quantity: number;
  revenue: number;
  date: Date;
  image: string;
}

interface DashboardIngredient {
  name: string;
  quantity: number;
  unit: number;
  price: number;
  perQuantity: number;
  total: number;
  timeSold: Date;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [viewByYear, setViewByYear] = useState<boolean>(false);
  const [cakesSold, setCakesSold] = useState<DashboardCake[]>([]);
  const [ingredientsSold, setIngredientsSold] = useState<DashboardIngredient[]>([]);

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
      setIngredientsSold(listIngredientsSold);
    };

    getListCakesSold();
    getListIngredientsSold();
  }, [selectedDate]);

  const fetchListCakesSold = async (): Promise<DashboardCake[]> => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-list-cakes-sold`);
      const listCakesSold = response.data.data[0];
      if (listCakesSold && listCakesSold.cakes) {
        const cakeSoldDetail = listCakesSold.cakes.map((cake: any) => ({
          name: cake.cakeName,
          quantity: cake.cakeQuantity,
          revenue: cake.total_price,
          date: new Date(cake.completeTime),
          image: cake.img_url,
        }));
        return cakeSoldDetail;
      } else {
        console.log('Cakes list is not available.');
        return [];
      }
    } catch (error) {
      console.log('Error fetching list:', error);
      return [];
    }
  };

  const fetchIngredientsSold = async (): Promise<DashboardIngredient[]> => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-list-ingredients-sold`);
      const listIngredientsSold = response.data.data[0];
      if (listIngredientsSold && listIngredientsSold.ingredients_list) {
        const ingredientSoldDetail = listIngredientsSold.ingredients_list.map((ingredient: any) => ({
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          price: ingredient.price,
          perQuantity: ingredient.perQuantity,
          total: (ingredient.price * ingredient.quantity) / ingredient.perQuantity,
          timeSold: new Date(ingredient.time),
        }));
        return ingredientSoldDetail;
      } else {
        console.log('Ingredients list is not available.');
        return [];
      }
    } catch (error) {
      console.log('Error fetching list:', error);
      return [];
    }
  };

  const selectedYear = selectedDate ? selectedDate.getFullYear() : new Date().getFullYear();
  const selectedMonth = selectedDate ? selectedDate.getMonth() : new Date().getMonth();

  const filteredCakes = cakesSold.filter((cake) => {
    const cakeYear = cake.date.getFullYear();
    const cakeMonth = cake.date.getMonth();

    return cakeYear === selectedYear && (viewByYear || cakeMonth === selectedMonth);
  });

  const mergeCakes = (cakes: DashboardCake[], viewByYear: boolean, selectedYear: number, selectedMonth?: number) => {
    const mergedCakes: { [key: string]: DashboardCake } = {};

    cakes.forEach((cake) => {
      const cakeYear = cake.date.getFullYear();
      const cakeMonth = cake.date.getMonth();

      if (cakeYear === selectedYear && (viewByYear || cakeMonth === selectedMonth)) {
        if (!mergedCakes[cake.name]) {
          mergedCakes[cake.name] = {
            name: cake.name,
            quantity: 0,
            revenue: 0,
            date: cake.date,
            image: cake.image,
          };
        }

        mergedCakes[cake.name].quantity += cake.quantity;
        mergedCakes[cake.name].revenue += cake.revenue;
      }
    });

    return Object.values(mergedCakes);
  };
  const mergedCakes = mergeCakes(filteredCakes, viewByYear, selectedYear, selectedMonth);

  const mergeIngredients = (
    ingredients: DashboardIngredient[],
    viewByYear: boolean,
    selectedYear: number,
    selectedMonth?: number,
  ) => {
    const mergedIngredients: { [key: string]: DashboardIngredient } = {};

    ingredients.forEach((ingredient) => {
      const ingredientYear = ingredient.timeSold.getFullYear();
      const ingredientMonth = ingredient.timeSold.getMonth();

      if (ingredientYear === selectedYear && (viewByYear || ingredientMonth === selectedMonth)) {
        if (!mergedIngredients[ingredient.name]) {
          mergedIngredients[ingredient.name] = {
            name: ingredient.name,
            quantity: 0,
            unit: ingredient.unit,
            price: ingredient.price,
            perQuantity: ingredient.perQuantity,
            total: 0,
            timeSold: ingredient.timeSold, // Assuming the date should be preserved or used later
          };
        }

        mergedIngredients[ingredient.name].quantity += ingredient.quantity;
        mergedIngredients[ingredient.name].total += (ingredient.price * ingredient.quantity) / ingredient.perQuantity;
      }
    });

    return Object.values(mergedIngredients);
  };

  const filteredIngredients = ingredientsSold.filter((ingredient) => {
    if (!ingredient.timeSold) {
      return false;
    }
    const ingredientYear = new Date(ingredient.timeSold).getFullYear();
    const ingredientMonth = new Date(ingredient.timeSold).getMonth();
    return ingredientYear === selectedYear && (viewByYear || ingredientMonth === selectedMonth);
  });

  const mergedIngredients = mergeIngredients(filteredIngredients, viewByYear, selectedYear, selectedMonth);

  const formatDate = (date: Date) => {
    if (viewByYear) {
      return date.getFullYear().toString();
    } else {
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get month and pad with zero if necessary
      const year = date.getFullYear();
      return `${month}/${year}`;
    }
  };

  const totalRevenue = mergedCakes.reduce((total, cake) => total + cake.revenue, 0);
  const totalCost = mergedIngredients.reduce((total, ingredient) => total + ingredient.total, 0);
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
          {viewByYear ? 'Xem theo tháng' : 'Xem theo năm'}
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
              {mergedCakes.map((cake: DashboardCake, index: number) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{cake.name}</td>
                  <td className="border px-4 py-2">{cake.quantity}</td>
                  <td className="border px-4 py-2">{cake.revenue.toLocaleString()} VNĐ</td>
                  <td className="border px-4 py-2">{formatDate(cake.date)}</td>
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
              {mergedIngredients.map((ingredient, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{ingredient.name}</td>
                  <td className="border px-4 py-2">{ingredient.quantity + ' ' + ingredient.unit}</td>
                  <td className="border px-4 py-2">
                    {ingredient.price.toLocaleString() + '/' + ingredient.perQuantity + ingredient.unit}
                  </td>
                  <td className="border px-4 py-2">{ingredient.total.toLocaleString()} VNĐ</td>
                  <td className="border px-4 py-2">{formatDate(ingredient.timeSold)}</td>
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
