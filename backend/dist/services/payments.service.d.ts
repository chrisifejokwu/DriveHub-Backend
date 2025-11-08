import { Payment } from "../models/Payment";
declare const PaymentModel: {
    getlistofpayments: () => Promise<{
        id: import("mongoose").Types.ObjectId;
        amount: string;
        method: string;
        status: string;
    }[]>;
    findById: (id: string) => Promise<{
        id: import("mongoose").Types.ObjectId;
        amount: string;
        method: string;
        status: string;
    } | null>;
    createPayment: (payment: Payment) => Promise<{
        id: import("mongoose").Types.ObjectId;
        amount: string;
        method: string;
        status: string;
    }>;
    updatePayment: (id: string, payment: Partial<Payment>) => Promise<{
        id: import("mongoose").Types.ObjectId;
        amount: string;
        method: string;
        status: string;
    } | null>;
    deleteById: (id: string) => Promise<boolean>;
};
export default PaymentModel;
//# sourceMappingURL=payments.service.d.ts.map