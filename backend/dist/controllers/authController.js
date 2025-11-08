"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("../services/user.services"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check user exists
        const user = await user_services_1.default.getByEmail(email);
        if (!user)
            return res.status(400).json({ message: "User not found" });
        // Ensure user has password property
        if (!('password' in user)) {
            return res.status(500).json({ message: "User record is missing password field" });
        }
        // Check password
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid password" });
        // Create token
        const token = jsonwebtoken_1.default.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.default = {
    loginUser,
};
