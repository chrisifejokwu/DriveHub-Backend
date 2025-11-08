"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("../models/Car");
const getListOfCars = async () => {
    const cars = await Car_1.CarDbModel.find();
    return cars.map((cars) => ({
        id: cars._id,
        make: cars.make,
        model: cars.model,
        year: cars.year,
        price: cars.price,
        imageUrl: cars.imageUrl,
        description: cars.description,
    }));
};
const create = async (car) => {
    const newCar = new Car_1.CarDbModel(car);
    await newCar.save();
    const { _id, make, model, year, price, imageUrl, description } = newCar;
    return { id: _id, make, model, year, price, imageUrl, description };
};
const findById = async (id) => {
    const car = await Car_1.CarDbModel.findById(id);
    if (!car)
        return null;
    const { _id, make, model, year, price, imageUrl, description } = car;
    return { id: _id, make, model, year, price, imageUrl, description };
};
const update = async (id, car) => {
    const updatedCar = await Car_1.CarDbModel.findByIdAndUpdate(id, car, { new: true });
    if (!updatedCar)
        return null;
    const { _id, make, model, year, price, imageUrl, description } = updatedCar;
    return { id: _id, make, model, year, price, imageUrl, description };
};
const deleteById = async (id) => {
    const result = await Car_1.CarDbModel.findByIdAndDelete(id);
    return result !== null;
};
const CarModel = {
    getListOfCars,
    findById,
    create,
    update,
    deleteById
};
exports.default = CarModel;
