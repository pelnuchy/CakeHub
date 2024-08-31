import React from 'react';
import CakeRow from './CakeRow'; // Assuming you have a CakeRow component
import { Cake } from '../../../utils/interfaces';

interface CakeTableProps {
  cakes: Cake[];
  handleDelete: (id: string) => void;
}

const CakeTable: React.FC<CakeTableProps> = ({ cakes, handleDelete }) => {
  return (
    <table className="min-w-full border border-gray-300 bg-white">
      <thead>
        <tr className="bg-gray-100">
          <th className="border-b px-4 py-3">Mã bánh</th>
          <th className="border-b px-4 py-3">Hình ảnh</th>
          <th className="border-b px-4 py-3">Tên bánh</th>
          <th className="border-b px-4 py-3">Dịp</th>
          <th className="border-b px-4 py-3">Mô tả</th>
          <th className="border-b px-4 py-3">Xóa</th>
        </tr>
      </thead>
      <tbody>
        {cakes.length > 0 ? (
          cakes.map((cake) => <CakeRow key={cake.cakeID} cake={cake} handleDelete={handleDelete} />)
        ) : (
          <tr>
            <td colSpan={6} className="py-4 text-center">
              No cakes available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CakeTable;
