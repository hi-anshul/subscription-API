import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if(!DB_URI) {
    throw new Error("Database URI is not defined in environment variables");
}

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`MongoDB connected successfully in ${process.env.NODE_ENV} mode`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB;