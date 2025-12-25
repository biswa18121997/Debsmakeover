import { ContactForm } from "../schema_models/ContactForm.js";
import logger from "../utils/logger.js";
export default async function contactUs() {
    try {
        const { name, email, interestedService, message } = req.body;
        await ContactForm.inserOne({ name, email, interestedService, message });
        res.status(201).json({
            sucess: true,
            message: 'contact form submitted sucessfully!..You can expect a call/email soon'
        });
        logger.info('contact form submitted', req.body);
    }
    catch (error) {
        logger.error(error);
        res.status(500).json({
            message: 'internal server error',
            error
        });
    }
}
//# sourceMappingURL=contactUs.js.map