import { FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => {
  return (
    <header className="w-full h-[100px] bg-black flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src={require('../../assets/logo/black-hub-logo.png')} alt="Logo" className="h-16 w-16" />
      </div>
      <div className="flex-1 mx-4">
        <input type="text" placeholder="Tìm kiếm bánh" className="w-full h-10 px-4 rounded-full" />
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
