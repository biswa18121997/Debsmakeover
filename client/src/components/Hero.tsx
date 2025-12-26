import { motion } from "framer-motion";
//import heroImage from "@assets/generated_images/hero_image_of_high_fashion_makeup.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<motion.img
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					src={`https://res.cloudinary.com/dfvng2adb/image/upload/v1766604042/ddj60hhe0ygjhjkqrsjc.jpg`}
					alt="High fashion makeup"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/30" />
			</div>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-6 text-center text-white">
				<motion.span
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.8 }}
					className="inline-block mb-4 text-sm md:text-base tracking-[0.2em] uppercase opacity-90"
				>
					Professional Makeup Artist
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.7, duration: 0.8 }}
					className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight"
				>
					Artistry in <br />
					<span className="italic font-light">Every Stroke</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					className="flex justify-center items-center gap-4 "
				>
					<Link to={'book-now'}>
						<Button
							size="lg"
							className="group relative overflow-hidden rounded-full  border border-2 border-black px-14 py-8 text-lg font-medium tracking-wide 
             bg-gradient-to-br from-[#f6d1dc] via-[#fdf2f5] to-[#f6d1dc]
             text-[#3a1f2d] shadow-[0_10px_20px_-10px_rgba(246,209,220,0.5)]
             transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
						>
							{/* Subtle SVG Decorative Ornament */}
							<Sparkles className="absolute -left-1 -top-1 h-12 w-12 text-[#f2c6d4]/30 transition-transform duration-700 group-hover:rotate-12" />

							<span className="relative z-10 flex items-center">
								Book a Free Consultation
								<ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
							</span>
						</Button>
					</Link>

					{/* Secondary Button: WhatsApp */}
					<Link to={`https://wa.me/918777630087`} target="_blank">
						<Button
							size="lg"
							className="group relative overflow-hidden rounded-full px-14 py-8 text-lg border border-2 border-black font-medium tracking-wide
             bg-white/80 backdrop-blur-md text-[#3a1f2d]
             border border-[#f2c6d4] shadow-sm
             transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl active:scale-95"
						>
							<span className="relative z-10 flex items-center">
								<MessageCircle className="mr-3 h-5 w-5 text-green-800" />
								Enquire on WhatsApp
								<ArrowRight className="ml-3 h-4 w-4 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
							</span>
						</Button>
					</Link>

				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className="absolute bottom-10 left-1/2 -translate-x-1/2"
			>
				<div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white to-transparent" />
			</motion.div>
		</section>
	);
}

