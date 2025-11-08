"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cars_service_1 = __importDefault(require("../services/cars.service"));
const getCars = async (req, res) => {
    const { getListOfCars } = cars_service_1.default;
    const carList = await getListOfCars();
    res.json(carList).status(200);
};
const createCar = async (req, res) => {
    const car = req.body;
    const { create } = cars_service_1.default;
    const carData = await create(car);
    res.json(carData).status(201);
};
const findCarById = async (req, res) => {
    const { id } = req.params;
    const { findById } = cars_service_1.default;
    const carData = await findById(id);
    if (!carData) {
        return res.status(404).json({ error: "Car not found" });
    }
    else {
        res.status(200).json(carData);
    }
};
const CarController = {
    getCars,
    createCar,
    findCarById,
};
exports.default = CarController;
