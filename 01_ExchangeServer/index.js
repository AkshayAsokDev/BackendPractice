// Implementation of an exchange server

const express = require("express");
const server = express();
const PORT = 8089;

const ExchangeRoute = require("./Routes/ExchangeRoute");

// create 1 route leader
// exchange - to handle the functionality
server.use("/api/v1/exchange", ExchangeRoute);


server.listen(PORT, () => {
    console.log("Server has been started at port ", PORT);
})