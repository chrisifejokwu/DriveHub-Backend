import {Router} from 'express';
import carRoute from './car.route';
import userRouter from './user.route';
import authRouter from './authRoutes';
import paymentRoute from './payment.route';
import bookingRoute from './bookings.routes';





const routes = Router();
routes.use('/users', userRouter);
routes.use('/cars', carRoute);
routes.use('/auth', authRouter);
routes.use('/payments', paymentRoute);
routes.use('/bookings', bookingRoute);

export default routes;