import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./components/BookingModal";
import Services from "./components/Services";
import Portfolio from './components/Protfolio.tsx';
import Contact from "./components/Contact.tsx";
import About from "./components/About.tsx";
import TermsAndConditions from './components/TermsAndConditions.tsx';
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HelmetProvider><Home /></HelmetProvider>
			},
			{
				path: '/services',
				element: <HelmetProvider><Services /></HelmetProvider>
			},
			{
				path: '/portfolio',
				element: <HelmetProvider><Portfolio /></HelmetProvider>
			},
			{
				path: '/contact-us',
				element: <HelmetProvider><Contact /></HelmetProvider>
			},
			{
				path: '/about',
				element: <HelmetProvider><About /></HelmetProvider>
			},
			{
				path: '/book-now',
				element: <HelmetProvider><BookingPage /></HelmetProvider>
			},
			{
				path: '/terms-and-conditions',
				element: <HelmetProvider><TermsAndConditions /></HelmetProvider>
			}
		]
	}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
		</HelmetProvider>
	</StrictMode>
);

