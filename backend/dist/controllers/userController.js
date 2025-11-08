"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("../services/user.services"));
const getUsers = async (req, res) => {
    const { getUsers } = user_services_1.default;
    const userList = await getUsers();
    res.status(200).json(userList);
};
const createUser = async (req, res) => {
    const user = req.body;
    const { createUser: createUserService } = user_services_1.default;
    const userData = await createUserService(user);
    res.status(201).json(userData);
};
const findUserByEmail = async (req, res) => {
    const { email } = req.params;
    const { getByEmail } = user_services_1.default;
    const userData = await getByEmail(email);
    if (!userData) {
        return res.status(404).json({ error: "User not found" });
    }
    else {
        res.status(200).json(userData);
    }
};
const UserController = {
    getUsers,
    createUser,
    findUserByEmail,
};
exports.default = UserController;
