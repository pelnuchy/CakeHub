import { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import usePageLoading from './hooks/usePageLoading';

const Homepage = lazy(() => import('./pages/Home'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Anniversary = lazy(() => import('./pages/CakeOccasion/Anniversary'));
const Birthday = lazy(() => import('./pages/CakeOccasion/Birthday'));
const Custom = lazy(() => import('./pages/CakeOccasion/Custom'));
const Christmas = lazy(() => import('./pages/CakeOccasion/Christmas'));
const CakeDetail = lazy(() => import('./pages/CakeDetail'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const FAQPage = lazy(() => import('./pages/FAQ'));
const NotFoundPage = lazy(() => import('./pages/404'));
const ShoppingCart = lazy(() => import('./pages/Cart'));
const Purchase = lazy(() => import('./pages/Purchase'));
const HistoryPurchase = lazy(() => import('./pages/HistoryPurchase'));
const AdminDashBoard = lazy(() => import('./pages/Admin/Dashboard'));
const AdminDeviceManagement = lazy(() => import('./pages/Admin/DeviceManagement'));
const BakerDashboard = lazy(() => import('./pages/Baker/Dashboard'));
const BakingSession = lazy(() => import('./pages/Baker/BakingSession'));
const SearchResult = lazy(() => import('./pages/SearchResult'));
const BakerIngredient = lazy(() => import('./pages/Baker/IngredientManagement'));
const SecurityPolicy = lazy(() => import('./pages/SecurityPolicy'));
const TermsofService = lazy(() => import('./pages/ToS'));


export default function App() {
  const loading = usePageLoading();

  return (
    <div className="h-screen">
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/FAQ" element={<FAQPage />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/admin/dashboard" element={<AdminDashBoard />} />
          <Route path="/admin/devicemanagement" element={<AdminDeviceManagement />} />
          <Route path="/baker/dashboard" element={<BakerDashboard />} />
          <Route path="/baker/bakingsession" element={<BakingSession />} />
          <Route path="/baker/ingredient" element={<BakerIngredient />} />
          <Route path="/search/:keyword" element={<SearchResult />} />
          <Route path="/securitypolicy" element={<SecurityPolicy/>}/>
          <Route path="/ToS" element={<TermsofService/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}
