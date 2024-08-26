import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://freakdude2003:Zu1BK6NqrSMcAnom@cluster0.iszv6.mongodb.net/food-del').then(()=>console.log("DataBase Connected"));
}
