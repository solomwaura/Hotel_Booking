import Room from "../models/Rooms.js";
import Hotel from "../models/Rooms.js";
import { createError } from "../utils/error.js";


export const createRoom = async (req,res,next) =>{

    const hotelId = req.params.hotel._id;
    const newRoom = new Room(req.body);

    try{
        const savedRoom = await newRoom.save();

        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push: {rooms: savedRoom._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }   catch(err){
        next(err);
    }

};

// update a room
export const updateRoom = async (req,res,next) =>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            {$set: req.body },
            {new: true} 
        );
        res.status(200).json(updatedRoom);

    }catch(err){
        next(err)
    }
}

// delete a room
export const deleteRoom = async (req,res,next) =>{
    const hotelId = req.params.hotelid;

    try{
         await Room.findByIdAndDelete(req.params.id);
            try{
                await Room.findByIdAndUpdate(hotelId,{
                    $pull: {rooms: req.params.id},
                });
            }catch(err){
                next(err);
            }
           
        res.status(200).json("Room has been deleted");

    }catch(err){
        next(err)
    }
}

// get a room
export const getRoom = async (req,res,next) =>{
    try{
        const getRoom = await Room.findById(
            req.params.id, 
        );
        res.status(200).json(getRoom);
    }catch(err){
        next(err);
    }
}

// get all rooms
export const getAllRooms = async (req,res,next) =>{
    try{
        const rooms = await Room.find(   
        );
        res.status(200).json(rooms);
    }catch(err){
        next(err);
    }
}