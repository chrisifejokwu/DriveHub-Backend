import { Car } from "../models/Car";
declare const CarModel: {
    getListOfCars: () => Promise<{
        id: import("mongoose").Types.ObjectId;
        make: string;
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown, {}, {}> & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<{
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}> & {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            } & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(): ModelType;
        } & string;
        year: string;
        price: number;
        imageUrl: string;
        description: string;
    }[]>;
    findById: (id: string) => Promise<{
        id: import("mongoose").Types.ObjectId;
        make: string;
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown, {}, {}> & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<{
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}> & {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            } & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(): ModelType;
        } & string;
        year: string;
        price: number;
        imageUrl: string;
        description: string;
    } | null>;
    create: (car: Car) => Promise<{
        id: import("mongoose").Types.ObjectId;
        make: string;
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown, {}, {}> & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<{
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}> & {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            } & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(): ModelType;
        } & string;
        year: string;
        price: number;
        imageUrl: string;
        description: string;
    }>;
    update: (id: string, car: Partial<Car>) => Promise<{
        id: import("mongoose").Types.ObjectId;
        make: string;
        model: {
            <ModelType = import("mongoose").Model<unknown, {}, {}, {}, import("mongoose").Document<unknown, {}, unknown, {}, {}> & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(name: string): ModelType;
            <ModelType = import("mongoose").Model<{
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            }, {}, {}> & {
                id: string;
                model: string;
                description: string;
                make: string;
                year: string;
                price: number;
                imageUrl: string;
            } & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            }, any>>(): ModelType;
        } & string;
        year: string;
        price: number;
        imageUrl: string;
        description: string;
    } | null>;
    deleteById: (id: string) => Promise<boolean>;
};
export default CarModel;
//# sourceMappingURL=cars.service.d.ts.map