export default function Footer() {
	return (
		<footer className="bg-foreground text-background py-12 border-t border-white/10">
			<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
				<div className="mb-6 md:mb-0 text-center md:text-left">
					<h2 className="text-2xl font-serif font-bold tracking-tighter mb-2">DEBLEENA DASGUPTA</h2>
					<p className="text-white/60 text-sm">© 2024 Debleena's Makeup Artistry. All rights reserved.</p>
				</div>

				<div className="flex gap-8 text-sm text-white/80">
					<a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
					<a href="#" className="hover:text-white transition-colors">Terms of Service</a>
				</div>
			</div>
		</footer>
	);
}

