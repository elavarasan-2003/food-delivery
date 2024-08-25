import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://freakdude2003:UuQy8VbaJUfhFK5z@cluster0.zsye7.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}