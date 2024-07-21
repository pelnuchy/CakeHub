// Define the Order interface
export interface Order {
  id: string;
  orderDate: string;
  shippingAddress: string;
  deliveryTime: string;
  paymentTime: string;
  completionTime: string;
  status: string;
  userID: string;
  cakes: Array<{
    cakeID: string;
    quantity: number;
    message: string;
  }>;
  totalPrice: number;
}

export const orderData: Order[] = [
  {
    id: 'ORD50001',
    orderDate: '2024-07-01',
    shippingAddress: '123 Cake Street, Bakery Town, CA',
    deliveryTime: '2024-07-05T10:00:00Z',
    paymentTime: '2024-07-01T12:00:00Z',
    completionTime: '2024-07-04T16:00:00Z',
    status: 'Completed',
    userID: 'USR50001',
    cakes: [
      {
        cakeID: 'BG50015',
        quantity: 1,
        message: 'Happy 2nd Anniversary!',
      },
    ],
    totalPrice: 320000,
  },
  {
    id: 'ORD50002',
    orderDate: '2024-07-02',
    shippingAddress: '456 Dessert Drive, Sweet City, NY',
    deliveryTime: '2024-07-06T11:00:00Z',
    paymentTime: '2024-07-02T14:00:00Z',
    completionTime: '2024-07-05T17:00:00Z',
    status: 'Completed',
    userID: 'USR50002',
    cakes: [
      {
        cakeID: 'BG50016',
        quantity: 2,
        message: 'Heartfelt Wishes!',
      },
    ],
    totalPrice: 560000,
  },
  {
    id: 'ORD50003',
    orderDate: '2024-07-03',
    shippingAddress: '789 Pastry Place, Dessertville, TX',
    deliveryTime: '2024-07-07T12:00:00Z',
    paymentTime: '2024-07-03T15:00:00Z',
    completionTime: '2024-07-06T18:00:00Z',
    status: 'Completed',
    userID: 'USR50003',
    cakes: [
      {
        cakeID: 'BG50017',
        quantity: 1,
        message: 'Congratulations!',
      },
      {
        cakeID: 'BG50018',
        quantity: 1,
        message: 'Special Date!',
      },
    ],
    totalPrice: 750000,
  },
  {
    id: 'ORD50004',
    orderDate: '2024-07-04',
    shippingAddress: '321 Cupcake Court, Frosting Town, FL',
    deliveryTime: '2024-07-08T13:00:00Z',
    paymentTime: '2024-07-04T16:00:00Z',
    completionTime: '2024-07-07T19:00:00Z',
    status: 'Completed',
    userID: 'USR50004',
    cakes: [
      {
        cakeID: 'BG50024',
        quantity: 1,
        message: 'Happy Birthday!',
      },
    ],
    totalPrice: 600000,
  },
  {
    id: 'ORD50005',
    orderDate: '2024-07-05',
    shippingAddress: '654 Cookie Lane, Sugar City, WA',
    deliveryTime: '2024-07-09T14:00:00Z',
    paymentTime: '2024-07-05T17:00:00Z',
    completionTime: '2024-07-08T20:00:00Z',
    status: 'Completed',
    userID: 'USR50005',
    cakes: [
      {
        cakeID: 'BG50023',
        quantity: 1,
        message: 'Sweet Corn Cake!',
      },
    ],
    totalPrice: 600000,
  },
  {
    id: 'ORD50006',
    orderDate: '2024-07-06',
    shippingAddress: '987 Brownie Blvd, Chocolate City, OR',
    deliveryTime: '2024-07-10T15:00:00Z',
    paymentTime: '2024-07-06T18:00:00Z',
    completionTime: '2024-07-09T21:00:00Z',
    status: 'Completed',
    userID: 'USR50006',
    cakes: [
      {
        cakeID: 'BG50021',
        quantity: 1,
        message: 'Happy Celebration!',
      },
    ],
    totalPrice: 400000,
  },
  {
    id: 'ORD50007',
    orderDate: '2024-07-07',
    shippingAddress: '432 Tart Terrace, Pie Town, IL',
    deliveryTime: '2024-07-11T16:00:00Z',
    paymentTime: '2024-07-07T19:00:00Z',
    completionTime: '2024-07-10T22:00:00Z',
    status: 'Completed',
    userID: 'USR50007',
    cakes: [
      {
        cakeID: 'BG50022',
        quantity: 2,
        message: 'Strawberry & Grape Delight!',
      },
    ],
    totalPrice: 840000,
  },
  {
    id: 'ORD50008',
    orderDate: '2024-07-08',
    shippingAddress: '876 Macaron Avenue, Biscuit City, CO',
    deliveryTime: '2024-07-12T17:00:00Z',
    paymentTime: '2024-07-08T20:00:00Z',
    completionTime: '2024-07-11T23:00:00Z',
    status: 'Completed',
    userID: 'USR50008',
    cakes: [
      {
        cakeID: 'BG50023',
        quantity: 1,
        message: 'Cat-shaped Cake!',
      },
    ],
    totalPrice: 250000,
  },
  {
    id: 'ORD50009',
    orderDate: '2024-07-09',
    shippingAddress: '543 Muffin Street, Crumble City, AZ',
    deliveryTime: '2024-07-13T18:00:00Z',
    paymentTime: '2024-07-09T21:00:00Z',
    completionTime: '2024-07-12T24:00:00Z',
    status: 'Completed',
    userID: 'USR50009',
    cakes: [
      {
        cakeID: 'BG50024',
        quantity: 1,
        message: 'Rose-shaped Cake!',
      },
    ],
    totalPrice: 350000,
  },
  {
    id: 'ORD50010',
    orderDate: '2024-07-10',
    shippingAddress: '210 Pancake Road, Syrup City, NV',
    deliveryTime: '2024-07-14T19:00:00Z',
    paymentTime: '2024-07-10T22:00:00Z',
    completionTime: '2024-07-13T01:00:00Z',
    status: 'Completed',
    userID: 'USR50010',
    cakes: [
      {
        cakeID: 'BG50015',
        quantity: 1,
        message: 'Happy Anniversary!',
      },
    ],
    totalPrice: 320000,
  },
];
