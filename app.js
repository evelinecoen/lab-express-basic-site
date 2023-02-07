//Require express
const { response, request } = require("express");

const express = require("express");

const app = express();

//Link public folder
app.use(express.static("public"));

//Creating routes:

//Home
app.get("/home", (request, response) => {  
  response.sendFile(__dirname + "/views/home.html");   //__dirname = localhost:3000
});

//Profile
app.get("/profile", (request, response) => {
  response.sendFile(__dirname + "/views/profile.html");
});

//Works
app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

//Photo gallery
app.get("/photogallery", (request, response) => {
  response.sendFile(__dirname + "/views/photogallery.html");
});

//Listen
app.listen(3000);