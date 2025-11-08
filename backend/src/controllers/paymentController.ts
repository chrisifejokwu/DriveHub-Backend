import { Request, Response } from "express";
import PaymentService from "../services/payments.service";

const getPaymentDetails = async (req: Request, res: Response) => {
  const { getlistofpayments } = PaymentService;
  const payList = await getlistofpayments();
  res.json(payList).status(200);
};

const createPayment = async (req: Request, res: Response) => {
  const payment = req.body;
  const { createPayment } = PaymentService;
  const payData = await createPayment(payment);
  res.json(payData).status(201);
};

const findPaymentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { findById } = PaymentService;
  const payData = await findById(id);
  if (!payData) {
    return res.status(404).json({ error: "Payment not found" });
  } else {
    res.status(200).json(payData);
  }
};

const PaymentController = {
  getPaymentDetails,
  createPayment,
  findPaymentById,
};


export default PaymentController;
