import { NextFunction, Request, Response } from "express";

export abstract class VendorController {
    abstract createOrder(
        req: Request,
        res: Response,
        next: NextFunction
    ): void;
}
