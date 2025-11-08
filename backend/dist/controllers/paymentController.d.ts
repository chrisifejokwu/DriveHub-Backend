import { Request, Response } from "express";
declare const PaymentController: {
    getPaymentDetails: (req: Request, res: Response) => Promise<void>;
    createPayment: (req: Request, res: Response) => Promise<void>;
    findPaymentById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default PaymentController;
//# sourceMappingURL=paymentController.d.ts.map