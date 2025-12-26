import { motion } from "framer-motion";
//import artistImg from "@assets/generated_images/makeup_artist_portrait.png";

export default function About() {
	return (
		<section id="about" className="py-24 overflow-hidden scroll-smooth">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center gap-16">

					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="w-full md:w-1/2 relative"
					>
						<div className="aspect-[3/4] relative z-10">
							<img
								src={'https://res.cloudinary.com/dfvng2adb/image/upload/v1766604034/tscgpogbmlcrtwvhggf7.png'}
								alt="Elena Rossi"
								className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
							/>
						</div>
						{/* Decorative background element */}
						<div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/20 z-0" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="w-full md:w-1/2"
					>
						<h2 className="text-4xl md:text-5xl font-serif mb-8">Meet Debleena..!</h2>
						<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white"></span>
						<span className="absolute left-0 -bottom-2.5 w-full h-[2px] bg-white"></span>
						<div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
							<p>
								With over a decade of experience in the beauty industry, I view makeup not as a mask, but as a tool for empowerment and self-expression.
							</p>
							<p>
								My journey began in the fast-paced world of fashion backstage, where I learned the art of precision and the power of creativity. Today, I bring that same editorial eye to every client, whether it's for a wedding day or a commercial campaign.
							</p>
							<p>
								I believe in skin-first makeup—enhancing your natural features rather than hiding them. My signature style combines luminous skin with striking details, creating looks that are both timeless and modern.
							</p>
						</div>
						<div className="mt-10 flex items-center gap-8">
							<div>
								<span className="block text-3xl font-serif text-primary">6+</span>
								<span className="text-sm uppercase tracking-wider text-muted-foreground">Years Experience</span>
							</div>
							<div className="w-px h-12 bg-border" />
							<div>
								<span className="block text-3xl font-serif text-primary">200+</span>
								<span className="text-sm uppercase tracking-wider text-muted-foreground">Happy Clients</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

