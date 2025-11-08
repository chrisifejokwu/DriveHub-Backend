
import { Payment, PaymentDbModel } from "../models/Payment";

const getlistofpayments = async ()  => {
    const payments = await PaymentDbModel.find();
    return payments.map((payment) => ({
        id: payment._id,
        amount: payment.amount,
        method: payment.method,
        status: payment.status,
    }));
}
const createPayment = async (payment: Payment) => {
    const newPayment = new PaymentDbModel(payment);
    await newPayment.save();

    const {_id, amount, method, status} = newPayment;
    return {id: _id, amount, method, status};
}


const findById = async (id: string) => {
    const payment = await PaymentDbModel.findById(id);
    if (!payment) return null;
    const {_id, amount, method, status} = payment;
    return {id: _id, amount, method, status};
}
const updatePayment = async (id: string, payment: Partial<Payment>) => {
    const updatedPayment = await PaymentDbModel.findByIdAndUpdate(id, payment, { new: true });
    if (!updatedPayment) return null;
    const {_id, amount, method, status} = updatedPayment;
    return {id: _id, amount, method, status};
}
const deleteById = async (id: string) => {
    const result = await PaymentDbModel.findByIdAndDelete(id);
    return result !== null;
}

const PaymentModel = {
    getlistofpayments,
    findById,
    createPayment,
    updatePayment,
    deleteById
}

export default PaymentModel;


 