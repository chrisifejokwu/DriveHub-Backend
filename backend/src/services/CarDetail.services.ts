// import CarDetail from "../controllers/CarDetail";
// import { CarDetail } from "../models/CarDetail";
// import CarDetailModel from "../models/CarDetail";

// const getCarDetails = async ()  => {
//     const cars = await CarDetailModel.find();
//     return cars.map((cars) => ({
//         id: cars._id,
//         carId: cars.carId,
//         color: cars.color,
//         mileage: cars.mileage,
//         transmission: cars.transmission,
//         fuelType: cars.fuelType,
//         vin: cars.vin,
//     }));
// };

// const createCarDetail = async (carDetail: CarDetail): Promise<CarDetail> => {
//     const newCarDetail = new CarDetailModel(carDetail);
//     return newCarDetail.save();
// };

// const updateCarDetail = async (id: string, carDetail: CarDetail): Promise<CarDetail | null> => {
//     return CarDetailModel.findByIdAndUpdate(id, carDetail, { new: true }).exec();
// };

// const deleteCarDetail = async (id: string): Promise<boolean> => {
//     const result = await CarDetailModel.findByIdAndDelete(id).exec();
//     return result !== null;
// };

// export const CarDetailService = {
//     getCarDetails,
//     createCarDetail,
//     updateCarDetail,
//     deleteCarDetail
// };



