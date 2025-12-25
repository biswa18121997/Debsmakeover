import mongoose from 'mongoose';

const ContactFormSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	serviceInterestedIn: {
		type: String,
		required: true,
		default: 'other',
		enum: ['bridal_makeup', 'editorial/photoshoot', 'speecial_occasion', 'other']
	},
	message: {
		type: String,
		required: true,
		default: 'no message',

	}
});
export const ContactForm = mongoose.model('contact-form', ContactFormSchema);
