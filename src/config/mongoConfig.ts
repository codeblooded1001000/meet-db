import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

var uri: any = process.env.DB_URI;

export const mongoConnection =  ()=> {
  mongoose.connect(uri)
    .then(()=> {
  console.log("Database connected successfully");
})
  .catch((error) => {
    console.log("An error occured while connecting with databse ", error);
})
}