"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const getUsers = async () => {
    const users = await User_1.userDbModel.find();
    return users.map((user) => ({
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }));
};
const createUser = async (user) => {
    const newUser = new User_1.userDbModel(user);
    await newUser.save();
    const { _id, name, email, createdAt, updatedAt } = newUser;
    return { id: _id, name, email, createdAt, updatedAt };
};
const getByEmail = async (email) => {
    const user = await User_1.userDbModel.findOne({ email });
    if (!user)
        return null;
    const { _id, name, createdAt, updatedAt } = user;
    return { id: _id, name, email, createdAt, updatedAt };
};
const getById = async (id) => {
    const user = await User_1.userDbModel.findById(id);
    const { _id, name, email, createdAt, updatedAt } = user;
    return { id: _id, name, email, createdAt, updatedAt };
};
const getEncryptedPasswordByEmail = async (email) => {
    const user = await User_1.userDbModel.findOne({ email });
    const { password } = user || {};
    return password;
};
const isUserCredentialsValid = async (email, password) => {
    return (await User_1.userDbModel.exists({ email, password })) !== null;
};
const doesUserExistByEmail = async (email) => {
    return (await User_1.userDbModel.exists({ email })) !== null;
};
const deleteById = async (id) => {
    const result = await User_1.userDbModel.findByIdAndDelete(id);
    return result !== null;
};
const UserModel = {
    getUsers,
    createUser,
    deleteById,
    getByEmail,
    getById,
    getEncryptedPasswordByEmail,
    isUserCredentialsValid,
    doesUserExistByEmail
};
exports.default = UserModel;
