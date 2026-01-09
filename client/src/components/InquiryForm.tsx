import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Spinner } from "./ui/spinner";

// Define types for the props
interface InquiryFormProps {
	selectedInquiry: string | null;
	isOpen: boolean;
	onClose: () => void;
}

const InquiryForm = ({ selectedInquiry, isOpen, onClose }: InquiryFormProps) => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		service: "",
		notes: "",
	});
	const [loading, setLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState('');


	useEffect(() => {
		if (selectedInquiry) {
			setFormData((prev) => ({ ...prev, service: selectedInquiry }));
		}
	}, [selectedInquiry]);

	// Type the change event
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	// Type the form submission event
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setResponseMessage('');

		try {
			const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/inquire`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (!response.ok || !data.success) {
				setLoading(false);
				setResponseMessage(data.message || 'Something went wrong');
				return;
			}

			// SUCCESS PATH
			setResponseMessage(data.message || 'Submitted successfully!');
			setLoading(false);

			setFormData({ name: '', phone: '', service: selectedInquiry || '', notes: '' });

			// 1. Reset the form fields immediately

			// 2. Wait 2 seconds so the user can read the success message, then close
			setTimeout(() => {
				onClose();
				// 3. Clear the message AFTER it closes so it's clean for next time
				setResponseMessage('');
			}, 2000);

		} catch (error) {
			console.error("Submission error:", error);
			setLoading(false);
			setResponseMessage('Something went wrong');
		}
	};
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
					/>
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white z-[101] shadow-2xl overflow-hidden rounded-sm"
					>
						<div className="h-1.5 w-full bg-primary" />
						<div className="p-8 md:p-12 relative">
							<button onClick={onClose} className="absolute top-6 right-6 text-muted-foreground hover:text-primary">
								<X size={24} />
							</button>
							<div className="text-center mb-10">
								<span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2 block">Booking Inquiry</span>
								<h2 className="text-3xl md:text-4xl font-serif text-slate-900 italic lowercase">{formData.service}</h2>
							</div>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-1.5">
									<label className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold ml-1">Full Name</label>
									<input type="text" id="name" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-primary bg-transparent" value={formData.name} onChange={handleChange} required />
								</div>
								<div className="space-y-1.5">
									<label className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold ml-1">Phone Number</label>
									<input type="tel" id="phone" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-primary bg-transparent" value={formData.phone} onChange={handleChange} required />
								</div>
								<div className="space-y-1.5">
									<label className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold ml-1">Notes</label>
									<textarea id="notes" rows={3} className="w-full border border-slate-100 p-4 focus:outline-none focus:border-primary bg-slate-50/50" value={formData.notes} onChange={handleChange} />
								</div>
								<button type="submit" disabled={loading} className="w-full bg-slate-900 text-white py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all duration-500">
									{loading && <Spinner className="h-10 w-10" />}
									Request Consultation
								</button>
							</form>
						</div>{responseMessage && (
							<p className={`mt-4 text-center text-lg font-medium ${responseMessage.includes('wrong') ? 'text-red-600' : 'text-emerald-600'
								}`}>
								{responseMessage}
							</p>
						)}
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default InquiryForm;
