import { Request, Response } from "express";
declare const UserController: {
    getUsers: (req: Request, res: Response) => Promise<void>;
    createUser: (req: Request, res: Response) => Promise<void>;
    findUserByEmail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
export default UserController;
//# sourceMappingURL=userController.d.ts.map