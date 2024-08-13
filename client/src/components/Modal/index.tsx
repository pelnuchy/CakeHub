import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <span className="sr-only">Close</span>
          &#10005;
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
