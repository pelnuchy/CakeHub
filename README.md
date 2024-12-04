# E-Commerce CakeHub App

CakeHub is an e-commerce website specializing in online cake sales, built with the MERN Stack (MongoDB, Express, React, Node.js), featuring three main modules:

+ Customer:
- Conveniently order cakes online.
- Manage personal orders and track delivery status.
- Secure and fast online payment options.

+ Kitchen:
- Manage real-time order lists to streamline the baking process.
- Track and manage ingredient inventory to avoid shortages or waste.

+ Admin:
- Monitor and manage revenue through an intuitive dashboard.
- Generate detailed reports on monthly cake sales, revenue, and ingredient usage.

CakeHub simplifies the cake ordering process for customers, enhances order management for the kitchen, and optimizes revenue tracking for admins.

## Features

- 🛒 **Cake Listing**: View a wide range of cakes with filters and search functionality.
- 📄 **Cake Details**: Detailed cake pages with images, descriptions, and reviews.
- 🛍️ **Shopping Cart**: Add/remove cakes from the cart, and manage quantities.
- 🔐 **User Authentication**: Secure login, registration, and user profile management.
- 💳 **Checkout**: Complete purchases using mock payment integration.
- 🎨 **Tailwind CSS Styling**: Modern, responsive design using utility-first CSS framework.
- 🔄 **State Management**: Managed with React Context API or Redux (choose based on your setup).
- 🚀 **Deployment**: Optimized for deployment.

## Technologies

This project base on [**MERN**](https://www.mongodb.com/resources/languages/mern-stack) Stack.

## Getting Started

### Prerequisites

- **Node.js** (v18 or later)
- **npm** (v6 or later) or **yarn**

### Installation and run the application

1. Clone the repository:

   ```bash
   git clone https://github.com/Shiphu2103/EC2024-04-CakeHub.git
   ```

2. Navigate to the server directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Set up environment variables by creating a `.env` file in the root directory:

   ```
    DATABASE_URI=your_mongodb_uri

    CLIENT_ID = your_palpay_clientID

    CLOUDINARY_CLOUD_NAME=example_cloud_name
    CLOUDINARY_API_KEY=example_api_key
    CLOUDINARY_API_SECRET=example_api_secret

   ```

5. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

6. Navigate to the app directory:

   ```bash
   cd client
   ```

7. Set up environment variables by creating a `.env` file in the root directory:

   ```
   REACT_APP_API_URL=https://api.example.com
   ```

8. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

9. Set up environment variables by creating a `.env` file in the root directory:

   ```
   REACT_APP_API_URL=https://api.example.com
   ```

10. Start the development app:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

11. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Tailwind CSS Configuration

The Tailwind configuration is defined in the `tailwind.config.js` file. You can customize it by adding your own themes, colors, or extending the utility classes.

### Deployment:

Our website and database are deployed on Vercel. 
Link: https://cake-hub.vercel.app/

### Contributors

- [Si Phu Pham](https://github.com/Shiphu2103)
- [Duc Kien Hoang](https://github.com/duckien2012)
- [Huynh Phuc Le](https://github.com/Shiphu2103)
- [Gia Khanh Nguyen](https://github.com/KyleKennyNelson)

## License

This project is licensed under the MIT License.

---
Thank you, 
Pelnuchy.
