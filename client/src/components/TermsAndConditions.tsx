import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Scale, ShieldCheck, AlertCircle } from "lucide-react";

const DetailedTerms: React.FC = () => {
	const lastUpdated = "December 27, 2025";

	return (
		<div className="min-h-screen bg-[#fafafa] py-16 px-4 md:px-8">
			<div className="max-w-5xl mx-auto space-y-8">

				{/* Header Section */}
				<div className="text-center space-y-4 mb-12">
					<h1 className="text-4xl font-serif font-light tracking-tight text-slate-900 md:text-5xl">
						Terms & Conditions
					</h1>
					<p className="text-slate-500 max-w-2xl mx-auto">
						Please read these terms carefully. They contain important information regarding your legal rights,
						booking obligations, and health & safety protocols for 2025.
					</p>
					<div className="flex justify-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-400">
						<span>Revised: {lastUpdated}</span>
						<span>•</span>
						<span>Version 2.4</span>
					</div>
				</div>

				<Card className="border-none shadow-2xl bg-white overflow-hidden">
					<CardHeader className="bg-slate-900 text-white p-8">
						<div className="flex items-center gap-3 mb-2">
							<Scale className="w-5 h-5 text-pink-400" />
							<CardTitle className="text-xl">Service Agreement</CardTitle>
						</div>
						<CardDescription className="text-slate-400">
							This agreement is between [Your Business Name] ("Artist") and the individual booking the service ("Client").
						</CardDescription>
					</CardHeader>

					<CardContent className="p-0">
						<ScrollArea className="h-[80vh] px-8 md:px-12">
							<div className="py-10 space-y-12">

								{/* 1. Booking & Financials */}
								<section id="bookings" className="space-y-4">
									<h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
										<span className="text-pink-500 text-sm font-mono">01.</span> Booking & Payments
									</h2>
									<div className="grid md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">
										<div className="space-y-3">
											<p className="font-medium text-slate-900">Deposits</p>
											<p>A non-refundable deposit of 50% is required to secure any date. No booking is "held" or "provisional" until the deposit is cleared.</p>
										</div>
										<div className="space-y-3">
											<p className="font-medium text-slate-900">Final Balance</p>
											<p>For weddings, the balance is due 21 days prior to the event. For all other services, payment must be settled immediately upon completion of the service.</p>
										</div>
									</div>
								</section>

								<Separator />

								{/* 2. Cancellation Policy - Detailed */}
								<section id="cancellations" className="space-y-4">
									<h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
										<span className="text-pink-500 text-sm font-mono">02.</span> Cancellations & Rescheduling
									</h2>
									<div className="bg-slate-50 border rounded-xl p-6 space-y-4">
										<p className="text-slate-700">In the event of a cancellation by the Client, the following charges apply based on the notice period given:</p>
										<ul className="space-y-3">
											<li className="flex justify-between border-b pb-2 text-sm">
												<span>More than 90 days notice</span>
												<span className="font-bold">Deposit Forfeited</span>
											</li>
											<li className="flex justify-between border-b pb-2 text-sm text-orange-700">
												<span>30–90 days notice</span>
												<span className="font-bold">50% of Total Balance Due</span>
											</li>
											<li className="flex justify-between pb-2 text-sm text-red-700 font-bold">
												<span>Less than 30 days notice</span>
												<span>100% of Total Balance Due</span>
											</li>
										</ul>
										<p className="text-xs text-slate-500 italic mt-4">
											*Artist Cancellations: Should the Artist be unable to perform services due to an emergency, 100% of all fees (including deposit) will be returned if a replacement cannot be sourced.
										</p>
									</div>
								</section>

								<Separator />

								{/* 3. Health, Safety & Allergies */}
								<section id="health" className="space-y-4">
									<h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
										<span className="text-pink-500 text-sm font-mono">03.</span> Health, Safety & Liability
									</h2>
									<div className="prose prose-slate max-w-none text-slate-600 space-y-4">
										<div className="flex gap-3 p-4 bg-red-50 border border-red-100 rounded-lg text-red-900">
											<AlertCircle className="w-6 h-6 shrink-0" />
											<p className="text-sm">
												<strong>Allergy Disclosure:</strong> The client MUST inform the artist of any known allergies or skin sensitivities. The artist is not liable for any allergic reactions or skin breakouts during or after the service.
											</p>
										</div>
										<p>
											<strong>Infectious Conditions:</strong> For hygiene reasons, the Artist reserves the right to refuse service to any person showing signs of contagious conditions including, but not limited to: Conjunctivitis (Pink Eye), Cold Sores, Flu/Cold symptoms, or Open Wounds in the application area.
										</p>
									</div>
								</section>

								<Separator />

								{/* 4. Travel & Logistics */}
								<section id="travel" className="space-y-4">
									<h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
										<span className="text-pink-500 text-sm font-mono">04.</span> Travel Fees & On-Site Requirements
									</h2>
									<div className="grid md:grid-cols-2 gap-8 text-slate-600">
										<div className="space-y-2">
											<div className="flex items-center gap-2 font-medium text-slate-900"><MapPin className="w-4 h-4" /> Travel Charges</div>
											<p className="text-sm leading-relaxed">Travel is charged at $0.75 per mile outside of a 15-mile radius from [City]. Parking fees, tolls, and valet costs are the responsibility of the client.</p>
										</div>
										<div className="space-y-2">
											<div className="flex items-center gap-2 font-medium text-slate-900"><ShieldCheck className="w-4 h-4" /> Working Environment</div>
											<p className="text-sm leading-relaxed">A safe working environment with natural light (or accessible power outlets), a table/flat surface, and a chair is required for the artist to perform services.</p>
										</div>
									</div>
								</section>

								<Separator />

								{/* 5. Intellectual Property & Media */}
								<section id="media" className="space-y-4">
									<h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
										<span className="text-pink-500 text-sm font-mono">05.</span> Photography & IP
									</h2>
									<Accordion type="single" collapsible className="w-full">
										<AccordionItem value="item-1">
											<AccordionTrigger>Portfolio Usage Rights</AccordionTrigger>
											<AccordionContent className="text-slate-600">
												The Artist reserves the right to take photos/videos of work for promotional use on social media and website portfolios. Client privacy requests must be submitted via email 48 hours before the appointment.
											</AccordionContent>
										</AccordionItem>
										<AccordionItem value="item-2">
											<AccordionTrigger>Website Content Protection</AccordionTrigger>
											<AccordionContent className="text-slate-600">
												All content on this website, including logos, images, and text descriptions, is the intellectual property of [Your Business Name]. Unauthorized reproduction or "scraping" of this site is strictly prohibited.
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</section>

								{/* 6. Legal Disclaimer */}
								<section className="bg-slate-100 p-6 rounded-lg border border-slate-200">
									<h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Limitation of Liability</h3>
									<p className="text-xs text-slate-500 leading-relaxed">
										[Your Business Name] shall not be liable for any indirect, consequential, or special damages arising out of the performance or non-performance of services. In all cases, the maximum liability shall not exceed the total fee paid for the specific service by the client.
									</p>
								</section>

							</div>
						</ScrollArea>
					</CardContent>

					{/* Footer Actions */}
					<div className="bg-white border-t p-8 flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="space-y-1">
							<p className="text-sm font-semibold text-slate-900">Have questions about these terms?</p>
							<div className="flex gap-4 text-sm text-slate-500">
								<a href="mailto:hello@makeup.com" className="flex items-center gap-1 hover:text-pink-500 transition-colors"><Mail className="w-3 h-3" /> Email Us</a>
								<a href="tel:123456789" className="flex items-center gap-1 hover:text-pink-500 transition-colors"><Phone className="w-3 h-3" /> Call Support</a>
							</div>
						</div>
						<div className="flex gap-4 w-full md:w-auto">
							<Button variant="outline" className="flex-1 md:flex-none border-slate-300">Download PDF</Button>
							<Button className="flex-1 md:flex-none bg-pink-600 hover:bg-pink-700 text-white px-8">Accept & Book</Button>
						</div>
					</div>
				</Card>

				<p className="text-center text-slate-400 text-xs">
					Copyright © 2025 [Your Business Name] Makeup Artistry. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default DetailedTerms;

