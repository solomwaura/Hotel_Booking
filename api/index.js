import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"; 
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"
import hotelsRoute from "./routes/hotels.js"

const app = express();
dotenv.config();
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
      } catch (error) {
        throw(error);
      }
};

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb disconnected");
});
mongoose.connection.on("connected",()=>{
    console.log("MongoDb connected");
});
// middlewares
app.use(express.json())
 
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

app.listen(4550, ()=>{
    connect();
    console.log("Listening to port 4550, and connected to backend")
})