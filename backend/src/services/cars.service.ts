import { Car, CarDbModel } from "../models/Car";

const getListOfCars = async ()  => {
    const cars = await CarDbModel.find();
    return cars.map((cars) => ({
        id: cars._id,
        make: cars.make,
        model: cars.model,
        year: cars.year,
        price: cars.price,
        imageUrl: cars.imageUrl,
        description: cars.description,

       
    }));
}
const create = async (car: Car) => {
    const newCar = new CarDbModel(car);
    await newCar.save();


    const {_id, make, model, year, price, imageUrl, description} = newCar;
    return {id: _id, make, model, year, price, imageUrl, description};
}

const findById = async (id: string) => {
    const car = await CarDbModel.findById(id);
    if (!car) return null;
    const {_id, make, model, year, price, imageUrl, description} = car;
    return {id: _id, make, model, year, price, imageUrl, description};
}
const update = async (id: string, car: Partial<Car>) => {
    const updatedCar = await CarDbModel.findByIdAndUpdate(id, car, { new: true });
    if (!updatedCar) return null;
    const {_id, make, model, year, price, imageUrl, description} = updatedCar;
    return {id: _id, make, model, year, price, imageUrl, description};
}
const deleteById = async (id: string) => {
    const result = await CarDbModel.findByIdAndDelete(id);
    return result !== null;
};

const CarModel = {
    getListOfCars,
    findById,
    create,
    update,
    deleteById
}

export default CarModel


 