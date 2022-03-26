import { CreateOrder, ResponseOrder } from "../dto/order/CreateOrder";
import Vendor from "./Vendor";

class Sap extends Vendor {
    id = "SAP";
    name = "Sap";
    orderEndPoint = "https://sap/order";

    createOrder(data: CreateOrder) {
        /** hit endpoint order */

        /** create dummy response */
        const response: ResponseOrder = {
            awb: data.awb || "",
            reference: data.reference || "",
        };

        return response;
    }
}

export default Sap;
