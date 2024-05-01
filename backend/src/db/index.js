import mongoose from "mongoose";

const connectDB = async () => {
    try { 
        // hold the response after a successful connection
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        // console.log("\n Mongodb connected !! ", connectionInstance);
        console.log("\n Mongodb connected !! ", connectionInstance.connection.host);


    } catch (error) {
        console.log("src :: db :: connectDB: Mongodb connection error ", error);
        process.exit(1);
    }
}

export default connectDB;