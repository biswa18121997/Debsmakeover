import express from 'express';
import createBooking from './controlleres/Bookings.js';
import WakeServer from './controlleres/WakeServer.js';
import contactUs from './controlleres/contactUs.js';
import Inquire from './controlleres/Inquire.js';
export default function Routes(router) {
    router.post('/book-now', createBooking);
    router.get('/', WakeServer);
    router.post('/contact', contactUs);
    router.post('/inquire', Inquire);
}
//# sourceMappingURL=Routes.js.map