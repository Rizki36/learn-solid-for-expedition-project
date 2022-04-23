import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../../helpers/methods";
import { VendorController } from "../vendor.controller";
import { ISuccessCreateOrder } from "./jne.type";

export default class JneController extends VendorController {
    async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            console.log(req.body.awb_no);
            const data: ISuccessCreateOrder = {
                detail: [{ status: "success", cnote_no: req.body.awb_no }],
            };

            // delay for 1 seconds
            setTimeout(() => {
                successResponse(res, { data });
            }, 1000);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}
