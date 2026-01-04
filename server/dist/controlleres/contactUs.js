import { ContactForm } from "../schema_models/ContactForm.js";
import logger from "../utils/logger.js";
export default async function contactUs(req, res, next) {
    try {
        let { name, email, serviceInterestedIn, message } = req.body;
        await ContactForm.insertOne({ name, email, serviceInterestedIn, message });
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