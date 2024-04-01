import mongoose from "mongoose";

const connecttion: { isConnected?: number } = {};

async function dbConnect() {
    if (connecttion.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URL1!);
    connecttion.isConnected = db.connections[0].readyState;

}

export default dbConnect