import mongoose from 'mongoose';
export interface Booking {
    id: string;
    carId: string;
    userId: string;
    dateTime: Date;
    status: 'pending' | 'confirmed' | 'completed';
}
declare const BookingDbModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    status: "pending" | "confirmed" | "completed";
    carId: string;
    userId: string;
    dateTime: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    status: "pending" | "confirmed" | "completed";
    carId: string;
    userId: string;
    dateTime: NativeDate;
}, {}, {
    timestamps: true;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    status: "pending" | "confirmed" | "completed";
    carId: string;
    userId: string;
    dateTime: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    status: "pending" | "confirmed" | "completed";
    carId: string;
    userId: string;
    dateTime: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    status: "pending" | "confirmed" | "completed";
    carId: string;
    userId: string;
    dateTime: NativeDate;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    status: "pending" | "confirmed" | "completed";
    carId: string;
    userId: string;
    dateTime: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { BookingDbModel };
//# sourceMappingURL=Booking.d.ts.map