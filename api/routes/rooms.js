import express from "express";
import {
  createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability,
} from "../controllers/rooms.js";
import { checkIsAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:hotelid", checkIsAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", checkIsAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", checkIsAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;
