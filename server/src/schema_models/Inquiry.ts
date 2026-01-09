import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	inquiryFor: {
		type: String,
		required: true,
	},
	notes: {
		type: String,
		required: true,
	}
});
export const Inquiry = mongoose.model('inquiry', InquirySchema);
