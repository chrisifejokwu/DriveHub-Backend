import mongoose from 'mongoose';
export interface Payment {
    id: string;
    amount: string;
    method: string;
    status: string;
}
declare const PaymentDbModel: mongoose.Model<{
    id: string;
    amount: string;
    method: string;
    status: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id: string;
    amount: string;
    method: string;
    status: string;
}, {}, mongoose.DefaultSchemaOptions> & {
    id: string;
    amount: string;
    method: string;
    status: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id: string;
    amount: string;
    method: string;
    status: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: string;
    amount: string;
    method: string;
    status: string;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    id: string;
    amount: string;
    method: string;
    status: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { PaymentDbModel };
//# sourceMappingURL=Payment.d.ts.map