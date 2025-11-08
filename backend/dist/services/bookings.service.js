"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Booking_1 = require("../models/Booking");
const getListOfBookings = async () => {
    const bookings = await Booking_1.BookingDbModel.find();
    return bookings.map((booking) => ({
        id: booking._id,
        carId: booking.carId,
        userId: booking.userId,
        dateTime: booking.dateTime,
        status: booking.status
    }));
};
const createBookings = async (booking) => {
    const newBooking = new Booking_1.BookingDbModel(booking);
    await newBooking.save();
    const { _id, carId, userId, dateTime, status } = newBooking;
    return { id: _id, carId, userId, dateTime, status };
};
const findBookingsById = async (id) => {
    const booking = await Booking_1.BookingDbModel.findById(id);
    if (!booking)
        return null;
    const { _id, carId, userId, dateTime, status } = booking;
    return { id: _id, carId, userId, dateTime, status };
};
const updateBookings = async (id, booking) => {
    const updatedBooking = await Booking_1.BookingDbModel.findByIdAndUpdate(id, booking, { new: true });
    if (!updatedBooking)
        return null;
    const { _id, carId, userId, dateTime, status } = updatedBooking;
    return { id: _id, carId, userId, dateTime, status };
};
const deleteBookingsById = async (id) => {
    const result = await Booking_1.BookingDbModel.findByIdAndDelete(id);
    return result !== null;
};
const BookingModel = {
    getListOfBookings,
    findBookingsById,
    createBookings,
    updateBookings,
    deleteBookingsById
};
exports.default = BookingModel;
