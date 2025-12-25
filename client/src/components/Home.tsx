import Hero from "@/components/Hero";
import Portfolio from "@/components/Protfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
			<main>
				<Hero />
				<Portfolio />
				<Services />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

