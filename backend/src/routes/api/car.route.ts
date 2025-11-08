import { Router } from "express";
import CarController from "../../controllers/carController";
const carRoutes = Router();

const {getCars, createCar, findCarById,} = CarController;

carRoutes.get("/", getCars);
carRoutes.post("/", createCar);
carRoutes.get("/:id", findCarById);

export default carRoutes;
