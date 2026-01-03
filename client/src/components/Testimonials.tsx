import React, { useState, useRef, useEffect } from 'react';

interface TestimonialProps {
	url: string;
	name: string;
	role: string;
}

const VideoTestimonial: React.FC<TestimonialProps> = ({ url, name, role }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				threshold: 0.5, // Video must be 50% visible to play
				rootMargin: "0px 0px -10% 0px" // Slight buffer at the bottom
			}
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		if (isIntersecting) {
			// Direct play call with Promise handling to prevent "AbortError"
			const playPromise = video.play();
			if (playPromise !== undefined) {
				playPromise.catch((error) => {
					// Auto-play was prevented (usually requires user interaction or mute)
					console.warn("Autoplay interrupted or blocked:", error);
				});
			}
		} else {
			video.pause();
		}
	}, [isIntersecting]);

	return (
		<div
			ref={containerRef}
			className="max-w-4xl mx-auto my-12 overflow-hidden bg-slate-900 rounded-3xl shadow-xl border border-slate-800"
		>
			<div className="aspect-video relative bg-black">
				<video
					ref={videoRef}
					src={url}
					muted
					playsInline
					loop
					controls
					className="w-auto h-auto object-cover"
					preload="metadata"
				/>

				{/* Visual indicator when paused */}
				{!isIntersecting && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none">
						<span className="text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
							Scroll to see review
						</span>
					</div>
				)}
			</div>

			<div className="p-8 bg-white dark:bg-zinc-950">
				<h3 className="text-2xl font-bold text-slate-900 dark:text-white">{name}</h3>
				<p className="text-slate-500 dark:text-zinc-400 font-medium">{role}</p>
			</div>
		</div>
	);
};

export default function TestimonialPage() {
	const testimonials: TestimonialProps[] = [
		{
			url: "https://res.cloudinary.com/dfvng2adb/video/upload/v1767423905/vkcdhaddiu7jluljeclv.mp4",
			name: "Srijoni das",
			role: "Digital Artist"
		},
		{

			url: "https://res.cloudinary.com/dfvng2adb/video/upload/v1767423719/dfnddarbk32e0tqhdh5g.mp4",
			name: "A Promising Client",
			role: "Digital Artist"
		},
		{
			url: "https://res.cloudinary.com/dfvng2adb/video/upload/v1767417229/qsonzn84cfcfmcruydmj.mp4",
			name: "Srijoni Chatterjee",
			role: "Creative Director"
		}
	];

	return (
		<div className="min-h-screen bg-zinc-50 dark:bg-black py-20 px-4">
			<div className="max-w-2xl mx-auto text-center mb-16">
				<h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
					Client Reviews
				</h1>
				<p className="text-slate-600 dark:text-zinc-400 text-lg">
					Real stories from the artists and directors we work with every day.
				</p>
			</div>

			<div className="space-y-16 flex flex-wrap">
				{testimonials.map((item, index) => (
					<VideoTestimonial key={index} {...item} />
				))}
			</div>
		</div>
	);
}
