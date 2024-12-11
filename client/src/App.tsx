import { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import usePageLoading from './hooks/usePageLoading';
import Homepage from './pages/Home';
import Checkout from './pages/Checkout';
import Anniversary from './pages/CakeOccasion/Anniversary';
import Birthday from './pages/CakeOccasion/Birthday';
import Custom from './pages/CakeOccasion/Custom';
import Christmas from './pages/CakeOccasion/Christmas';
import Trending from './pages/CakeOccasion/Trending';
import CakeDetail from './pages/CakeDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQPage from './pages/FAQ';
import NotFoundPage from './pages/404';
import HandlePaymentMomo from './pages/HandlePaymentMomo';
import ShoppingCart from './pages/Cart';
import Purchase from './pages/Purchase';
import HistoryPurchase from './pages/HistoryPurchase';
import AdminDashBoard from './pages/Admin/Dashboard';
import AdminDeviceManagement from './pages/Admin/DeviceManagement';
import BakerDashboard from './pages/Baker/Dashboard';
import BakingSession from './pages/Baker/BakingSession';
import BakerCake from './pages/Baker/CakeManagement';
import SearchResult from './pages/SearchResult';
import BakerIngredient from './pages/Baker/IngredientManagement';
import SecurityPolicy from './pages/SecurityPolicy';
import TermsOfService from './pages/ToS';
import PublicRoute from './components/Routes/PublicRoute';

export default function App() {
  const loading = usePageLoading();

  return (
    <div className="max-h-fit">
      {loading && <Preloader />}
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cake/:id" element={<CakeDetail />} />
          <Route path="/anniversary" element={<Anniversary />} />
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/christmas" element={<Christmas />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/purchased" element={<HistoryPurchase />} />
          <Route path="/handlepayment" element={<HandlePaymentMomo />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/admin/devicemanagement" element={<AdminDeviceManagement />} />
          <Route path="/baker/dashboard" element={<BakerDashboard />} />
          <Route path="/baker/bakingsession" element={<BakingSession />} />
          <Route path="/baker/ingredient" element={<BakerIngredient />} />
          <Route path="/baker/cake" element={<BakerCake />} />
          <Route path="/search/:keyword" element={<SearchResult />} />
          <Route path="/securitypolicy" element={<SecurityPolicy />} />
          <Route path="/ToS" element={<TermsOfService />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Suspense>
    </div>
  );
}
