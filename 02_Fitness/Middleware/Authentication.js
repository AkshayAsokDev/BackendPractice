// Middleware for authentication

const PASSWORD = process.env.PASSWORD;
// console.log("Password : ", PASSWORD);

function CheckAuthentication (req, res, next) {

    const headers = req.headers;
    const passwordEntry = headers["authorization"];
    // console.log("Entered password : ", passwordEntry)

    if (passwordEntry !== PASSWORD) {
        res.status(401).json({
            "message" : "Please authenticate with correct credentials"
        })
    }
    else {
        // authenticated
        next()
    }
}

module.exports = {
    CheckAuthentication
}