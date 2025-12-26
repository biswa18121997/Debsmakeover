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

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: '/services',
				element: <Services />
			},
			{
				path: '/portfolio',
				element: <Portfolio />
			},
			{
				path: '/contact-us',
				element: <Contact />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/book-now',
				element: <BookingPage />
			}
		]
	}
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);

