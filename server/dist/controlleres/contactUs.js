import { ContactForm } from "../schema_models/ContactForm.js";
import logger from "../utils/logger.js";
import { DiscordConnect } from '../utils/DiscordReporter.js';
export default async function contactUs(req, res, next) {
    try {
        let { name, email, serviceInterestedIn, message } = req.body;
        await ContactForm.insertOne({ name, email, serviceInterestedIn, message });
        const successEmbed = {
            title: "📩 New Contact Form Submission",
            color: 0x3498db, // Blue color
            fields: [
                { name: "Name", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Service Interested", value: serviceInterestedIn || "Not Specified", inline: false },
                { name: "Message", value: message || "No message provided", inline: false }
            ],
            timestamp: new Date().toISOString(),
            footer: { text: "Contact Form System" }
        };
        // 2. Send to Discord as an object
        await DiscordConnect({ embeds: [successEmbed] });
        logger.info('contact form submitted', req.body);
        return res.status(201).json({
            sucess: true,
            message: 'contact form submitted sucessfully!..You can expect a call/email soon'
        });
    }
    catch (error) {
        logger.error(error);
        return res.status(500).json({
            message: 'internal server error',
            error
        });
    }
}
//# sourceMappingURL=contactUs.js.map