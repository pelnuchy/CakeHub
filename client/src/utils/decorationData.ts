export interface Decoration {
  id: string;
  ingredients: string[];
  sum_cream: string;
}

export const decorationData: Decoration[] = [
  {
    id: 'DCR50001',
    ingredients: ['Strawberries', 'Cream', 'Sugar'],
    sum_cream: 'Strawberry Swirls',
  },
  {
    id: 'DCR50002',
    ingredients: ['Raspberries', 'Whipped Cream', 'Mint'],
    sum_cream: 'Raspberry Delight',
  },
  {
    id: 'DCR50003',
    ingredients: ['Blueberries', 'Cream Cheese', 'Honey'],
    sum_cream: 'Blueberry Bliss',
  },
  {
    id: 'DCR50004',
    ingredients: ['Strawberries', 'Blueberries', 'Raspberries', 'Mint'],
    sum_cream: 'Mixed Berries Fiesta',
  },
  {
    id: 'DCR50005',
    ingredients: ['Corn Kernels', 'Buttercream', 'Edible Flowers'],
    sum_cream: 'Corn Flower',
  },
  {
    id: 'DCR50006',
    ingredients: ['Corn', 'Cream', 'Caramel'],
    sum_cream: 'Corn Delight',
  },
  {
    id: 'DCR50007',
    ingredients: ['Corn', 'Mixed Fruits', 'Cream'],
    sum_cream: 'Fruity Corn',
  },
  {
    id: 'DCR50008',
    ingredients: ['Corn', 'Strawberries', 'Grapes', 'Whipped Cream'],
    sum_cream: 'Corn Strawberry Grape',
  },
  {
    id: 'DCR50009',
    ingredients: ['Vanilla', 'Cream', 'Fondant'],
    sum_cream: 'Vanilla Cat',
  },
  {
    id: 'DCR50010',
    ingredients: ['Strawberries', 'Cream', 'Edible Rose Petals'],
    sum_cream: 'Rose Strawberry',
  },
];
