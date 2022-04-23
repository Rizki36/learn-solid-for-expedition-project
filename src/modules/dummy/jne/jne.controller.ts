import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../../helpers/methods";
import { VendorController } from "../vendor.controller";
import { ISuccessCreateOrder } from "./jne.type";

export default class JneController extends VendorController {
    createOrder(req: Request, res: Response, next: NextFunction): void {
        try {
            const data: ISuccessCreateOrder = {
                detail: [{ status: "success", cnote_no: req.body.awb_no }],
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
