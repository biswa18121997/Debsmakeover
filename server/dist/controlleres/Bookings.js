import logger from "../utils/logger.js";
import { DiscordConnect } from "../utils/DiscordReporter.js";
import { Booking } from "../schema_models/Bookings.js";
export default async function createBooking(req, res) {
    try {
        const { name, email, phone, date, time, serviceMode, service, notes } = req?.body?.bookingData;
        // 1. Validation check
        if (!req?.body?.bookingData) {
            logger.error('Booking data not found');
            return res.status(400).json({ message: "bookingData is required" });
        }
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
        // 3. Prepare Discord Embed
        const embed = {
            title: "📅 New Booking Received",
            color: 0x00ff00, // Green color
            fields: [
                { name: "Client Name", value: name, inline: true },
                { name: "Client Email", value: email, inline: true },
                { name: "Client Mobile", value: phone, inline: true },
                { name: "Service Mode", value: serviceMode, inline: true },
                { name: "Service Name", value: service, inline: true },
                { name: "Service Date", value: date, inline: true },
                { name: "Service Time", value: time, inline: true },
            ],
            footer: {
                text: `Booking Date: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`
            }
        };
        // Send as an object wraped in an 'embeds' array
        await DiscordConnect({ embeds: [embed] });
        // 3. Prepare Discord message using the saved document data
        //	await DiscordConnect(JSON.stringify(message));
        return res.status(201).json({
            message: "Booking created successfully",
            success: true,
            data: newBooking,
        });
    }
    catch (error) {
        // This will now catch Mongoose ValidationErrors specifically
        logger.error("Error while creating Booking:", error);
        return res.status(500).json({
            message: "Failed to create booking",
            error: error.message,
            details: error.errors // This helps debug which specific fields failed
        });
    }
}
//# sourceMappingURL=Bookings.js.map