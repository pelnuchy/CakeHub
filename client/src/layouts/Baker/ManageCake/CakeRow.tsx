import React from 'react';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';
import { Cake } from '../../../utils/interfaces';

interface CakeRowProps {
  cake: Cake;
  isEditing: string | null;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSave: (
    id: string,
    cakeData: {
      img_url: string;
      name: string;
      occasion: string;
      description: string;
    },
  ) => void;
  handleChange: (id: string, field: string, value: string | number) => void;
}

const CakeRow: React.FC<CakeRowProps> = ({ cake, isEditing, handleEdit, handleDelete, handleSave, handleChange }) => {
  return (
    <tr key={cake.cakeID} className="odd:bg-white even:bg-gray-50">
      <td className="border-b px-4 py-3 text-center">
        {isEditing === cake.cakeID ? (
          <input
            type="text"
            value={cake.cakeID}
            onChange={(e) => handleChange(cake.cakeID, 'id', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          cake.cakeID
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === cake.cakeID ? (
          <input
            type="number"
            value={cake.img_url}
            onChange={(e) => handleChange(cake.cakeID, 'img_url', Number(e.target.value))}
            className="w-full border-b px-2"
          />
        ) : (
          <img src={cake.img_url} alt={cake.cakeName} className="h-12 w-12 object-cover" />
        )}
      </td>
      <td className="border-b px-4 py-3 text-left">
        {isEditing === cake.cakeID ? (
          <input
            type="text"
            value={cake.cakeName}
            onChange={(e) => handleChange(cake.cakeID, 'name', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          cake.cakeName
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === cake.cakeID ? (
          <input
            type="text"
            value={cake.occasion}
            onChange={(e) => handleChange(cake.cakeID, 'occasion', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          cake.occasion
        )}
      </td>
      <td className="border-b px-4 py-3 text-center">
        {isEditing === cake.cakeID ? (
          <textarea
            value={cake.description}
            onChange={(e) => handleChange(cake.cakeID, 'description', e.target.value)}
            className="w-full border-b px-2"
          />
        ) : (
          cake.description
        )}
      </td>
      <td className="flex justify-center space-x-2 px-4 py-3 text-center">
        {isEditing === cake.cakeID ? (
          <button
            onClick={() =>
              handleSave(cake.cakeID, {
                img_url: cake.img_url,
                name: cake.cakeName,
                occasion: cake.occasion,
                description: cake.description,
              })
            }
            className="text-blue-500 transition duration-300 hover:text-blue-700"
          >
            <FaSave className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => handleEdit(cake.cakeID)}
            className="text-blue-500 transition duration-300 hover:text-blue-700"
          >
            <FaEdit className="h-5 w-5" />
          </button>
        )}
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
