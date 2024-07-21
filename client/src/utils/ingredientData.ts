export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  price: number;
  expirationDate: string;
}

export const ingredientData: Ingredient[] = [
  {
    id: 'ING50001',
    name: 'Flour',
    quantity: '1',
    unit: 'kg',
    price: 20000,
    expirationDate: '2024-12-31',
  },
  {
    id: 'ING50002',
    name: 'Sugar',
    quantity: '500',
    unit: 'g',
    price: 15000,
    expirationDate: '2024-10-15',
  },
  {
    id: 'ING50003',
    name: 'Butter',
    quantity: '200',
    unit: 'g',
    price: 25000,
    expirationDate: '2024-08-20',
  },
  {
    id: 'ING50004',
    name: 'Eggs',
    quantity: '12',
    unit: 'pieces',
    price: 30000,
    expirationDate: '2024-09-10',
  },
  {
    id: 'ING50005',
    name: 'Strawberries',
    quantity: '500',
    unit: 'g',
    price: 40000,
    expirationDate: '2024-07-25',
  },
  {
    id: 'ING50006',
    name: 'Raspberries',
    quantity: '500',
    unit: 'g',
    price: 45000,
    expirationDate: '2024-07-20',
  },
  {
    id: 'ING50007',
    name: 'Blueberries',
    quantity: '500',
    unit: 'g',
    price: 50000,
    expirationDate: '2024-07-15',
  },
  {
    id: 'ING50008',
    name: 'Corn Kernels',
    quantity: '1',
    unit: 'kg',
    price: 35000,
    expirationDate: '2024-08-05',
  },
  {
    id: 'ING50009',
    name: 'Vanilla Extract',
    quantity: '50',
    unit: 'ml',
    price: 10000,
    expirationDate: '2024-11-30',
  },
  {
    id: 'ING50010',
    name: 'Cocoa Powder',
    quantity: '100',
    unit: 'g',
    price: 20000,
    expirationDate: '2024-12-31',
  },
];
