import Hero from "@/components/Hero";
import Portfolio from "@/components/Protfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";
import { SEO } from '../utils/SEO';
import { useLocation } from "react-router-dom";
import TestimonialPage from '@/components/Testimonials';
export default function Home() {
	const currentPath = useLocation();
	const isHomeRoute = currentPath?.pathname == '/' ? true : false;
	return (
		<>
			{isHomeRoute && <SEO
				title="DebsMakeover | Best Bridal & Party Makeup Artist in Kolkata"
				description="Professional bridal makeup artist in Kolkata with 6+ years of experience. Specializing in Bengali bridal looks, HD makeup, and party makeovers. Book your dream look today!"
				canonical="https://debsmakeover.vercel.app/"
			/>}
			<div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">

				<Hero />
				<TestimonialPage />
				<Portfolio />
				<Services />
				<About />
				<Contact />
				<Footer />
			</div>

		</>
	);
}

