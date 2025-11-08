import { Request, Response } from "express";
import BookingService from "../services/bookings.service";
import { Booking } from "../models/Booking";

const getBookings = async (req: Request, res: Response) => {
  const { getListOfBookings } = BookingService;
  const bookingList = await getListOfBookings();
  res.json(bookingList).status(200);
};

const createBooking = async (req: Request, res: Response) => {
  const booking = req.body;
  const { createBookings } = BookingService;
  const bookingData = await createBookings(booking);
  res.json(bookingData).status(201);
};

const findBookingById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { findBookingsById } = BookingService;
  const bookingData = await findBookingsById(id);
  if (!bookingData) {
    return res.status(404).json({ error: "Booking not found" });
  } else {
    res.status(200).json(bookingData);
  }
};

const BookingController = {
  getBookings,
  createBooking,
  findBookingById,

};

export default BookingController;
