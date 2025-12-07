function getHome(req, res) {
    res.send("Welcome to the Fitness home page");
}

function getAbouts(req, res) {
    res.send("This page was made by Akshay for practicing backend concepts");
}

function getFitness(req, res) {
    res.send("Welcome to the Fitness home page");
}

module.exports = {
    getHome,
    getAbouts,
    getFitness
}