import express from "express";
import {updateUser, deleteUser, getUser,getUsers,
} from "../controllers/users.js";
import { checkIsAdmin, verifyToken, checkUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", checkUser, updateUser);

//DELETE
router.delete("/:id", checkUser, deleteUser);

//GET
router.get("/:id", checkUser, getUser);

//GET ALL
router.get("/", checkIsAdmin, getUsers);

export default router;
