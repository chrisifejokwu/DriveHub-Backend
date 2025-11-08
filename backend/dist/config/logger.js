"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const winston_1 = __importDefault(require("winston"));
// import SeqHttpTransport from '../providers/auth/logger_transports/seq';
// Ensure directories exist
['logs/logs', 'logs/errors'].forEach(dir => {
    if (!fs_1.default.existsSync(dir)) {
        fs_1.default.mkdirSync(dir, { recursive: true });
    }
});
const currentDate = new Date();
const dataString = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
const logFile = `logs/logs/${dataString}.txt`;
const errorFile = `logs/errors/${dataString}.txt`;
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    defaultMeta: { service: 'Express-api-demo' },
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.simple()),
        }),
        // new winston.transports.File({ filename: logFile, level: 'info' }),
        new winston_1.default.transports.File({ filename: errorFile, level: 'error' }),
        // new SeqHttpTransport({
        //   serverUrl: process.env.SEQ_SERVER_URL as string,
        //   apiKey: '', // optional
        // }),
    ],
});
exports.default = logger;
