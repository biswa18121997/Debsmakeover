import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SEO } from '../utils/SEO';
import { useState } from "react";
import { Spinner } from "./ui/spinner";
export default function Contact() {
	const currentPath = useLocation()?.pathname;
	const isContactRoute = currentPath == '/contact' ? true : false;

	//	interface contactFormType {
	//		email: string;
	//		name: string;
	//		serviceInterestedIn: string;
	//		message: string;
	//	}
	const [loadingSpinner, setLoadingSpinner] = useState(false);
	const [sucessMessage, setSucessMessage] = useState('');
	const [contactForm, setContactForm] = useState({
		email: '',
		name: '',
		serviceInterestedIn: '',
		message: ''
	});
	async function submitFormData(e: React.FormEvent) {
		if (e) e.preventDefault();
		try {
			setLoadingSpinner(true);
			if (contactForm?.email.length == 0) {
				alert('email is required');
				setSucessMessage('email is required');
				return;
			}
			console.log(contactForm);
			const submittingContactForm = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(contactForm)
			});
			const response = await submittingContactForm.json();
			if (!response?.sucess) {
				setSucessMessage('something went wrong . please try again..!');
				setLoadingSpinner(true);
				return;
			}
			setSucessMessage(response?.message);
			setLoadingSpinner(false)
			return;
		} catch (error) {
			console.log(error);
			setSucessMessage('something went wrong..please try again');
			setLoadingSpinner(false);
			return
		}
		finally {
			setLoadingSpinner(false);
		}
	}
	return (
		<section id="contact" className="py-24 bg-primary/5 relative top-10">
			{isContactRoute && <SEO
				title="Contact Debleena | Makeup Artist in Kolkata (Salt Lake & South Kolkata)"
				description="Get in touch with DebsMakeover for bridal and party makeup inquiries in Kolkata. Available for on-site services in Salt Lake, New Town, Gariahat, and beyond."
				canonical="https://debsmakeover.vercel.app/contact-us"
			/>}
			<div className="container mx-auto px-6">
				<div className="grid md:grid-cols-2 gap-16">
					<div>
						<h2 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h2>
						<p className="text-muted-foreground mb-12 text-lg">
							Ready to create something beautiful? Fill out the form or reach out directly for inquiries and bookings.
						</p>

						<div className="space-y-8">
							<div>
								<h3 className="text-lg font-medium mb-2">Email</h3>

								<Link
									to="/contact-us"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									debleenadasgupta381@gmail.com
								</Link>

							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">Studio</h3>
								<p className="text-muted-foreground">
									513/1, Ramkrishna Nagar Rd,<br /> Purbapara, Purbachal, Thakurpukur,<br /> Kolkata, West Bengal 700063
								</p>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-4">Follow</h3>
								<div className="flex gap-4">
									<Link to={`https://www.instagram.com/debleenadasgupta/`} target="_blank" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
										<Instagram className="w-5 h-5" />
									</Link>
									<Link to={`https://www.facebook.com/debleenadasgupta381`} target="_blank" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
										<Facebook className="w-5 h-5" />
									</Link>
									<Link to={`mail.google.com`} target="_blank" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
										<Mail className="w-5 h-5" />
									</Link>
								</div>
							</div>
							<Link to={`https://wa.me/919123873482`} target="_blank">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									animate={{ y: [0, -4, 0] }}
									transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
									className="flex items-center gap-3 bg-green-500 text-white px-3 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow w-fit"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 16 16"
										className="w-6 h-6"
									>
										<path d="M13.601 2.326A7.854 7.854 0 0 0 8.017.002C3.72.002.254 3.468.254 7.765c0 1.368.355 2.7 1.028 3.878L.003 16l4.465-1.229a7.74 7.74 0 0 0 3.55.904h.003c4.297 0 7.763-3.466 7.763-7.763a7.73 7.73 0 0 0-2.183-5.586zM8.02 14.186a6.42 6.42 0 0 1-3.27-.896l-.234-.14-2.647.729.707-2.583-.152-.244A6.42 6.42 0 0 1 1.59 7.77c0-3.55 2.884-6.434 6.432-6.434 1.719 0 3.335.668 4.552 1.885A6.4 6.4 0 0 1 14.457 7.77c0 3.55-2.884 6.416-6.437 6.416zm3.546-4.842c-.194-.097-1.151-.568-1.33-.634-.178-.065-.308-.097-.438.097-.129.194-.502.634-.616.764-.113.129-.226.145-.42.048-.194-.097-.82-.302-1.563-.963-.578-.515-.97-1.153-1.084-1.347-.113-.194-.012-.299.085-.396.087-.087.194-.226.291-.339.097-.113.129-.194.194-.323.065-.129.032-.242-.016-.339-.048-.097-.438-1.056-.6-1.447-.158-.381-.32-.329-.438-.335-.113-.006-.242-.006-.372-.006-.129 0-.339.049-.517.242-.178.194-.678.662-.678 1.618s.695 1.875.791 2.005c.097.129 1.362 2.077 3.3 2.913.462.2.823.319 1.104.408.464.147.886.127 1.22.077.372-.056 1.151-.469 1.314-.923.162-.453.162-.841.113-.923-.048-.081-.178-.129-.372-.226z" />
									</svg>
									<span className="font-medium text-2xl">Get in Quick Touch</span>
								</motion.div>

							</Link>
						</div>
					</div>

					<motion.form
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.8 }}
						className="space-y-6 bg-background p-8 shadow-sm"
						onSubmit={submitFormData}

					>
						{sucessMessage && <h1 className="text-red-600 font-semibold">{sucessMessage}</h1>}
						<div className="grid grid-cols-2 gap-6">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium text-muted-foreground"
								>Name</label>
								<Input id="name"
									placeholder="Rohit Sharma"
									className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
									onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
								<Input id="email" type="email"
									placeholder="jane@example.com"
									className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent"
									onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
								/>
							</div>
						</div>

						<div className="space-y-2">
							<label htmlFor="service" className="text-sm font-medium text-muted-foreground">Service Interested In</label>
							<select id="service"
								className="w-full border-0 border-b border-input py-2 text-sm bg-transparent focus:outline-none focus:border-primary"
								value={contactForm.serviceInterestedIn}
								onChange={(e) => setContactForm({ ...contactForm, serviceInterestedIn: e.target.value })}
							>
								<option value="">Select a service...</option>
								<option value="bridal">Bridal Makeup</option>
								<option value="editorial">Editorial / Photoshoot</option>
								<option value="event">Special Occasion</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div className="space-y-2">
							<label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
							<Textarea id="message" placeholder="Enter Your Message Here..."
								className="min-h-[150px] border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary bg-transparent resize-none"
								onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
							/>
						</div>

						<Button type="submit"
							disabled={loadingSpinner ? true : false}
							className="w-full rounded-none py-6 flex justify-center text-lg bg-primary text-primary-foreground hover:bg-primary/90">{loadingSpinner && <Spinner h-10 w-10 text-blue-600 />}
							Send Message
						</Button>
						{loadingSpinner && <h1>Loading..!!</h1>}
					</motion.form>
				</div>
			</div>
		</section >
	);
}

