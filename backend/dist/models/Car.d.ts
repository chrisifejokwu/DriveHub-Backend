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
declare const CarDbModel: mongoose.Model<{
    id: string;
    model: string;
    description: string;
    make: string;
    year: string;
    price: number;
    imageUrl: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id: string;
    model: string;
    description: string;
    make: string;
    year: string;
    price: number;
    imageUrl: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    id: string;
    model: string;
    description: string;
    make: string;
    year: string;
    price: number;
    imageUrl: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id: string;
    model: string;
    description: string;
    make: string;
    year: string;
    price: number;
    imageUrl: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: string;
    model: string;
    description: string;
    make: string;
    year: string;
    price: number;
    imageUrl: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    id: string;
    model: string;
    description: string;
    make: string;
    year: string;
    price: number;
    imageUrl: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { CarDbModel };
//# sourceMappingURL=Car.d.ts.map