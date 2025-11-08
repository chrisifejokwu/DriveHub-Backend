import { get } from 'http';
import mongoose from 'mongoose';

export interface Car {
    id: string;
    make: string;
    model: string;
    year: string;
    price: number;
    imageUrl: string;
    description: string;
}

const carSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true, default: () => new mongoose.Types.ObjectId().toString() },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
   
});


const CarDbModel = mongoose.model('Cars', carSchema);

export { CarDbModel };

