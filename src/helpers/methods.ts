import { Request, Response } from "express";
import { ErrorResponseType, IResponse, SuccessResponseType } from "../types/helpers/methods";

export const successResponse:SuccessResponseType = (res:Response,{
    message,
    data,
}) => {
     return res.send({
        status: true,
        message: message ?? "Success !",
        data: data ?? null,
        errors: null,
    });
};

export const errorResponse:ErrorResponseType = ({
    message,
    errors,
}) => {
    return {
        status: false,
        message: message ?? "Error !",
        data: null,
        errors: errors ?? null,
    };
};