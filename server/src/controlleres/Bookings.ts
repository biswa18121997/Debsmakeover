import logger from "../utils/logger.js";
import { DiscordConnect } from "../utils/DiscordReporter.js";
import type { Request, Response } from "express";
import { Booking } from "../schema_models/Bookings.js";
export default async function createBooking(req: Request, res: Response) {
	try {
		const { name, email, phone, date, time, serviceMode, service, notes } = req?.body?.bookingData;

		// 1. Validation check
		if (!req?.body?.bookingData) {
			logger.error('Booking data not found');
			return res.status(400).json({ message: "bookingData is required" });
		}

		// 2. Map data from bookingData, not req.body
		const newBooking = await Booking.create({
			customerName: name,
			customerEmail: email,
			customerMobile: phone,
			bookingDate: new Date(), // Use a real Date object
			bookingForDate: date,
			bookingForTime: time,
			serviceMode: serviceMode,
			serviceType: service,
			additionalNotes: notes
		});

		// 3. Prepare Discord message using the saved document data
		const message =
			`📅 New Booking Received:
  Update Type: 'New Booking',
  Client Name: ${name}
  Service Mode: ${serviceMode}
  Service Name: ${service}
  Client Email: ${email}
  Client Mobile: ${phone}
  Service Date: ${date}
  Service Time: ${time}
  Booking Date: ${new Date().toLocaleString('en-US', {
				timeZone: 'Asia/Kolkata'
			})
			}`;

		await DiscordConnect(JSON.stringify(message));

		return res.status(201).json({
			message: "Booking created successfully",
			success: true,
			data: newBooking,
		});

	} catch (error: any) {
		// This will now catch Mongoose ValidationErrors specifically
		logger.error("Error while creating Booking:", error);

		return res.status(500).json({
			message: "Failed to create booking",
			error: error.message,
			details: error.errors // This helps debug which specific fields failed
		});
	}
}
