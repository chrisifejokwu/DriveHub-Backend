"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_route_1 = __importDefault(require("./car.route"));
const user_route_1 = __importDefault(require("./user.route"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const payment_route_1 = __importDefault(require("./payment.route"));
const bookings_routes_1 = __importDefault(require("./bookings.routes"));
const routes = (0, express_1.Router)();
routes.use('/users', user_route_1.default);
routes.use('/cars', car_route_1.default);
routes.use('/auth', authRoutes_1.default);
routes.use('/payments', payment_route_1.default);
routes.use('/bookings', bookings_routes_1.default);
exports.default = routes;
