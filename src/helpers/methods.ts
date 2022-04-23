import { Response } from "express";
import {
    ErrorResponseType,
    SuccessResponseType,
} from "../types/helpers/methods";

export const successResponse: SuccessResponseType = (
    res,
    { message, data },
    code = 200
) => {
    return res.status(code).send({
        status: true,
        message: message ?? "Success !",
        data: data ?? null,
        errors: null,
    });
};

export const errorResponse: ErrorResponseType = (
    res,
    { message, errors },
    code = 400
) => {
    return res.status(code).send({
        status: false,
        message: message ?? "Error !",
        data: null,
        errors: errors ?? null,
    });
};
