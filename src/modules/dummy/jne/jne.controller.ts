import { NextFunction, Request, Response } from "express";
import type { IResponseCreateOrderJNE } from "../../../dto/createOrder/jne";
import { successResponse } from "../../../helpers/methods";
import { VendorController } from "../vendor.controller";

export default class JneController extends VendorController {
    createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const data: IResponseCreateOrderJNE = {
                detail: [{ status: "success", cnote_no: req.body.awb }],
            };

            // delay for 1 seconds
            setTimeout(() => {
                successResponse(res, { data });
            }, 1000);
        } catch (error) {
            next(error);
        }
    }
}
