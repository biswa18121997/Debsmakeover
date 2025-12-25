import express from 'express';
import createBooking from './controlleres/Bookings.js';
import WakeServer from './controlleres/WakeServer.js';
export default function Routes(router) {
    router.post('/book-session', createBooking);
    router.get('/', WakeServer);
    router.post('/contact', contactUs);
}
//# sourceMappingURL=Routes.js.map