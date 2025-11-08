import { get } from 'http';
import mongoose from 'mongoose';

export interface Booking {
    id: string;
    carId: string;
    userId: string;
    dateTime: Date;
    status: 'pending' | 'confirmed' | 'completed';
}

const bookingSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose.Types.ObjectId().toString() },
    carId: { type: String, required: true },
    userId: { type: String, required: true },
    dateTime: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'completed'], default: 'pending' }
}, { timestamps: true });


const BookingDbModel = mongoose.model('Booking', bookingSchema);

export { BookingDbModel };




