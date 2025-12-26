import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Portfolio", href: "#portfolio" },
		{ name: "Services", href: "#services" },
		{ name: "About", href: "#about" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6"
				}`}
		>
			<div className="container mx-auto px-6 flex items-center justify-between">
				<Link to={'/'}>

					<a className="text-3xl font-serif tracking-tight flex items-center gap-2">
						<img width="58" height="58" className="border-t-2 border-l-2 rounded-lg p-2 " src="https://img.icons8.com/color/48/cosmetic-brush.png" alt="cosmetic-brush" />
						<span className="font-light text-neutral-400">DEBLEENA’S</span>

						<span className="relative font-extrabold text-white shadow-md shadow-black-500">
							BLUSH
							<span className="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-300"></span>
							<span className="absolute left-0 -bottom-2.5 w-full h-[2px] bg-white"></span>
						</span>
					</a>


				</Link>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-md font-medium tracking-wide hover:text-primary transition-colors"
						>
							{link.name.toUpperCase()}
						</a>
					))}
					<Link to={'/book-now'}>
						<Button variant="outline" className="rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
							Book Now
						</Button>
					</Link>
				</div>

				{/* Mobile Nav */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
							</Button>
						</SheetTrigger>
						<SheetContent>
							<div className="flex flex-col space-y-6 mt-10">
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className="text-2xl font-serif font-medium"
									>
										{link.name}
									</a>
								))}
								<Link to={'/book-now'}>
									<Button className="w-full rounded-full mt-4">Book Appointment</Button>
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.nav>
	);
}

