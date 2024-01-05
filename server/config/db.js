import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to mongoDB');
    } catch (err) {
        console.log('error:', err);
    }
}

export default connectDB;