// requiring necessary modules  
require("dotenv").config();
const express=require("express");
const app=express();

// starting the server 
app.listen(process.env.PORT,()=>console.log("server started on port ",process.env.PORT));