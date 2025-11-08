import mongoose from "mongoose";
import logger from "../utils/logger";

const connectToDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_DB_URL as string);
        logger.info("connected to MongoDB");
    }catch(error) {
        logger.error("Error connecting to database" , error);
    }
};

export default connectToDB;
//This code connects to a MongoDB database using Mongoose