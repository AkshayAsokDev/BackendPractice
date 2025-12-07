// Fitness server

const express = require("express");
const server = express();
const PORT = 8089;
const HomeRoute = require("./Routes/HomeRoute");

// Home route leader
server.use("/", HomeRoute);

server.listen(PORT, () => {
    console.log("Fitness server has been started at Port ", PORT);
})