import { CreateOrder, ResponseOrder } from "../dto/order/CreateOrder";
import Vendor from "./Vendor";

class Jne extends Vendor {
    id = "JNE";
    name = "Jne";
    orderEndPoint = "https://api.jne.co.id/v1/public/order";

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

export default Jne;
