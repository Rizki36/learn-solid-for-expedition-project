import { Customer, Sender } from "../../types/person";

export interface IRequestCreateOrder {
    awb: string | null;
    reference: string | null;
    customer: Customer;
    sender: Sender;
}

export interface IResponseCreateOrder {
    awb: string;
    reference: string;
}