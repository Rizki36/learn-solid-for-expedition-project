type StatusType = "success";
export interface ISuccessCreateShipment {
    detail: { status: StatusType; cnote_no: string }[];
}
