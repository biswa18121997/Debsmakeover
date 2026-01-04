import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
// Define the shape of your expected API response
interface WakeResponse {
	message: string;
}

const GOOGLE_ANALYTICS_TRACKING_CODE = import.meta.env.VITE_GOOGLE_ANALYTICS_TRACKING_ID as string;
ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_CODE);
export default function App() {
	useEffect(() => {
		// 2. Track the page view when the component mounts
		ReactGA.send({
			hitType: "pageview",
			page: window.location.pathname + window.location.search
		});
	}, []);

	const wakeServer = async (): Promise<void> => {
		try {
			// Using a template literal or casting ensures TS understands the URL is a string
			const apiUrl = import.meta.env.VITE_API_BASE_URL as string;

			if (!apiUrl) {
				console.warn("API URL is not defined in environment variables.");
				return;
			}

			const awakeningCall = await fetch(apiUrl);
			const didServerWake: WakeResponse = await awakeningCall.json();

			console.log(didServerWake.message);
		} catch (error) {
			// In TS, caught errors are 'unknown' by default
			if (error instanceof Error) {
				console.error("Server awakening failed:", error.message);
			} else {
				console.error("An unknown error occurred", error);
			}
		}
	};

	useEffect(() => {
		wakeServer();
	}, []);

	return (
		<HelmetProvider>
			<Navbar />
			<Outlet />
		</HelmetProvider>
	);
}
