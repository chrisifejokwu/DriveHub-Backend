"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carController_1 = __importDefault(require("../../controllers/carController"));
const carRoutes = (0, express_1.Router)();
const { getCars, createCar, findCarById, } = carController_1.default;
carRoutes.get("/", getCars);
carRoutes.post("/", createCar);
carRoutes.get("/:id", findCarById);
exports.default = carRoutes;
