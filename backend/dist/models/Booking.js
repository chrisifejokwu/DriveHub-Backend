"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingDbModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookingSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose_1.default.Types.ObjectId().toString() },
    carId: { type: String, required: true },
    userId: { type: String, required: true },
    dateTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' }
}, { timestamps: true });
const BookingDbModel = mongoose_1.default.model('Booking', bookingSchema);
exports.BookingDbModel = BookingDbModel;
