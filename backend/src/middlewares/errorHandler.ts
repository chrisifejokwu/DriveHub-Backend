import { NextFunction, Request,Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({message:err.message}).status(400)
}