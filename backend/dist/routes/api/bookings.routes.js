"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingController_1 = __importDefault(require("../../controllers/bookingController"));
const router = (0, express_1.Router)();
const { getBookings, createBooking, findBookingById, } = bookingController_1.default;
router.get("/", getBookings);
router.post("/", createBooking);
router.get("/:id", findBookingById);
exports.default = router;
