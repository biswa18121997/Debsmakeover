import { Outlet } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Define the shape of your expected API response
interface WakeResponse {
	message: string;
}

export default function App() {

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
