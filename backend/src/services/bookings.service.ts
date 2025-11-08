import { Booking, BookingDbModel } from "../models/Booking";

const getListOfBookings = async ()  => {
    const bookings = await BookingDbModel.find();
    return bookings.map((booking) => ({
        id: booking._id,
        carId: booking.carId,
        userId: booking.userId,
        dateTime: booking.dateTime,
        status: booking.status
    }));
}
const createBookings = async (booking: Booking) => {
    const newBooking = new BookingDbModel(booking);
    await newBooking.save();

    const {_id, carId, userId, dateTime, status} = newBooking;
    return {id: _id, carId, userId, dateTime, status};
}


const findBookingsById = async (id: string) => {
    const booking = await BookingDbModel.findById(id);
    if (!booking) return null;
    const {_id, carId, userId, dateTime, status} = booking;
    return {id: _id, carId, userId, dateTime, status};
}
const updateBookings = async (id: string, booking: Partial<Booking>) => {
    const updatedBooking = await BookingDbModel.findByIdAndUpdate(id, booking, { new: true });
    if (!updatedBooking) return null;
    const {_id, carId, userId, dateTime, status} = updatedBooking;
    return {id: _id, carId, userId, dateTime, status};
}
const deleteBookingsById = async (id: string) => {
    const result = await BookingDbModel.findByIdAndDelete(id);
    return result !== null;
}

const BookingModel = {
    getListOfBookings,
    findBookingsById,
    createBookings,
    updateBookings,
    deleteBookingsById
}

export default BookingModel


 