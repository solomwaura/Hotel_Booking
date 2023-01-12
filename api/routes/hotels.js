import express from "express";
import {
  countByCity, countByType, createHotel,deleteHotel, getHotel,getHotelRooms, getHotels, updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {checkIsAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", checkIsAdmin, createHotel);

//UPDATE
router.put("/:id", checkIsAdmin, updateHotel);
//DELETE
router.delete("/:id", checkIsAdmin, deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
