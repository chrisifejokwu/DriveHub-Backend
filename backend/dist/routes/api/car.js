"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = __importDefault(require("../../controllers/carController"));
const router = (0, express_1.Router)();
const { getCars, createCar, findCarById, updateCar } = carController_1.default;
router.get("/", getCars);
router.post("/", createCar);
router.get("/:id", findCarById);
router.put("/:id", updateCar);
exports.default = router;
