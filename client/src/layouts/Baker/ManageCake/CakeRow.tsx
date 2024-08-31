import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Cake } from '../../../utils/interfaces';

interface CakeRowProps {
  cake: Cake;
  handleDelete: (id: string) => void;
}

const CakeRow: React.FC<CakeRowProps> = ({ cake, handleDelete }) => {
  return (
    <tr key={cake.cakeID} className="odd:bg-white even:bg-gray-50">
      <td className="border-b px-4 py-3 text-center">{cake.cakeID}</td>
      <td className="border-b px-4 py-3 text-center">
        <img src={cake.img_url} alt={cake.cakeName} className="h-12 w-12 object-cover" />
      </td>
      <td className="border-b px-4 py-3 text-left">{cake.cakeName}</td>
      <td className="border-b px-4 py-3 text-center">{cake.occasion}</td>
      <td className="border-b px-4 py-3 text-center">{cake.description}</td>
      <td className="flex justify-center space-x-2 px-4 py-3 text-center">
        <button
          onClick={() => handleDelete(cake.cakeID)}
          className="text-red-500 transition duration-300 hover:text-red-700"
        >
          <FaTrashAlt className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

export default CakeRow;
