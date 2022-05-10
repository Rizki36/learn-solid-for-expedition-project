import env from "../configs/env";
import { IRequestCreateOrder } from "../dto/createOrder";
import { IRequestCreateOrderJNE } from "../dto/createOrder/jne";
import { divideStringEachXLength } from "./stringHelpers";

export function generateMerchantId(
    originAreaCode: string,
    person_code: string,
    shop_code: string
) {
    return `${originAreaCode}${person_code}${shop_code}`;
}

/**
 * map data to jne request
 * @param data IRequestCreateOrder
 * @returns IRequestCreateOrderJNE
 */
export function mapDataCreateOrderJNE(data: IRequestCreateOrder) {
    let output: IRequestCreateOrderJNE;

    const { customer, sender } = data;

    /** divide customer location address each 85 character */
    const receiverAddrArray = divideStringEachXLength(
        customer.location.address,
        85
    );

    /** divide customer location address each 85 character */
    const shipperAddrArray = divideStringEachXLength(
        sender.location.address,
        85
    );

    // generate merchant id
    const merchant_id = generateMerchantId("", "", "");

    output = {
        api_key: env.jne.apiKey,
        username: env.jne.username,
        CUST_ID: env.jne.customerId,

        // Receiver
        RECEIVER_NAME: customer.name,
        RECEIVER_ADDR1: receiverAddrArray[0],
        RECEIVER_ADDR2: receiverAddrArray[1],
        RECEIVER_ADDR3: receiverAddrArray[3],
        RECEIVER_CITY: customer.location.city,
        RECEIVER_ZIP: customer.location.postalCode,
        RECEIVER_CONTACT: customer.phone,
        RECEIVER_PHONE: customer.phone,
        RECEIVER_COUNTRY: "Indonesia",
        RECEIVER_REGION: customer.location.region,

        // Pickup
        PICKUP_NAME: sender.name,
        PICKUP_ADDRESS: sender.location.address,
        PICKUP_CITY: sender.location.city,
        PICKUP_DISTRICT: sender.location.district,
        PICKUP_PIC_PHONE: sender.phone,

        // Shipper
        SHIPPER_NAME: sender.name,
        SHIPPER_ADDR1: shipperAddrArray[0],
        SHIPPER_ADDR2: shipperAddrArray[1],
        SHIPPER_ADDR3: shipperAddrArray[2],
        SHIPPER_CITY: sender.location.city,
        SHIPPER_COUNTRY: sender.location.country,
        SHIPPER_CONTACT: sender.phone,
        SHIPPER_PHONE: sender.phone,
        SHIPPER_REGION: sender.location.region,
        SHIPPER_ZIP: sender.location.postalCode,

        // shipment
        AWB: data.awb,
        ORDER_ID: data.awb,
        SERVICE_CODE: data.shipment.pickup_service,
        ORIGIN_CODE: sender.location.areaCode,
        DESTINATION_CODE: customer.location.areaCode,
        PICKUP_DATE: data.shipment.pickup_date,
        PICKUP_PIC: sender.name,
        PICKUP_SERVICE: "Reguler",
        PICKUP_TIME: data.shipment.pickup_time,
        PICKUP_VEHICLE: data.shipment.pickup_vehicle ?? "",
        BRANCH: sender.location.areaCode,
        COD_FLAG: data.package.cod_value > 0 ? "YES" : "NO",
        GOODS_DESC: data.package.description,
        INSURANCE_FLAG: "N",
        LAT: undefined,
        LON: undefined,
        MERCHANT_ID: merchant_id,
        SPECIAL_INS: data.shipment.instructions,
        TYPE: "PICKUP",
        COD_AMOUNT: data.package.cod_value,
        GOODS_AMOUNT: data.package.item_value,
        QTY: data.package.qty,
        WEIGHT: data.package.weight,
    };

    return output;
}
