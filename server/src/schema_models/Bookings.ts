import { ServiceType, type BookingsType } from "../types.js";
import mongoose from 'mongoose';


const BookingSchema = new mongoose.Schema<BookingsType>({
	customerName: { type: String, required: true },
	customerMobile: { type: String, required: true },
	customerEmail: { type: String, required: true },

	bookingDate: { type: Date, required: true },
	bookingForDate: { type: Date, required: true },
	bookingForTime: { type: String, required: true },

	serviceMode: { type: String, required: true, enum: ['home-service', 'onsite-service'] },
	additionalNotes: { type: String },

	serviceType: {
		type: String,
		enum: Object.values(ServiceType),  // <-- THE ENUM
		required: true,
	},
});

export const Booking = mongoose.model<BookingsType>("Booking", BookingSchema);
