import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../../helpers/methods";
import { VendorController } from "../vendor.controller";
import { ISuccessCreateShipment } from "./jne.type";

export default class JneController extends VendorController {
    createShipment(req: Request, res: Response, next: NextFunction): void {
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
    }
}
