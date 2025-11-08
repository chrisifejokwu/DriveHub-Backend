"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarDetailModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const carDetailSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true },
    carId: { type: String, required: true },
    color: { type: String, required: true },
    mileage: { type: Number, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    vin: { type: String, required: true },
});
const CarDetailModel = mongoose_1.default.model('CarDetail', carDetailSchema);
exports.CarDetailModel = CarDetailModel;
