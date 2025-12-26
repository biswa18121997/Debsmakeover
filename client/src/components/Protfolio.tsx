import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const works = [
	{
		id: 1,
		title: "Bridal Elegance",
		category: "Wedding",
		image:
			"https://res.cloudinary.com/dfvng2adb/image/upload/v1766604012/fv4crbssjm6cshmjhohw.jpg",
		review:
			"Her bridal makeup was flawless and lasted all day. Highly recommended!",
	},

	{
		id: 2,
		title: "Editorial Glam",
		category: "Editorial",
		image:
			"https://res.cloudinary.com/dfvng2adb/image/upload/v1766665592/u6mzk58e76gaco8xcrd0.jpg",
		review:
			"Debleena created a stunning editorial look that worked beautifully on camera.",
	},
	{
		id: 5,
		title: "Editorial Glam",
		category: "Editorial",
		image:
			"https://res.cloudinary.com/dfvng2adb/image/upload/v1766604008/jtpc3q69sretykwq00tc.jpg",
		review:
			"Debleena created a stunning editorial look that worked beautifully on camera.",
	},

	{
		id: 2,
		title: "Editorial Glam",
		category: "Editorial",
		image:
			"https://res.cloudinary.com/dfvng2adb/image/upload/v1766604088/dlsyryhfmwp7fr4jl9fl.png",
		review:
			"Debleena created a stunning editorial look that worked beautifully on camera.",
	},
	{
		id: 3,
		title: "Soft Natural Glow",
		category: "Commercial",
		image:
			"https://res.cloudinary.com/dfvng2adb/image/upload/v1766604047/gfwzvjcaokiqw4awwirf.jpg",
		review:
			"Loved the natural yet polished finish. Perfect for my shoot!",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-background ">
			<section id="portfolio" className="py-24 bg-gradient-to-r from-purple-100 to-purple-300 p-4">
				<div className="container mx-auto px-6">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border/40 pb-8"
					>
						<div className="max-w-2xl">
							<span className="text-sm font-medium tracking-widest text-primary/80 uppercase mb-2 block">Portfolio</span>
							<h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">Proof of Work</h2>
							<p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
								Discover transformations ranging from timeless bridal looks to bold editorial creations.
								Each face is a canvas, each look a masterpiece.
							</p>
						</div>
					</motion.div>

					{/* Portfolio Items */}
					<div className="space-y-24">
						{works.map((work, idx) => (
							<motion.div
								key={work.id}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
							>
								{/* Image Section - Alternates Left/Right */}
								<div className={`md:col-span-7 lg:col-span-8 ${idx % 2 === 1 ? 'md:order-last' : 'md:order-first'}`}>
									<Link to={`/portfolio/${work.id}`}>
										<a className="block relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer aspect-[4/3]">
											<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 z-10" />
											<img
												src={work.image}
												alt={work.title}
												className="w-auto h-auto object-top h-full transform transition-transform duration-700 ease-out group-hover:scale-105"
											/>

											{/* Hover Overlay Content */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
												<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
													<span className="text-white/90 text-sm font-medium tracking-wider uppercase bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">
														{work.category}
													</span>
												</div>
											</div>
										</a>
									</Link>
								</div>

								{/* Content Section */}
								<div className={`md:col-span-5 lg:col-span-4 ${idx % 2 === 1 ? 'md:order-first md:text-right' : 'md:order-last'}`}>
									<div className="relative">
										{/* Decor number */}
										<span className={`absolute -top-16 text-9xl font-serif text-muted/10 select-none ${idx % 2 === 1 ? 'right-0' : 'left-0'}`}>
											0{idx + 1}
										</span>

										<h3 className="text-3xl md:text-4xl font-serif mb-4 text-foreground relative z-10">{work.title}</h3>

										<div className={`bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border/50 relative z-10 ${idx % 2 === 1 ? 'md:ml-auto' : ''}`}>
											<div className={`flex gap-1 mb-4 text-amber-400 ${idx % 2 === 1 ? 'md:justify-end' : ''}`}>
												{Array(5).fill(0).map((_, i) => (
													<span key={i} className="text-lg">★</span>
												))}
											</div>
											<p className="text-muted-foreground italic leading-relaxed mb-6">
												"{work.review}"
											</p>
											<button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest flex items-center gap-2 group-hover:gap-3">
												Read Review <span className="transition-transform group-hover:translate-x-1">→</span>
											</button>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

