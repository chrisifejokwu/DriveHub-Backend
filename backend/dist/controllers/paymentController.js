"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payments_service_1 = __importDefault(require("../services/payments.service"));
const getPaymentDetails = async (req, res) => {
    const { getlistofpayments } = payments_service_1.default;
    const payList = await getlistofpayments();
    res.json(payList).status(200);
};
const createPayment = async (req, res) => {
    const payment = req.body;
    const { createPayment } = payments_service_1.default;
    const payData = await createPayment(payment);
    res.json(payData).status(201);
};
const findPaymentById = async (req, res) => {
    const { id } = req.params;
    const { findById } = payments_service_1.default;
    const payData = await findById(id);
    if (!payData) {
        return res.status(404).json({ error: "Payment not found" });
    }
    else {
        res.status(200).json(payData);
    }
};
const PaymentController = {
    getPaymentDetails,
    createPayment,
    findPaymentById,
};
exports.default = PaymentController;
