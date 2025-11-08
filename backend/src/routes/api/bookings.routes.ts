import { Router } from "express";
import BookingController from "../../controllers/bookingController";

const router = Router();
const {getBookings, createBooking, findBookingById,} = BookingController;

router.get("/", getBookings);
router.post("/", createBooking);
router.get("/:id", findBookingById);

export default router;
