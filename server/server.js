import express, { Router } from 'express';
import mongoose from 'mongoose';
import "dotenv/config"
import userRoutes from './src/routes/userRoutes.js';
import cakeRoutes from './src/routes/cakeRoutes.js';
import cartRoutes from './src/routes/cartRoutes.js';
import orderRoutes from './src/routes/orderRoutes.js';
import ingredientRoutes from './src/routes/ingredientRoutes.js';
import deviceRoutes from './src/routes/deviceRoutes.js';
import paymentRoutes from './src/routes/paymentRoutes.js';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'kobietgihet',
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: false,
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',cakeRoutes, userRoutes, cartRoutes, orderRoutes, ingredientRoutes, deviceRoutes, paymentRoutes);


mongoose.connect(process.env.DATABASE_URI_LOCAL)
.then(async () => { // Sử dụng async để có thể sử dụng await bên trong
    console.log('Connected to MongoDB');
    console.log('Current Database:', mongoose.connection.db.databaseName);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error)
});
