import mongoose from "mongoose";
import { DB_URI } from "./environments.js";

function connectDB() {
    mongoose.connect(DB_URI)
    .then(() => console.log(`MongoDB connected successfully`))
    .catch(err => console.log(`MongoDB connected error:`, err))
}
export default connectDB
