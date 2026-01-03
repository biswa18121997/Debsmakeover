import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import InquiryForm from "./InquiryForm";
import { useLocation } from "react-router-dom";
import { SEO } from "../utils/SEO";
const services = [
	{
		title: "Bridal Makeup",
		//price: "$350+",
		description: "Includes consultation, trial run, and day-of application with premium lashes.",
		features: ["90min Consultation", "Skin Prep & Priming", "Premium Lashes Included", "Touch-up Kit"],
		props: 'bridal makeup'
	},
	{
		title: "Editorial & Photoshoot",
		//price: "$150/hr",
		description: "Creative direction and application for fashion, commercial, or personal branding shoots.",
		features: ["Creative Direction", "High-Definition Finish", "On-set Touch-ups", "Multiple Look Changes"],
		props: 'Editorial and Photoshoot'
	},
	{
		title: "Special Occasion",
		//	price: "$120",
		description: "Long-lasting glam for galas, parties, or red carpet events.",
		features: ["Custom Color Match", "Contouring & Highlighting", "Lashes Included", "24hr Wear Setting"],
		props: 'Special ocassion'
	},
];

export default function Services() {
	const currentRoute = useLocation();
	//	console.log(currentRoute);
	const isServiceRoute = currentRoute?.pathname == '/services' ? true : false;

	// We only need one piece of state: the name of the service (or null)
	const [selectedService, setSelectedService] = useState<string | null>(null);
	return (
		<section id="services" className="py-24 bg-secondary/30">
			{isServiceRoute && <SEO
				title="Makeup Services by Debleena | Best Bridal Makeup Artist in Kolkata"
				description="Get a Glamorous Look at Home and On-site by, a certified professional makeup artist in Kolkata with 6+ years of experience. Specializing in Bengali bridal, editorial, and party makeup."
				canonical="https://debsmakeover.vercel.app/services"
			/>}


			{/* 1. MOVE FORM OUTSIDE THE LOOP - Place it here so it's a single global modal */}
			{selectedService && (
				<InquiryForm
					isOpen={true}
					selectedInquiry={selectedService}
					onClose={() => setSelectedService(null)} // This closes it by setting state to null
				/>
			)}

			<div className="container mx-auto px-6">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Services</span>
					<h2 className="text-4xl md:text-5xl font-serif mb-6">Curated Experiences</h2>
					<p className="text-muted-foreground">
						Tailored makeup services designed to enhance your natural beauty.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className="bg-background p-8 md:p-10 border border-transparent hover:border-primary/10 transition-all hover:shadow-lg"
						>
							{/* THE FORM WAS HERE BEFORE - REMOVED FROM HERE */}

							<div className="flex justify-between items-baseline mb-4">
								<h3 className="text-2xl font-serif">{service.title}</h3>
							</div>
							<p className="text-muted-foreground mb-8 leading-relaxed">
								{service.description}
							</p>
							<ul className="space-y-4 mb-10">
								{service.features.map((feature, i) => (
									<li key={i} className="flex items-center text-sm text-foreground/80">
										<Check className="w-4 h-4 mr-3 text-primary" />
										{feature}
									</li>
								))}
							</ul>
							<Button
								onClick={() => setSelectedService(service.props)} // 2. Trigger the state
								variant="outline"
								className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors"
							>
								Inquire
							</Button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
