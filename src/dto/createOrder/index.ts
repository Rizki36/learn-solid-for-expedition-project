import { Customer, Sender } from "../../types/person";

/** standard request before mapping to vendor request format */
export interface IRequestCreateOrder {
    awb: string;
    reference: string;
    customer: Customer;
    sender: Sender;
    package: {
        weight: number;
        item_value: number;
        cod_value: number;
        description: string;
        qty: number;
    };
    shipment: {
        pickup_date: string;
        pickup_service: string;
        pickup_time: string;
        pickup_vehicle?: string;
        instructions: string;
    };
}

/** standard response after mapping from vendor response format */
export interface IResponseCreateOrder {
    awb: string;
    reference: string;
}
