"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../../controllers/userController"));
const router = (0, express_1.Router)();
const { getUsers, createUser, findUserById, updateUser, deleteUser } = userController_1.default;
router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id", findUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
exports.default = router;
