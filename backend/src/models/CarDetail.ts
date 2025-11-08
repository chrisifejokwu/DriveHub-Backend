import mongoose from "mongoose";
export interface CarDetail {
    id: string;
    carId: string;
    color: string;
    mileage: number;
    transmission: string;
    fuelType: string;
    vin: string;
}

const carDetailSchema = new mongoose.Schema<CarDetail>({
    id: { type: String, required: true },
    carId: { type: String, required: true },
    color: { type: String, required: true },
    mileage: { type: Number, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    vin: { type: String, required: true },
});

const CarDetailModel = mongoose.model<CarDetail>('CarDetail', carDetailSchema);


export { CarDetailModel };