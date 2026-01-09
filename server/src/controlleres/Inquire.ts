import mongoose from "mongoose";
import type { Request, Response } from "express";
import { DiscordConnect } from "../utils/DiscordReporter.js";
import { Inquiry } from '../schema_models/Inquiry.js';
import logger from "../utils/logger.js";
export default async function Inquire(req: Request, res: Response) {
	try {
		const { name, phone, notes } = req?.body;
		const inquiryFor = req?.body?.service;
		await Inquiry.insertOne({ name, phone, inquiryFor, notes });

		const successEmbed: any = {
			title: "📩 New Inquiry Form Submission",
			color: 0x3498db, // Blue color
			fields: [
				{ name: "Name", value: name, inline: true },
				{ name: "Phone", value: phone, inline: true },
				{ name: "Inquiry Received For", value: inquiryFor || "Not Specified", inline: false },
				{ name: "Message", value: notes || "No message provided", inline: false }
			],
			timestamp: new Date().toISOString(),
			footer: { text: "Inquiry Form System" }
		};

		// 2. Send to Discord as an object
		await DiscordConnect({ embeds: [successEmbed] });
		logger.info('contact form submitted', req.body);
		return res.status(201).json({
			sucess: true,
			message: 'Inquiry form submitted sucessfully!..You can expect a call/email soon'
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			sucess: false,
			message: 'internal server error',
			error: error
		});
	}
}
