import { Router } from "express";
import PaymentController from "../../controllers/paymentController";
const paymentRoute = Router();

const {getPaymentDetails, createPayment, findPaymentById,} = PaymentController;

paymentRoute.get("/", getPaymentDetails);
paymentRoute.post("/", createPayment);
paymentRoute.get("/:id", findPaymentById);

export default paymentRoute;
