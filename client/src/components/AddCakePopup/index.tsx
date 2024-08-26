import React, { useState } from 'react';
import { AiOutlineUpload, AiOutlineFileAdd } from 'react-icons/ai';
import Modal from '../Modal';
import Button from '../../components/Button';

interface AddCakePopupProps {
  onSave: (cakeData: any) => void;
  onClose: () => void;
}

const AddCakePopup: React.FC<AddCakePopupProps> = ({ onSave, onClose }) => {
  const [cakeData, setCakeData] = useState({
    name: '',
    occasion: '',
    img_url: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCakeData({
      ...cakeData,
      [name]: value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setCakeData({ ...cakeData, img_url: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(cakeData);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center">
          <AiOutlineFileAdd className="mr-3 text-3xl text-gray-700" />
          <h2 className="text-xl font-semibold text-gray-800">Thêm bánh</h2>
        </div>
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Tên bánh*
            </label>
            <input
              id="name"
              name="name"
              value={cakeData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Sinh nhật"
              required
            />
          </div>
          <div>
            <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">
              Dịp*
            </label>
            <input
              id="occasion"
              name="occasion"
              value={cakeData.occasion}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Christmas"
              required
            />
          </div>
          <div>
            <label htmlFor="img_url" className="block text-sm font-medium text-gray-700">
              Ảnh bánh*
            </label>
            <div className="relative mt-1 flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4">
              <div className="flex items-center">
                <AiOutlineUpload className="mr-3 text-2xl text-primary-500" />
                {cakeData.img_url ? (
                  <img src={cakeData.img_url} alt="Cake Preview" className="h-24 w-24 rounded-lg object-cover" />
                ) : (
                  <div className="text-gray-400">
                    <span className="text-primary-500">Click to upload</span> or drag and drop
                  </div>
                )}
              </div>
              <input
                id="img_url"
                name="img_url"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                required
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Mô tả*
            </label>
            <input
              id="description"
              name="description"
              value={cakeData.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Mô tả bánh"
              required
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <Button
              onClick={onClose}
              className="w-28 rounded-md bg-gray-200 px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-300"
            >
              Hủy
            </Button>
            <Button
              onClick={handleSave}
              className="w-28 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2 text-white shadow-sm hover:from-yellow-500 hover:to-yellow-600"
            >
              Lưu
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCakePopup;
