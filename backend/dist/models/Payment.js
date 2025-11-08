"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDbModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const paymentSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose_1.default.Types.ObjectId().toString() },
    amount: { type: String, required: true },
    method: { type: String, required: true },
    status: { type: String, required: true },
});
const PaymentDbModel = mongoose_1.default.model('Payments', paymentSchema);
exports.PaymentDbModel = PaymentDbModel;
