import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useNavigate()
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    sessionStorage.clear();
    setUserLoggedIn(false);
    setDropdownOpen(false);
    navigate('/');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    const userInfo = sessionStorage.getItem('userInfo');
    setUserLoggedIn(userInfo ? JSON.parse(userInfo) : null);
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
    <header className="flex h-[100px] w-full items-center bg-black px-16">
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
        <Link to="/cart" className="relative">
          <FaShoppingCart className="h-6 w-6 transform cursor-pointer text-white transition-transform duration-300 ease-in-out hover:scale-110" />
          {cartItems.length > 0 && (
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
            <div className="absolute right-0 top-8 mt-2 w-56 rounded-lg bg-primary-50 text-black opacity-100 shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ease-in-out">
              <ul className="py-2">
                {!userLoggedIn ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                      >
                        <FaSignInAlt className="mr-2 text-gray-700" /> Đăng nhập
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                      >
                        <FaUserPlus className="mr-2 text-gray-700" /> Đăng ký
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/purchase"
                        className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                      >
                        <FaList className="mr-2 text-gray-700" /> Đơn hàng của tôi
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/purchased"
                        className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-200"
                      >
                        <FaHistory className="mr-2 text-gray-700" /> Lịch sử mua hàng
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center px-4 py-2 text-left transition-colors duration-300 hover:bg-gray-200"
                      >
                        <FaSignOutAlt className="mr-2 text-gray-700" /> Đăng xuất
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
