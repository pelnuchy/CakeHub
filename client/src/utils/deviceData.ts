import Device1 from '../assets/devices/device1.jpg';
import Device2 from '../assets/devices/device2.jpg';
import Device3 from '../assets/devices/device3.jpg';
import Device4 from '../assets/devices/device4.jpg';
import Device5 from '../assets/devices/device5.jpg';
import Device6 from '../assets/devices/device6.jpg';
import Device7 from '../assets/devices/device7.jpg';
import Device8 from '../assets/devices/device8.jpg';
import Device9 from '../assets/devices/device9.jpg';
import Device10 from '../assets/devices/device10.jpg';

export interface Device {
  id: string;
  model: string;
  manufacturer: string;
  quantity: number;
  price: number;
  type: string;
  managerID: string;
  img_url: string;
}

// Create the device data array
export const deviceData: Device[] = [
  {
    id: 'DEV50001',
    model: 'Oven Model A',
    manufacturer: 'BakeMaster',
    quantity: 10,
    price: 500000,
    type: 'Oven',
    managerID: 'MGR50001',
    img_url: Device1,
  },
  {
    id: 'DEV50002',
    model: 'Mixer Model B',
    manufacturer: 'WhiskIt',
    quantity: 15,
    price: 150000,
    type: 'Mixer',
    managerID: 'MGR50002',
    img_url: Device2,
  },
  {
    id: 'DEV50003',
    model: 'Refrigerator Model C',
    manufacturer: 'CoolStore',
    quantity: 5,
    price: 200000,
    type: 'Refrigerator',
    managerID: 'MGR50003',
    img_url: Device3,
  },
  {
    id: 'DEV50004',
    model: 'Freezer Model D',
    manufacturer: 'FreezeTech',
    quantity: 8,
    price: 180000,
    type: 'Freezer',
    managerID: 'MGR50004',
    img_url: Device4,
  },
  {
    id: 'DEV50005',
    model: 'Proofer Model E',
    manufacturer: 'RiseBakery',
    quantity: 7,
    price: 120000,
    type: 'Proofer',
    managerID: 'MGR50005',
    img_url: Device5,
  },
  {
    id: 'DEV50006',
    model: 'Sheeter Model F',
    manufacturer: 'DoughRoller',
    quantity: 6,
    price: 300000,
    type: 'Sheeter',
    managerID: 'MGR50006',
    img_url: Device6,
  },
  {
    id: 'DEV50007',
    model: 'Slicer Model G',
    manufacturer: 'SliceMaster',
    quantity: 9,
    price: 250000,
    type: 'Slicer',
    managerID: 'MGR50007',
    img_url: Device7,
  },
  {
    id: 'DEV50008',
    model: 'Dough Mixer Model H',
    manufacturer: 'MixIt',
    quantity: 10,
    price: 220000,
    type: 'Dough Mixer',
    managerID: 'MGR50008',
    img_url: Device8,
  },
  {
    id: 'DEV50009',
    model: 'Decorating Tool Model I',
    manufacturer: 'DecoArt',
    quantity: 12,
    price: 130000,
    type: 'Decorating Tool',
    managerID: 'MGR50009',
    img_url: Device9,
  },
  {
    id: 'DEV50010',
    model: 'Packaging Machine Model J',
    manufacturer: 'PackPro',
    quantity: 4,
    price: 400000,
    type: 'Packaging Machine',
    managerID: 'MGR50010',
    img_url: Device10,
  },
];
