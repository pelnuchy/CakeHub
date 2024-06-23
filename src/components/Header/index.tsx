import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="w-full h-[100px] bg-black flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src={require('../../assets/logo/black-hub-logo.png')} alt="Logo" className="h-16 w-16" />
      </div>
      <div className="flex items-center bg-white rounded-2xl px-4 py-2">
        <input
          type="text"
          placeholder="Tìm kiếm bánh"
          className="w-full bg-transparent outline-none text-black focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-l-full px-3 py-1"
        />
        <FaSearch className="h-10 w-10 text-black mr-2 bg-white px-2 py-1" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <FaShoppingCart className="h-6 w-6 text-white" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
            2
          </span>
        </div>
        <FaUser className="h-6 w-6 text-white" />
      </div>
    </header>
  );
};

export default Header;
