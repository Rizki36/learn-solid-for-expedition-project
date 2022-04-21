import { Response } from "express";

export type DataType = Record<string, any>;

export interface IResponse<T = Record<string, any>, P = Record<string, any>> {
    status: boolean;
    message: string;
    data: T | null;
    errors: P | null;
}

type SuccessParamsType<T> = {
    message?: string;
    data?: T;
}
export type SuccessResponseType = <T = DataType | null>(res:Response,params:SuccessParamsType<T>)=> Response<IResponse<T>>;


type ErrorResponseParamsType<T> = {
    message?: string;
    errors?: T;
}
export type ErrorResponseType = <T = DataType | null>(params:ErrorResponseParamsType<T>)=> IResponse<null,T>;
