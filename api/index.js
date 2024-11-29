import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  

console.log("MONGO_URI:", process.env.MONGO_URI);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log(err.message);
   
  });

const app = express();


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
