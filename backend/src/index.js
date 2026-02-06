import dotenv from 'dotenv';  // dependency helps to extract environment variables from .env file in all our servers
import connectDB from './config/database.js';
import app from './app.js';


dotenv.config(
    {
       path:'./.env' 
    }
);  // configure dotenv

const startServer =async()=>{
    try {
        await connectDB();
        app.on("error",(error)=>{
            console.log("Error occurred:",error);
            throw error;
        });
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`Server is running on port: ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("MongoDB connection failed ",error);
    }
}

startServer(); 
