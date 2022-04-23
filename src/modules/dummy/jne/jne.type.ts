type StatusType = "success";
export interface ISuccessCreateOrder {
    detail: { status: StatusType; cnote_no: string }[];
}
