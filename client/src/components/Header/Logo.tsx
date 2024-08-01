import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="flex flex-auto items-center">
    <Link to="/" className="cursor-pointer">
      <img src={'../../assets/logo/black-hub-logo.png'} alt="Logo" className="h-16 w-16" />
    </Link>
  </div>
);

export default Logo;
