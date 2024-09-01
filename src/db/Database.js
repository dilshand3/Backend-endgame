import mongoose from "mongoose";
import { MONGO_DB } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${MONGO_DB}`);
        console.log(`MongoDB connected succesfully || DB-HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection failed due to ${error}`)
    }
}

export default connectDB