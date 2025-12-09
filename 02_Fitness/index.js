// Fitness server
// environment variables loading using dotenv -> into the process



const express = require("express");
const server = express();
require("dotenv").config();


const PORT = process.env.PORT;
const HomeRoute = require("./Routes/HomeRoute");
const ActivityRoute = require("./Routes/ActivityRoute");
const { default: mongoose } = require("mongoose");



// Home route leader
server.use("/", HomeRoute);

// Api functionalities
server.use("/api/v1", ActivityRoute);

const MONGODB_URL = process.env.MONGODB_URL;
const DBNAME = process.env.DBNAME;
mongoose.connect(MONGODB_URL + DBNAME).then(() => {
    console.log("Connected to MongoDB");
})


server.listen(PORT, () => {
    console.log("Fitness server has been started at Port ", PORT);
})