//import express from 'express';
//import path from 'path';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
//import { dirname } from 'path';


const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const app = express();
const hbs = require("hbs")
const viewtemplate=path.join(__dirname,"./views")
// const collection = require("./connect.cjs")



const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// Set Handlebars as the view engine
app.set("view engine", "hbs");
app.set("views", viewtemplate); 

// Connect to MongoDB


// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('MongoDB connected successfully');
// });

// Routes

// Serve index view

app.get("/",(req, res)=>{
    res.render("Login")
 });
 app.get("/signup",(req, res)=>{
   res.render("signin")
});
//  app.get("/about",(req, res)=>{
//     res.render("about")
//  });
 app.get("/Train",(req, res)=>{
    res.render("Train")
 });
 app.get("/login",(req, res)=>{
   res.render("Train")
});
 app.get("/flight",(req, res)=>{
    res.render("Flight")
 });
 app.get("/findTrain",(req, res)=>{
    res.render("FindTrain")
 });
 app.get("/findFlight",(req, res)=>{
   res.render("FindFlight")
});
//  app.get("/view",(req, res)=>{
//     res.render("view")
//  });
// //  app.get("/cabs",(req, res)=>{
// //     res.render("Cabs")
//  });
app.post('/findtrain', (req, res) => {
    const query='SELECT * from train where (Halt=DEPARTURE||Start=DEPARTURE)&&(DESTINATION=ARRIVAL||HALT=ARRIVAL) ';
    connection.query(query, (error, results) => {
      if (error) {
          console.error('Error fetching data:', error);
          return res.status(500).send('Error fetching data');
      }
      res.render('data', { title: 'Data from Database', data: results });
  });
});  
app.post('/findflight', (req, res) => {
   const query='SELECT * from flight where (Start=DEPARTURE)&&(DESTINATION=ARRIVAL) ';
   connection.query(query, (error, results) => {
     if (error) {
         console.error('Error fetching data:', error);
         return res.status(500).send('Error fetching data');
     }
     res.render('data', { title: 'Data from Database', data: results });
 });
});  
app.post("/signup",async (req,res)=>{
   const data ={
      name:req.body.name,
      email:req.body.email,
      number:req.body.num,
      password:req.body.pass,
      
   }
await collection.insetMany([data])
res.render("train")   
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
