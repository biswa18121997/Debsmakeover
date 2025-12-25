import 'dotenv/config';
import express from 'express';
import DatabaseConnection from './utils/DatabaseConnection.js';
import { rateLimit } from 'express-rate-limit';
import logger from './utils/logger.js';
import Routes from './Routes.js';

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
	ipv6Subnet: 56
});

app.use(limiter);
app.use(express.json());
// Must be FIRST before logging req.body


app.use((req, res, next) => {
	logger.info(`Received ${req.method} request to ${req.url}`);
	logger.info(`Request body: ${JSON.stringify(req.body)}`);
	next();
});

// Base path for all routes
app.use("/api", router);

// Register routes
Routes(router);

// DB connect
DatabaseConnection();

app.listen(PORT, () => {
	console.log('server is live at port :', PORT);
});

