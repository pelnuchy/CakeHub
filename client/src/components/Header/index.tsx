import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaList,
  FaHistory,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

export const useUser = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState<{ username: string; avatar: string | null } | null>(null);

  useEffect(() => {
    try {
      const userInfoString = sessionStorage.getItem('userInfo');
      if (userInfoString) {
        const user = JSON.parse(userInfoString);
        setUserLoggedIn(true);
        setUserInfo(user);
      } else {
        setUserLoggedIn(false);
        setUserInfo(null);
      }
    } catch (error) {
      console.error('Failed to parse user info from sessionStorage', error);
      setUserLoggedIn(false);
      setUserInfo(null);
    }
  }, []);

  return { userLoggedIn, userInfo, setUserLoggedIn, setUserInfo };
};

const DropdownMenu: React.FC<{
  userLoggedIn: boolean;
  userInfo: { username: string; avatar: string | null } | null;
  onLogout: () => void;
  onClose: () => void;
}> = ({ userLoggedIn, userInfo, onLogout, onClose }) => {
  return (
    <div className="absolute right-0 top-8 z-50 mt-2 w-56 rounded-lg bg-primary-50 text-black opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ease-in-out">
      <ul className="py-2">
        {userLoggedIn && userInfo ? (
          <>
            <li className="flex items-center px-4 py-2">
              {userInfo.avatar ? (
                <img src={userInfo.avatar} alt="Avatar" className="mr-2 h-8 w-8 rounded-full" />
              ) : (
                <FaUser className="mr-2 h-8 w-8 rounded-full text-gray-700" />
              )}
              <span>{userInfo.username}</span>
            </li>
            <hr className="border-gray-600" />
            <li>
              <Link
                to="/purchase"
                className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                onClick={onClose}
              >
                <FaList className="mr-2 text-gray-700" /> Đơn hàng của tôi
              </Link>
            </li>
            <li>
              <Link
                to="/purchased"
                className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                onClick={onClose}
              >
                <FaHistory className="mr-2 text-gray-700" /> Lịch sử mua hàng
              </Link>
            </li>
            <li>
              <button
                onClick={onLogout}
                className="flex w-full items-center px-4 py-2 text-left transition-colors duration-300 hover:bg-gray-200"
              >
                <FaSignOutAlt className="mr-2 text-gray-700" /> Đăng xuất
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                onClick={onClose}
              >
                <FaSignInAlt className="mr-2 text-gray-700" /> Đăng nhập
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                onClick={onClose}
              >
                <FaUserPlus className="mr-2 text-gray-700" /> Đăng ký
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const { userLoggedIn, userInfo, setUserLoggedIn, setUserInfo } = useUser(); // Add setters if they are exposed
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    sessionStorage.clear();
    setUserLoggedIn(false);
    setUserInfo(null);
    setDropdownOpen(false);
    navigate('/');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[100px] items-center bg-black px-16">
      <div className="flex flex-auto items-center">
        <Link to="/" className="cursor-pointer">
          <img src={'../../assets/logo/black-hub-logo.png'} alt="Logo" className="h-16 w-16" />
        </Link>
      </div>
      <div className="flex flex-auto items-center justify-center">
        <div className="flex h-10 w-full items-center rounded-xl bg-white px-4 py-1">
          <input
            type="text"
            placeholder="Tìm kiếm bánh"
            className="w-full rounded-l-full bg-transparent px-2 py-1 text-black outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          />
          <FaSearch className="mr-2 h-8 w-8 transform bg-white p-1 text-black transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
      </div>
      <div className="flex flex-auto items-center justify-end space-x-4">
        <Link to={userLoggedIn ? '/cart' : '/login'} className="relative">
          <FaShoppingCart className="h-6 w-6 transform cursor-pointer text-white transition-transform duration-300 ease-in-out hover:scale-110" />
          {userLoggedIn && cartItems.length > 0 && (
            <span className="absolute right-0 top-0 -mr-2 -mt-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs font-bold leading-none text-red-100">
              {cartItems.length}
            </span>
          )}
        </Link>
        <div className="relative" ref={dropdownRef}>
          <FaUser
            className="h-6 w-6 transform cursor-pointer text-white transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <DropdownMenu
              userLoggedIn={userLoggedIn}
              userInfo={userInfo}
              onLogout={handleLogout}
              onClose={() => setDropdownOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
