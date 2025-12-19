const AuthService = require("../Service/AuthService");

async function register(req, res) {
    const { name, age, password, email, contact } = req.body; 
    
    // call the service layer


    try {
        const registeredUser = await AuthService.registerUser({ name, age, password, email, contact });
        res.status(201).json({ message: "User registered successfully", user: registeredUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function login(req, res) {}

module.exports = {
    register,
    login
};