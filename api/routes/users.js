import express from "express"
import { updateUser, deleteUser, getUser, getAllUsers} from "../controllers/users.js";
import { verifyToken, checkUser, checkIsAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello ninja youre authenticated");
// })
// router.get("/checkuser/:id", checkUser, (req,res,next)=>{
//     res.send("hello ninja youre authenticated and you can delete your datails");
// })

// router.get("/checkadmin/:id", checkIsAdmin, (req,res,next)=>{
//     res.send("hello adminninja you're authenticated and you can delete all accounts");
// })
//UPDATE  
router.put("/:id" , checkUser, updateUser);
//DELETE
router.delete("/:id", checkUser, deleteUser);
//GET
router.get("/:id", checkUser, getUser);
//GET ALL
router.get("/", checkIsAdmin, getAllUsers);

export default router