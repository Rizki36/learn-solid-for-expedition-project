type StatusTypeJNE = "success";

export interface IResponseCreateOrderJNE {
    detail: { status: StatusTypeJNE; cnote_no: string }[];
}

export interface IRequestCreateOrderJNE {
    PICKUP_NAME: string;
    PICKUP_DATE: string;
    PICKUP_TIME: string;
    PICKUP_PIC: string;
    PICKUP_PIC_PHONE: string;
    PICKUP_ADDRESS: string;
    PICKUP_DISTRICT: string;
    PICKUP_CITY: string;
    PICKUP_SERVICE: string;
    PICKUP_VEHICLE: string;
    BRANCH: string;
    SHIPPER_NAME: string;
    SHIPPER_ADDR1: string;
    SHIPPER_ADDR2: string;
    SHIPPER_ADDR3: string;
    SHIPPER_CITY: string;
    SHIPPER_ZIP: string;
    SHIPPER_REGION: string;
    SHIPPER_COUNTRY: string;
    SHIPPER_CONTACT: string;
    SHIPPER_PHONE: string;
    RECEIVER_NAME: string;
    RECEIVER_ADDR1: string;
    RECEIVER_ADDR2: string;
    RECEIVER_ADDR3: string;
    RECEIVER_CITY: string;
    RECEIVER_ZIP: string;
    RECEIVER_REGION: string;
    RECEIVER_COUNTRY: string;
    RECEIVER_CONTACT: string;
    RECEIVER_PHONE: string;
    ORIGIN_CODE: string;
    DESTINATION_CODE: string;
    SERVICE_CODE: string;
    WEIGHT: number;
    QTY: number;
    GOODS_DESC: string;
    GOODS_AMOUNT: number;
    INSURANCE_FLAG: "N";
    SPECIAL_INS: string;
    MERCHANT_ID: string;
    LAT: 1;
    LON: 1;
    TYPE: string;
    COD_FLAG: "YES" | "NO";
    COD_AMOUNT: number;
    CUST_ID: string;
    AWB: string;
    ORDER_ID: string;
    username: string;
    api_key: string;
}
