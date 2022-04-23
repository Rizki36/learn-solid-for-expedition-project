import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../../helpers/methods";
import { ISuccessCreateShipment } from "./jne.type";

/** create shipment */
export const createShipment = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data: ISuccessCreateShipment = {
            detail: [{ status: "success", cnote_no: "AA00312201000031" }],
        };

        successResponse(res, {
            data,
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
