// Fitness server

const express = require("express");
const server = express();
const PORT = 8089;
const HomeRoute = require("./Routes/HomeRoute");
const ActivityRoute = require("./Routes/ActivityRoute");

// Home route leader
server.use("/", HomeRoute);

// Api functionalities
server.use("/api/v1", ActivityRoute);

server.listen(PORT, () => {
    console.log("Fitness server has been started at Port ", PORT);
})