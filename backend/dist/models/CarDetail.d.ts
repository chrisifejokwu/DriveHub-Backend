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
declare const CarDetailModel: mongoose.Model<CarDetail, {}, {}, {}, mongoose.Document<unknown, {}, CarDetail, {}, {}> & CarDetail & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export { CarDetailModel };
//# sourceMappingURL=CarDetail.d.ts.map