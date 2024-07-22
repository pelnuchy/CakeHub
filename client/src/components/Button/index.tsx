import React from 'react';

type ButtonProps = {
  type?: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ type, className, onClick, children }) => {
  return (
    <button
      type="button"
      className={`rounded bg-gradient-to-t from-primary-500 to-yellow-500 px-6 py-3 font-semibold text-black hover:scale-105 hover:text-white ${className} transition duration-100 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
