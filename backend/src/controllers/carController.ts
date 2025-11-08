import { Request, Response } from "express";
import CarService from "../services/cars.service";
import { Car } from "../models/Car";

const getCars = async (req: Request, res: Response) => {
  const { getListOfCars } = CarService;
  const carList = await getListOfCars();
  res.json(carList).status(200);
  
};

const createCar = async (req: Request, res: Response) => {
  const car = req.body as Car
  const{create} = CarService;
  const carData = await create(car)
  res.json(carData).status(201);
};

const findCarById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { findById } = CarService;
  const carData = await findById(id);
  if (!carData) {
    return res.status(404).json({ error: "Car not found" });
  } else {
    res.status(200).json(carData);
  }
};

const CarController = {
  getCars,
  createCar,
  findCarById,

};

export default CarController;
