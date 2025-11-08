"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarDbModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const carSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose_1.default.Types.ObjectId().toString() },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
});
const CarDbModel = mongoose_1.default.model('Cars', carSchema);
exports.CarDbModel = CarDbModel;
