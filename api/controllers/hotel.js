import Hotel from "../models/Hotel.js"

// create hotel
export const createHotel = async (req,res,next) =>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    }catch(err){
        next(err);
    }
}

// update a hotel
export const updateHotel = async (req,res,next) =>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body },
            {new: true} 
        );
        res.status(200).json(updatedHotel);

    }catch(err){
        next(err)
    }
}

// delete a hotel
export const deleteHotel = async (req,res,next) =>{
    try{
        const updatedHotel = await Hotel.findByIdAndDelete(
            req.params.id, 
        );
        res.status(200).json("Hotel has been deleted");

    }catch(err){
        next(err)
    }
}

// get a hotel
export const getHotel = async (req,res,next) =>{
    try{
        const getHotel = await Hotel.findById(
            req.params.id, 
        );
        res.status(200).json(getHotel);
    }catch(err){
        next(err);
    }
}

// get all hotels
export const getAllHotel = async (req,res,next) =>{
    try{
        const hotels = await Hotel.find(   
        );
        res.status(200).json(hotels);
    }catch(err){
        next(err);
    }
}