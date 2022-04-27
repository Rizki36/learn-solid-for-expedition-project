type StatusTypeJNE = "success";
export interface IResponseCreateOrderJNE {
    detail: { status: StatusTypeJNE; cnote_no: string }[];
}
