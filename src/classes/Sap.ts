import { IRequestCreateOrder, IResponseCreateOrder } from "../dto/createOrder";
import Vendor from "./Vendor";

class Sap extends Vendor {
    id = "SAP";
    name = "Sap";
    orderEndPoint = "https://sap/order";

    async createOrder(data: IRequestCreateOrder) {
        /** hit endpoint order */

        /** create dummy response */
        const response: IResponseCreateOrder = {
            awb: data.awb || "",
            reference: data.reference || "",
        };

        return response;
    }
}

export default Sap;
