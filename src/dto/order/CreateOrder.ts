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

// TODO : move into resoucers folder
type StatusTypeJNE = "success";
export interface IResponseCreateOrderJNE {
    detail: { status: StatusTypeJNE; cnote_no: string }[];
}
export interface IResponseCreateOrderSAP {
    status: string;
    data: {
        awb_no: string;
        reference_no: string;
        origin_branch_code: string;
        destination_branch_code: string;
        tlc_branch_code: string;
    };
    msg: string;
    response: number;
}
