import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../../helpers/methods";

/** create shipment */
export const createShipment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = {};

        successResponse(res, {
            data,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
