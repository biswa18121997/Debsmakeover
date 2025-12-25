import express from 'express';
import type { Router } from 'express';
import createBooking from './controlleres/Bookings.js';
import WakeServer from './controlleres/WakeServer.js';
export default function Routes(router: Router) {
	router.post('/book-session', createBooking);
	router.get('/', WakeServer);
	router.post('/contact', contactUs);

}

