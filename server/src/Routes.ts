import express from 'express';
import type { Router } from 'express';
import createBooking from './controlleres/Bookings.js';
import WakeServer from './controlleres/WakeServer.js';
import contactUs from './controlleres/contactUs.js';


export default function Routes(router: Router) {
	router.post('/book-now', createBooking);
	router.get('/', WakeServer);
	router.post('/contact', contactUs);

}

