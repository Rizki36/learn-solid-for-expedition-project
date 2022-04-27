import Jne from "../../classes/Jne";
import Sap from "../../classes/Sap";
import { IRequestCreateOrder } from "../../dto/order/CreateOrder";
import { Vendors } from "../../types";

class OrderFactory {
    constructor(public vendor: Vendors) {}

    CreateOrder(data: IRequestCreateOrder) {
        switch (this.vendor) {
            case "JNE":
                return new Jne().createOrder(data);
            case "SAP":
                return new Sap().createOrder(data);
        }
    }
}

export default OrderFactory;
