interface Person {
    name: string;
    address: string;
    areaCode: string;
}

interface Customer extends Person {}
interface Sender extends Person {}

export interface CreateOrder {
    awb: string | null;
    reference: string | null;
    customer: Customer;
    sender: Sender;
}

export interface ResponseOrder {
    awb: string;
    reference: string;
}
