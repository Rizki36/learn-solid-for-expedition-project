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

export interface IRequestCreateOrderSAP {
    awb_no: string;
    reference_no: string;
    pickup_name: string;
    pickup_address: string;
    pickup_phone: string;
    customer_code: string;
    pickup_district_code: string;
    service_type_code: string;
    quantity: number;
    weight: number;
    shipment_type_code: string;
    cod_flag: 1 | 2;
    shipper_name: string;
    shipper_address: string;
    shipper_phone: string;
    destination_district_code: string;
    receiver_name: string;
    receiver_address: string;
    receiver_phone: string;
    pickup_place: 2;
    pickup_email: string;
    pickup_postal_code: string;
    pickup_contact?: string;
    description_item: string;
    item_value: number;
    insurance_flag: 0;
    cod_value: number;
    shipper_postal_code: string;
    shipper_contact?: string;
    receiver_email?: string;
    receiver_postal_code: string;
    receiver_contact?: string;
    volumetric: string;
}
