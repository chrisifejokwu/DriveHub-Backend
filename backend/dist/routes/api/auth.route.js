"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controllers/userController"));
const authRouter = (0, express_1.Router)();
const { login } = userController_1.default;
authRouter.post("/login", login);
authRouter.get("/", (req, res) => {
    res.send("Auth API is working");
});
exports.default = authRouter;
