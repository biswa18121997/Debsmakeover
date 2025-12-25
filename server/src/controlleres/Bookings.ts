import mongoose from 'mongoose';
import type { BookingsType } from '../types.js';
import logger from '../utils/logger.js';
import { Booking } from '../schema_models/Bookings.js';
import type { Request, Response } from 'express';

export default async function createBooking(req: Request, res: Response) {
	try {
		const { bookingData } = req.body;
		console.log(req.body);
		if (!bookingData) {
			return res.status(400).json({ message: "bookingData is required" });
		}

		const newBooking = await Booking.create(bookingData);

		return res.status(201).json({
			message: "Booking created successfully",
			data: newBooking,
		});
	} catch (error: any) {
		logger.error("Error while creating Booking:", error);

		return res.status(500).json({
			message: "Failed to create booking",
			error: error.message,
		});
	}
}

