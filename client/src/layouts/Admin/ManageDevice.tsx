import React, { useState } from 'react';
import { BsTrash, BsPencil} from 'react-icons/bs';
import 'react-datepicker/dist/react-datepicker.css';


//real one
interface Device {
  id: string;
  brand: string;
  name: string;
  volume: string;
  quantity: number;
  category: string;
  idmanager: string;
}

const ManageDevice: React.FC = () => {

  const initialDevices: Device[] = [
    {
      id: '#B15GF',
      brand: 'BIGSTAR',
      name: 'Máy đánh trứng, đánh kem B15GF',
      volume: '15L',
      quantity: 2,
      category: 'Máy đánh trứng, đánh kem',
      idmanager: 'admin01',
    },
    {
      id: '#B30',
      brand: 'BIGSTAR',
      name: 'Máy trộn bột, nhào bột B30L',
      volume: '30L',
      quantity: 2,
      category: 'Máy trộn bột',
      idmanager: 'admin01',
    },
    {
      id: '#BJY-E13KW-2BD',
      brand: 'Berjaya',
      name: 'Lò nướng Berjaya 2 tầng 4 khay',
      volume: '1295L',
      quantity: 2,
      category: 'Lò nướng',
      idmanager: 'admin01',
    },
    {
      id: '#SL-24C4',
      brand: 'Alaska',
      name: 'Tủ mát Alaska SL-24C4, 4 cánh',
      volume: '2400L',
      quantity: 1,
      category: 'Tủ lạnh',
      idmanager: 'admin01',
    },
    {
      id: '#TBP1500-2',
      brand: 'Turbo Air',
      name: 'Tủ trữ lạnh bánh 3 tầng 1m5 Turbo Air',
      volume: '615L',
      quantity: 1,
      category: 'Tủ giữ mát',
      idmanager: 'admin01',
    },
  ];


  const [devices, setDevices] = useState<Device[]>(initialDevices);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newQuantity, setNewQuantity] = useState<number | null>(null);

  const handleDelete = (id: string) => {
    // Filter out the device with the given id
    const updatedDevices = devices.filter(device => device.id !== id);
    // Update the state with the new list of devices
    setDevices(updatedDevices);
  };

  const handleEdit = (id: string, currentQuantity: number) => {
    setEditingId(id);
    setNewQuantity(currentQuantity);
  };

  const handleSave = (id: string) => {
    const updatedDevices = devices.map(device => 
      device.id === id ? { ...device, quantity: newQuantity! } : device
    );
    setDevices(updatedDevices);
    setEditingId(null);
    setNewQuantity(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(Number(e.target.value));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-4xl font-bold">Quản lý thiết bị làm bánh</h2>
      <div className="flex justify-center w-full">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <div className="rounded-lg bg-white p-4 shadow w-full border overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-center">Mã thiết bị</th>
                    <th className="border px-4 py-2 text-center">Hãng</th>
                    <th className="border px-4 py-2 text-center">Tên thiết bị</th>
                    <th className="border px-4 py-2 text-center">Thể tích</th>
                    <th className="border px-4 py-2 text-center">Số lượng</th>
                    <th className="border px-4 py-2 text-center">Loại</th>
                    <th className="border px-4 py-2 text-center">Mã người quản lý</th>
                    <th className="border px-4 py-2 text-center">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  {devices.map((Device, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{Device.id}</td>
                      <td className="border px-4 py-2">{Device.brand}</td>
                      <td className="border px-4 py-2">{Device.name}</td>
                      <td className="border px-4 py-2">{Device.volume}</td>
                      <td className="border px-4 py-2">
                        {editingId === Device.id ? (
                          <input
                            type="number"
                            value={newQuantity ?? ''}
                            onChange={handleInputChange}
                            onBlur={() => handleSave(Device.id)} // Save on blur (optional)
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleSave(Device.id); // Call your save function
                              }
                            }} // Handle enter key
                            className="border border-gray-300 rounded px-0.1 py-0.5"
                          />
                        ) : (
                          <>
                            <span>{Device.quantity}</span>
                            <button onClick={() => handleEdit(Device.id, Device.quantity)}>
                              <BsPencil className="text-right-black-500 cursor-pointer ml-5" /> {/* Edit icon */}
                            </button>
                          </>
                        )}
                      </td>
                      <td className="border px-4 py-2">{Device.category}</td>
                      <td className="border px-4 py-2">{Device.idmanager}</td>
                      <td className="border px-4 py-2 text-center">
                        <button onClick={() => handleDelete(Device.id)}>
                          <BsTrash className="text-black-500 cursor-pointer" /> {/* Delete icon */}
                        </button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDevice;
