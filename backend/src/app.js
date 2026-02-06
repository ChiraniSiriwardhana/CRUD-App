//It receives requests from users, processes them using middleware, sends them to the correct routes, and returns a response.
/*Imagine:

🏢 app = office reception desk

It:

Receives visitors (requests)

Sends them to correct department (routes)

Sends response back */



import express from 'express';
const app=express();  //create an express app

app.get("/", (req, res) => {
  res.send("API is running...");
}); //Quick API endpoint to check if server is running
export default app;