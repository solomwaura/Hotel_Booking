import express from "express"
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/rooms.js";
import { checkIsAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotel._id", checkIsAdmin, createRoom);
//UPDATE  
router.put("/:id", checkIsAdmin, updateRoom);
//DELETE
router.delete("/:id/hotelid", checkIsAdmin, deleteRoom);
//GET
router.get("/:id",getRoom);
//GET ALL
router.get("/", getAllRooms);

export default router