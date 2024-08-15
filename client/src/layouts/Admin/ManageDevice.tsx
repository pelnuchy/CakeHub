import React, { useState, useEffect, useRef } from 'react';
import { BsTrash, BsPencil, BsPlus, BsSave } from 'react-icons/bs';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Device } from '../Admin/DeviceType';
import AddDevicePopup from '../../components/AddDevicePopup';


const ManageDevice: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  // for adding
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  // for editing
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newQuantity, setNewQuantity] = useState<number | null>(null);
  const [isEditButtonClicked, setIsEditButtonClicked] = useState<boolean>(false);

  // original quantity
  const [originalQuantity, setOriginalQuantity] = useState<number | null>(null); // To store the original quantity

  // useEffect(() => {
  //   if (isAdding && inputRef.current) {
  //     inputRef.current.focus(); // Automatically focus the first input field
  //   }
  // }, [isAdding]);

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [editingId]);

  useEffect(() => {
    const getListDevices = async () => {
      const listDevices = await fetchListDevices();
      setDevices(listDevices);
    };

    getListDevices();

  }, []);

  const fetchListDevices = async (): Promise<Device[]> => {
    try {
      const response = await axios.get(`http://localhost:8000/get-all-devices`);
      const listDevices = response.data.data;
      const deviceDetail = listDevices.flatMap((listDevices: any) =>
        listDevices?.devices.map((device: any) => ({
          id: device.deviceID,
          brand: device.deviceModel,
          name: device.deviceName,
          volume: device.volume,
          quantity: device.quantity,
          category: device.deviceType,
          idmanager: device.managerID
        })) || []
      );
      return deviceDetail;
    } catch (error) {
      console.log('Error fetching list:', error);
      return [];
    }
  }

  const handleAdd = () => {
    // Enter "Add Mode"
    setIsPopupOpen(true); // Open the popup
  };

  const handleDelete = (id: string) => {
    // Filter out the device with the given id
    const updatedDevices = devices.filter(device => device.id !== id);
    axios.put(`http://localhost:8000/delete-device/${id}`);
    // Update the state with the new list of devices
    setDevices(updatedDevices);
  };

  const handleAddingSave = (device: Device) => {
    setDevices([device, ...devices]);
    setIsPopupOpen(false); // Close the popup
  };


  const handleEdit = (id: string, currentQuantity: number) => {
    setEditingId(id);
    setNewQuantity(currentQuantity);
    setIsEditButtonClicked(true); // Set flag when edit button is clicked
    setOriginalQuantity(currentQuantity); // Store the original quantity when editing
  };


  const handleEditingSave = (id: string) => {
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
  };

  const handleEditingInputChange = async (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    const newQuantity = Number(e.target.value);
    setNewQuantity(newQuantity);
    await axios.put(`http://localhost:8000/update-quantity-device/${id}/device?newQuantity=${newQuantity}`);
  };

  // const handleClickOutside = (event: MouseEvent) => {
  //   const target = event.target as Element; // Cast to Element

  //   // If the user is in editing mode and clicks outside 
  //   // the input and it's not an edit button click
  //   if (editingId && !target.closest('.editable-input') && !isEditButtonClicked)
  //     handleEditingSave(editingId); // Optional: save changes on click outside

  //   // Reset the flag after the click event
  //   setIsEditButtonClicked(false);
  // };



  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="mb-4 text-4xl font-bold"> 👨🏻‍🚀 Quản lý thiết bị làm bánh</h2>
      <div className="flex justify-center min-w-full">
        <div className=" grid w-full max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            {/* Add Button */}
            <div className="flex justify-end mt-4 mb-4">
              <button
                onClick={handleAdd}
                className="flex items-center px-4 py-2 text-black font-bold rounded duration-300"
                style={{
                  background: 'linear-gradient(to bottom, #ffe72f, #ffa31a)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #ffdb00, #ff9100)'} // Lighter hover colors
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to bottom, #ffe72f, #ffa31a)'} // Original colors
              >
                <BsPlus className="" />
                Thêm thiết bị {/* "Add Device" in Vietnamese */}
              </button>
              {isPopupOpen && <AddDevicePopup onSave={handleAddingSave} onClose={() => setIsPopupOpen(false)} />}
            </div>
            <div className="rounded-lg bg-white p-4 shadow w-full border overflow-x-auto">
              <table className="w-full border-collapse text-center">
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
                            onChange={(e) => handleEditingInputChange(e, Device.id)}
                            onBlur={() => handleEditingSave(Device.id)} // Save on blur (optional)
                            min={0} // This sets the minimum value to 0

                            onKeyDown={(e) => {
                              if (e.key === '-' || e.key === 'ArrowDown' && (newQuantity === 0 || newQuantity === null))
                                e.preventDefault(); // Prevents typing a negative sign or decreasing below 0
                              else if (e.key === 'Enter') {
                                handleEditingSave(Device.id); // Call your save function
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
                      <td className="border px-4 py-2">
                        {Device.category === 'egg_mixer' && 'Máy đánh trứng và kem'}
                        {Device.category === 'powder_mixer' && 'Máy trộn bột'}
                        {Device.category === 'baking_oven' && 'Lò nướng'}
                        {Device.category === 'fridge' && 'Tủ lạnh'}
                        {Device.category === 'cool_storage' && 'Tủ trữ mát'}
                      </td>
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