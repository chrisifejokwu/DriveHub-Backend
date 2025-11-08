"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = __importDefault(require("../../controllers/paymentController"));
const paymentRoute = (0, express_1.Router)();
const { getPaymentDetails, createPayment, findPaymentById, } = paymentController_1.default;
paymentRoute.get("/", getPaymentDetails);
paymentRoute.post("/", createPayment);
paymentRoute.get("/:id", findPaymentById);
exports.default = paymentRoute;
