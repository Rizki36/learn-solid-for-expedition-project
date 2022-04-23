import { NextFunction, Request, Response } from "express";

export abstract class VendorController {
    abstract createShipment(
        req: Request,
        res: Response,
        next: NextFunction
    ): void;
}
