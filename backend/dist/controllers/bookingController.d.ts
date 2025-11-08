import { Request, Response } from "express";
declare const BookingController: {
    getBookings: (req: Request, res: Response) => Promise<void>;
    createBooking: (req: Request, res: Response) => Promise<void>;
    findBookingById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default BookingController;
//# sourceMappingURL=bookingController.d.ts.map