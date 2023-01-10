import express from "express"
import { createHotel, deleteHotel, updateHotel, getAllHotel, getHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { checkIsAdmin, checkUser } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", checkIsAdmin, createHotel);
//UPDATE  
router.put("/:id", checkIsAdmin, updateHotel);
//DELETE
router.delete("/:id", checkIsAdmin, deleteHotel);
//GET
router.get("/:id",getHotel);
//GET ALL
router.get("/", getAllHotel);

export default router