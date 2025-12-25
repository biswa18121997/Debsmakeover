import { type BookingsType } from "../types.js";
import mongoose from 'mongoose';
export declare const Booking: mongoose.Model<BookingsType, {}, {}, {}, mongoose.Document<unknown, {}, BookingsType, {}, mongoose.DefaultSchemaOptions> & BookingsType & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, BookingsType>;
//# sourceMappingURL=Bookings.d.ts.map