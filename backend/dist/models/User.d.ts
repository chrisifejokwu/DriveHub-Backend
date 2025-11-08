import mongoose from 'mongoose';
export interface User {
    id: string;
    name: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
declare const userDbModel: mongoose.Model<{
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}, {}, mongoose.DefaultSchemaOptions> & {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { userDbModel };
//# sourceMappingURL=User.d.ts.map