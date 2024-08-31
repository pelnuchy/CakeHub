import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineUpload, AiOutlineFileAdd } from 'react-icons/ai';
import { Cake } from '../../utils/interfaces';

interface AddCakePopupProps {
  onSave: (cake: Cake) => Promise<void>;
  onClose: () => void;
  getNextCakeId: () => string;
}

const AddCakePopup: React.FC<AddCakePopupProps> = ({ onSave, onClose, getNextCakeId }) => {
  const [cakeData, setCakeData] = useState({
    name: '',
    occasion: 'custom',
    img_url: '',
    description: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCakeData({
      ...cakeData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!cakeData.name || !cakeData.occasion || !file || !cakeData.description) {
      console.log('Missing data:', cakeData);
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    setLoading(true);
    const newCakeId = getNextCakeId();
    const formData = new FormData();
    formData.append('id', newCakeId);
    formData.append('name', cakeData.name);
    formData.append('occasion', cakeData.occasion);
    formData.append('image', file);
    formData.append('description', cakeData.description);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/add-cake`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      const savedCake: Cake = {
        cakeID: newCakeId,
        cakeName: cakeData.name,
        img_url: response.data.imageUrl,
        occasion: cakeData.occasion,
        description: cakeData.description,
      };
      await onSave(savedCake);
      setError(null);
      setCakeData({
        name: '',
        occasion: '',
        img_url: '',
        description: '',
      });
      setFile(null);
    } catch (error) {
      setError('Có lỗi khi đang thêm bánh. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 backdrop-blur-sm">
      <div ref={popupRef} className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 flex items-center">
          <AiOutlineFileAdd className="mr-3 text-3xl text-gray-700" />
          <h2 className="text-xl font-semibold">Thêm bánh</h2>
        </div>
        <div className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Tên bánh*
            </label>
            <input
              id="name"
              name="name"
              value={cakeData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              placeholder="Tên bánh"
              required
            />
          </div>
          <div>
            <label htmlFor="occasion" className="block text-sm font-medium">
              Dịp*
            </label>
            <select
              id="occasion"
              name="occasion"
              value={cakeData.occasion}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              required
            >
              <option value="custom">Trang trí</option>
              <option value="birthday">Sinh nhật</option>
              <option value="christmas">Giáng sinh</option>
              <option value="anniversary">Kỷ niệm</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              Ảnh bánh*
            </label>
            <div className="relative mt-1 flex items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4">
              <div className="flex items-center">
                <AiOutlineUpload className="mr-3 text-2xl text-primary-500" />
                {file ? (
                  <span className="text-gray-800">{file.name}</span>
                ) : (
                  <div className="text-gray-600">
                    <span className="text-primary-500">Click to upload or drag and drop image</span>
                  </div>
                )}
              </div>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                required
              />
            </div>
            <p className="mt-2 text-xs text-gray-800">SVG, PNG, JPG or GIF (max. 800x400px)</p>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
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
            <button
              onClick={onClose}
              className="w-28 rounded-md bg-gray-700 px-4 py-2 text-white shadow-sm hover:bg-gray-600"
            >
              Hủy
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-28 rounded-md px-4 py-2 text-black shadow-sm ${
                loading
                  ? 'cursor-not-allowed bg-gray-700'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600'
              }`}
            >
              {loading ? 'Đang lưu...' : 'Lưu'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCakePopup;
