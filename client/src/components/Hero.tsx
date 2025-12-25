import { motion } from "framer-motion";
//import heroImage from "@assets/generated_images/hero_image_of_high_fashion_makeup.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<motion.img
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					src={`../../public/download.png`}
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
					<Button
						size="lg"
						className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg tracking-wide group"
					>
						Book a free consultation
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>
					<Button
						size="lg"
						className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg tracking-wide group"
					>
						Equire on Whatsapp
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Button>

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

