import mongoose from "mongoose";
const connectDB =async()=>{   // async use when u want to use await inside function. some task need to wait its starting until another one is finishing
  try {
    const connectionInstance= await mongoose.connect
    (`${process.env.MONGODB_URI}`)
    console.log(`\n MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed",error);
    process.exit(1); 
  }
}

export default connectDB;

/* import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB; */
