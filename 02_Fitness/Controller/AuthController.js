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

async function login(req, res) {
    const {email ,password} = req.body;

    try {
        const savedUser = await AuthService.loginUser({
            email,
            password
        })
        res.status(200).json({
            message: "User logged in successfully",
            user: savedUser
        })
    }
    catch {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    register,
    login
};