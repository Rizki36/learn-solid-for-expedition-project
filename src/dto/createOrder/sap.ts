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