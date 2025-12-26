import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Make sure to have lucide-react installed

const InquiryForm = ({ selectedInquiry, isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		service: "",
		notes: "",
	});

	useEffect(() => {
		if (selectedInquiry) {
			setFormData((prev) => ({ ...prev, service: selectedInquiry }));
		}
	}, [selectedInquiry]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const submittingInquiy = await fetch(`${import.meta.env.VITE_API_BASE_URL}/inquiry`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			const inquiryResponse = await submittingInquiy.json();
			if (inquiryResponse.sucess == 'true')
				alert('Your Inquiry has been Submitted. Expect a communication from our side soon ..!');
		} catch (error) {
			console.log(error)
		}
		console.log("Submitting:", formData);
		alert("Thank you! Your inquiry has been sent.");
		onClose();
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
					/>

					{/* Modal Card */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white z-[101] shadow-2xl overflow-hidden rounded-sm"
					>
						{/* Design Element: Decorative Top Bar */}
						<div className="h-1.5 w-full bg-primary" />

						<div className="p-8 md:p-12 relative">
							<button
								onClick={onClose}
								className="absolute top-6 right-6 text-muted-foreground hover:text-primary transition-colors"
							>
								<X size={24} />
							</button>

							<div className="text-center mb-10">
								<span className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-2 block">
									Booking Inquiry
								</span>
								<h2 className="text-3xl md:text-4xl font-serif text-slate-900 lowercase italic">
									{formData.service}
								</h2>
							</div>

							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="space-y-1.5">
									<label className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
										Full Name
									</label>
									<input
										type="text"
										id="name"
										placeholder="Jane Doe"
										className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-primary transition-colors bg-transparent placeholder:text-slate-300"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="space-y-1.5">
									<label className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										placeholder="+1 (555) 000-0000"
										className="w-full border-b border-slate-200 py-3 px-1 focus:outline-none focus:border-primary transition-colors bg-transparent placeholder:text-slate-300"
										value={formData.phone}
										onChange={handleChange}
										required
									/>
								</div>

								<div className="space-y-1.5">
									<label className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold ml-1">
										Additional Notes
									</label>
									<textarea
										id="notes"
										placeholder="Event date, location, or special requests..."
										rows={3}
										className="w-full border border-slate-100 p-4 focus:outline-none focus:border-primary transition-colors bg-slate-50/50 resize-none placeholder:text-slate-300"
										value={formData.notes}
										onChange={handleChange}
									/>
								</div>

								<button
									type="submit"
									className="w-full bg-slate-900 text-white py-4 text-xs uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all duration-500 mt-4 group relative overflow-hidden"
								>
									<span className="relative z-10">Request Consultation</span>
								</button>

								<p className="text-center text-[10px] text-slate-400 italic">
									I will get back to you within 24-48 hours.
								</p>
							</form>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default InquiryForm;
