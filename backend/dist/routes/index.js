"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes_1 = __importDefault(require("./userRoutes"));
const carRoutes_1 = __importDefault(require("./carRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const paymentRoutes_1 = __importDefault(require("./paymentRoutes"));
const bookingRoutes_1 = __importDefault(require("./bookingRoutes"));
const routes = (0, express_1.Router)();
routes.use('/users', userRoutes_1.default);
routes.use('/cars', carRoutes_1.default);
routes.use('/booking', bookingRoutes_1.default);
routes.use('/auth', authRoutes_1.default);
routes.use('/payments', paymentRoutes_1.default);
exports.default = routes;
