import mongoose from "mongoose";
import 'dotenv/config';
import logger from "./logger.js";
export const DatabaseConnection = () => {
    console.log(process.env.MONGO_DB_URI);
    logger.info('connectng to db !!...');
    mongoose.connect(process.env.MONGO_DB_URI)
        .then(() => {
        logger.info('Database Connected');
    }).catch((error) => {
        logger.info('Error while connecting to DB', error);
    });
};
export default DatabaseConnection;
//# sourceMappingURL=DatabaseConnection.js.map