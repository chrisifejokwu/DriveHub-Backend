"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../utils/logger"));
const connectToDB = async () => {
    try {
        const connection = await mongoose_1.default.connect(process.env.MONGO_DB_URL);
        logger_1.default.info("connected to MongoDB");
    }
    catch (error) {
        logger_1.default.error("Error connecting to database", error);
    }
};
exports.default = connectToDB;
//This code connects to a MongoDB database using Mongoose
