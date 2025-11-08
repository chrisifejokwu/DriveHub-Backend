"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookings_service_1 = __importDefault(require("../services/bookings.service"));
const getBookings = async (req, res) => {
    const { getListOfBookings } = bookings_service_1.default;
    const bookingList = await getListOfBookings();
    res.json(bookingList).status(200);
};
const createBooking = async (req, res) => {
    const booking = req.body;
    const { createBookings } = bookings_service_1.default;
    const bookingData = await createBookings(booking);
    res.json(bookingData).status(201);
};
const findBookingById = async (req, res) => {
    const { id } = req.params;
    const { findBookingsById } = bookings_service_1.default;
    const bookingData = await findBookingsById(id);
    if (!bookingData) {
        return res.status(404).json({ error: "Booking not found" });
    }
    else {
        res.status(200).json(bookingData);
    }
};
const BookingController = {
    getBookings,
    createBooking,
    findBookingById,
};
exports.default = BookingController;
