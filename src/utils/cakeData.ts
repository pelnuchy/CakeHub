import Cake1 from '../assets/cake/cake1.jpg';
import Cake2 from '../assets/cake/cake2.jpg';
import Cake3 from '../assets/cake/cake3.jpg';
import Cake4 from '../assets/cake/cake4.jpg';
import Cake5 from '../assets/cake/cake5.jpg';
import Cake6 from '../assets/cake/cake6.jpg';
import Cake7 from '../assets/cake/cake7.jpg';
import Cake8 from '../assets/cake/cake8.jpg';
// import Cake9 from '../../assets/cake/cake9.jpg';
// import Cake10 from '../../assets/cake/cake10.jpg';

export interface Cake {
  id: string;
  title: string;
  img: string;
  price: string;
}

export const cakeData: Cake[] = [
  {
    id: 'BG50015',
    img: Cake1,
    title: 'Bánh kỉ niệm 2 năm',
    price: '320.000',
  },
  {
    id: 'BG50016',
    img: Cake2,
    title: 'Bánh kỉ niệm trái tim',
    price: '280.000',
  },
  {
    id: 'BG50017',
    img: Cake3,
    title: 'Bánh chúc mừng kỉ niệm',
    price: '350.000',
  },
  {
    id: 'BG50018',
    img: Cake4,
    title: 'Bánh lịch kỉ niệm',
    price: '400.000',
  },
  {
    id: 'BG50024',
    img: Cake5,
    title: 'Bánh hoa bắp',
    price: '600.000',
  },
  {
    id: 'BG50023',
    img: Cake6,
    title: 'Bánh hạt bắp',
    price: '600.000',
  },
  {
    id: 'BG50021',
    img: Cake7,
    title: 'Bánh bắp trái',
    price: '400.000',
  },
  {
    id: 'BG50022',
    img: Cake8,
    title: 'Bánh bắp dâu nho',
    price: '420.000',
  },
];
