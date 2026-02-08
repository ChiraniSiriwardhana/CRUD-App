//It receives requests from users, processes them using middleware, sends them to the correct routes, and returns a response.
/*Imagine:

🏢 app = office reception desk

It:

Receives visitors (requests)

Sends them to correct department (routes)

Sends response back */



import express from 'express';

const app=express();  //create an express app

app.use(express.json()); //middleware to parse json data in request body (the requset that gets from the client side is parsed here)

//routes import
import userRouter from './routes/user.route.js';


// routes declaration
app.use("/api/v1/users",userRouter); //middleware to handle user routes

//example route: http://localhost:4000/api/v1/users/register







app.get("/", (req, res) => {
  res.send("API is running...");
}); //Quick API endpoint to check if server is running
export default app;