import React, { useState, useEffect, useRef } from 'react';
import { BsTrash, BsPencil, BsPlus, BsSave} from 'react-icons/bs';
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
  // for adding
  const [isAdding, setIsAdding] = useState(false);
  const [newDevice, setNewDevice] = useState<Device | null>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the first input field
  // for editing
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newQuantity, setNewQuantity] = useState<number | null>(null);
  const [isEditButtonClicked, setIsEditButtonClicked] = useState<boolean>(false);
  // original quantity
  const [originalQuantity, setOriginalQuantity] = useState<number | null>(null); // To store the original quantity

  const handleAdd = () => {
    // Enter "Add Mode"
    setIsAdding(true);

    // Create a new device object with default values
    setNewDevice({
      id: `#NEW${devices.length + 1}`,
      brand: '',
      name: '',
      volume: '',
      quantity: 0,
      category: '',
      idmanager: '',
    });
  };

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus(); // Automatically focus the first input field
    }
  }, [isAdding]);

  const handleDelete = (id: string) => {
    // Filter out the device with the given id
    const updatedDevices = devices.filter(device => device.id !== id);
    // Update the state with the new list of devices
    setDevices(updatedDevices);
  };

  const handleEdit = (id: string, currentQuantity: number) => {
    setEditingId(id);
    setNewQuantity(currentQuantity);
    setIsEditButtonClicked(true); // Set flag when edit button is clicked
    setOriginalQuantity(currentQuantity); // Store the original quantity when editing
  };

  const handleSave = (id: string, mode: number) => {
     if (mode == 0) // for editing mode
     {
      // Only save if the quantity has changed
      if (newQuantity !== originalQuantity) {
        const updatedDevices = devices.map(device => 
          device.id === id ? { ...device, quantity: newQuantity! } : device
        );
        setDevices(updatedDevices);
      }
      setEditingId(null);
      setIsEditButtonClicked(false); // Reset flag
      setNewQuantity(null);
     }
     else if (mode == 1) // for adding mode
     {
      if (newDevice) {
        setDevices([...devices, newDevice]);
      }
      setIsAdding(false);
      setNewDevice(null);
     }
  };

  const handleAddingInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (newDevice)
      setNewDevice({ ...newDevice, [name]: value });
  };

  const handleEditingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(Number(e.target.value));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Element; // Cast to Element

    // If the user is in editing mode and clicks outside 
    // the input and it's not an edit button click
    if (editingId && !target.closest('.editable-input') && !isEditButtonClicked)
      handleSave(editingId, 0); // Optional: save changes on click outside

    // Reset the flag after the click event
    setIsEditButtonClicked(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [editingId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-4 text-4xl font-bold">Quản lý thiết bị làm bánh</h2>
      <div className="flex justify-center w-full">
        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            {/* Add Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAdd}
                className="flex items-center px-4 py-2 text-black font-bold rounded duration-300"
                style={{
                  background: 'linear-gradient(to bottom, #ffe72f, #ffa31a)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #ffdb00, #ff9100)'} // Lighter hover colors
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #ffe72f, #ffa31a)'} // Original colors
              >
                <BsPlus className="mr-2" />
                Thêm thiết bị {/* "Add Device" in Vietnamese */}
              </button>
            </div>
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
                            onChange={handleEditingInputChange}
                            onBlur={() => handleSave(Device.id, 0)} // Save on blur (optional)
                            min={0} // This sets the minimum value to 0

                            onKeyDown={(e) => {
                              if (e.key === '-' || e.key === 'ArrowDown' && (newQuantity === 0 || newQuantity === null))
                                e.preventDefault(); // Prevents typing a negative sign or decreasing below 0
                              else if (e.key === 'Enter') {
                                handleSave(Device.id, 0); // Call your save function
                              }
                            }} // Handle enter key
                            className="border border-gray-300 rounded px-0.1 py-0.5"
                          />
                        ) : (
                          <>
                            <span>{Device.quantity}</span>
                            <button onClick={() => handleEdit(Device.id, Device.quantity)} className="text-black-500 cursor-pointer ml-5">
                              <BsPencil className="text-black-500" /> {/* Edit icon */}
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
                  {isAdding && newDevice && (
                    <tr>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="id"
                          value={newDevice.id}
                          className="border border-gray-300 rounded px-2 py-1"
                          ref={inputRef} // Focus on this input
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="brand"
                          value={newDevice.brand}
                          onChange={handleAddingInputChange}
                          className="border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="name"
                          value={newDevice.name}
                          onChange={handleAddingInputChange}
                          className="border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="volume"
                          value={newDevice.volume}
                          onChange={handleAddingInputChange}
                          className="border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="number"
                          name="quantity"
                          value={newDevice.quantity}
                          onChange={handleAddingInputChange}
                          onBlur={() => handleSave(newDevice.id, 0)}
                          className="border border-gray-300 rounded px-2 py-1"
                          min={0} // This sets the minimum value to 0
                          onKeyDown={(e) => {
                            if (e.key === '-' || e.key === 'ArrowDown' && (newQuantity === 0 || newQuantity === null)) {
                              e.preventDefault(); // Prevents typing a negative sign or decreasing below 0
                            }
                          }}
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="category"
                          value={newDevice.category}
                          onChange={handleAddingInputChange}
                          className="border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          name="idmanager"
                          value={newDevice.idmanager}
                          onChange={handleAddingInputChange}
                          className="border border-gray-300 rounded px-2 py-1"
                        />
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <button onClick={() => handleSave('', 1)} className="text-green-500 cursor-pointer">
                          <BsSave />
                        </button>
                      </td>
                    </tr>
                  )}
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
