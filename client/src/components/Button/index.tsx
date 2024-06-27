import React from 'react';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      className={`rounded bg-gradient-to-t from-primary-500 to-yellow-500 px-6 py-3 font-semibold text-black hover:scale-105 hover:text-white ${className} transition duration-100 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
