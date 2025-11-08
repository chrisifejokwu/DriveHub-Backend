import { Booking } from "../models/Booking";
declare const BookingModel: {
    getListOfBookings: () => Promise<{
        id: import("mongoose").Types.ObjectId;
        carId: string;
        userId: string;
        dateTime: NativeDate;
        status: "pending" | "confirmed" | "completed";
    }[]>;
    findBookingsById: (id: string) => Promise<{
        id: import("mongoose").Types.ObjectId;
        carId: string;
        userId: string;
        dateTime: NativeDate;
        status: "pending" | "confirmed" | "completed";
    } | null>;
    createBookings: (booking: Booking) => Promise<{
        id: import("mongoose").Types.ObjectId;
        carId: string;
        userId: string;
        dateTime: NativeDate;
        status: "pending" | "confirmed" | "completed";
    }>;
    updateBookings: (id: string, booking: Partial<Booking>) => Promise<{
        id: import("mongoose").Types.ObjectId;
        carId: string;
        userId: string;
        dateTime: NativeDate;
        status: "pending" | "confirmed" | "completed";
    } | null>;
    deleteBookingsById: (id: string) => Promise<boolean>;
};
export default BookingModel;
//# sourceMappingURL=bookings.service.d.ts.map