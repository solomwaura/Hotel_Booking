import User from "../models/User.js"


// update a user
export const updateUser = async (req,res,next) =>{
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body },
            {new: true} 
        );
        res.status(200).json(updatedUser);

    }catch(err){
        next(err)
    }
}

// delete a user
export const deleteUser = async (req,res,next) =>{
    try{
        const updatedUser = await User.findByIdAndDelete(
            req.params.id, 
        );
        res.status(200).json("User has been deleted");

    }catch(err){
        next(err)
    }
}

// get a User
export const getUser = async (req,res,next) =>{
    try{
        const getUser = await User.findById(
            req.params.id, 
        );
        res.status(200).json(getUser);
    }catch(err){
        next(err);
    }
}

// get all users
export const getAllUsers = async (req,res,next) =>{
    try{
        const users = await User.find(   
        );
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}