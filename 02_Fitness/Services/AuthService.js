const UserModel = require("../Models/UserModel");
const bcrypt = require('bcrypt');

class AuthService {
    // Implement registration and login logic here

    static async registerUser({ name, age, password, email, contact }) {
        // Registration logic

        // model object of this 
        const userModelObject = UserModel({
            name: name,
            age: age,
            password: await AuthService.hashPassword(password),
            email: email,
            contact: contact
        });

        // saving to the database

        try {
            const savedUser = await userModelObject.save();
            return savedUser;
        } catch (error) {
            return error;
        }

    }

    static async hashPassword(plainPassword) {
        const saltRounds = 10; // how many time I have to hash
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        return hashedPassword;
    }

    static loginUser(credentials) {
        // Login logic
    }
}

module.exports = AuthService;