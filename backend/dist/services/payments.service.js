"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = require("../models/Payment");
const getlistofpayments = async () => {
    const payments = await Payment_1.PaymentDbModel.find();
    return payments.map((payment) => ({
        id: payment._id,
        amount: payment.amount,
        method: payment.method,
        status: payment.status,
    }));
};
const createPayment = async (payment) => {
    const newPayment = new Payment_1.PaymentDbModel(payment);
    await newPayment.save();
    const { _id, amount, method, status } = newPayment;
    return { id: _id, amount, method, status };
};
const findById = async (id) => {
    const payment = await Payment_1.PaymentDbModel.findById(id);
    if (!payment)
        return null;
    const { _id, amount, method, status } = payment;
    return { id: _id, amount, method, status };
};
const updatePayment = async (id, payment) => {
    const updatedPayment = await Payment_1.PaymentDbModel.findByIdAndUpdate(id, payment, { new: true });
    if (!updatedPayment)
        return null;
    const { _id, amount, method, status } = updatedPayment;
    return { id: _id, amount, method, status };
};
const deleteById = async (id) => {
    const result = await Payment_1.PaymentDbModel.findByIdAndDelete(id);
    return result !== null;
};
const PaymentModel = {
    getlistofpayments,
    findById,
    createPayment,
    updatePayment,
    deleteById
};
exports.default = PaymentModel;
