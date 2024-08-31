import express from "express";
import cakeController from "../controllers/cakeController.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

//client
router.get("/get-all-cakes", cakeController.getAllCakes);
router.get(
  "/get-all-cakes-occasion/:occasion",
  cakeController.getAllCakesOccasion
);
router.get("/get-details-cake/:id", cakeController.getDetailCake);
router.get("/get-cake-related/:id", cakeController.getRelatedCakes);
router.get("/search-cakes", cakeController.searchCakesByKeyword);

//baker
router.get("/get-all-cakes-baker", cakeController.getAllCakesManageCake);
router.post("/add-cake", upload.single("image"), cakeController.addCake);
router.delete("/delete-cake/:id", cakeController.deleteCake);
export default router;
