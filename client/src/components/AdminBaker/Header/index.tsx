import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    setUserLoggedIn(false);
    setDropdownOpen(false);
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
    <header className="fixed left-0 right-0 top-0 z-50 flex h-[100px] items-center bg-black px-16 shadow-md">
      <div className="flex flex-auto items-center">
        <Link to="/" className="cursor-pointer">
          <img src={'../../assets/logo/black-hub-logo.png'} alt="Logo" className="h-16 w-16" />
        </Link>
      </div>
      <div className="flex flex-auto items-center justify-end space-x-4">
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
