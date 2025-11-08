import { Request, Response } from "express";
declare const CarController: {
    getCars: (req: Request, res: Response) => Promise<void>;
    createCar: (req: Request, res: Response) => Promise<void>;
    findCarById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default CarController;
//# sourceMappingURL=carController.d.ts.map