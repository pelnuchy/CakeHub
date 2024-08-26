import express, { Router } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import multer from "multer";
import cloudinary from "cloudinary";
import userRoutes from "./src/routes/userRoutes.js";
import cakeRoutes from "./src/routes/cakeRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import ingredientRoutes from "./src/routes/ingredientRoutes.js";
import deviceRoutes from "./src/routes/deviceRoutes.js";
import paymentRoutes from "./src/routes/paymentRoutes.js";
import bodyParser from "body-parser";
import session from "express-session";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer({ dest: "uploads/" });

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors());

app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "kobietgihet",
    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: true,
      secure: false,
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/",
  cakeRoutes,
  userRoutes,
  cartRoutes,
  orderRoutes,
  ingredientRoutes,
  deviceRoutes,
  paymentRoutes
);

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    fs.unlinkSync(path.resolve(req.file.path)); // Clean up the temporary file

    const newCake = new Cake({
      name: req.body.name,
      occasion: req.body.occasion,
      img_url: result.secure_url,
      description: req.body.description,
    });

    await newCake.save();
    res.status(201).json({ message: "Cake added successfully", cake: newCake });
  } catch (error) {
    res.status(500).json({ message: "Image upload failed", error });
  }
});

mongoose
  .connect(process.env.DATABASE_URI)
  .then(async () => {
    // Sử dụng async để có thể sử dụng await bên trong
    console.log("Connected to MongoDB");
    console.log("Current Database:", mongoose.connection.db.databaseName);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
