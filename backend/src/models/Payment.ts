import { get } from 'http';
import mongoose from 'mongoose';

export interface Payment {
    id: string;
    amount: string;
    method: string;
    status: string;
}

const paymentSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose.Types.ObjectId().toString() },
    amount: { type: String, required: true },
    method: { type: String, required: true },
    status: { type: String, required: true },
});

const PaymentDbModel = mongoose.model('Payments', paymentSchema);

export { PaymentDbModel}; 






