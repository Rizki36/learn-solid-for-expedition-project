import Jne from "../classes/Jne";
import Sap from "../classes/Sap";
import { CreateOrder } from "../dto/order/CreateOrder";
import { Vendors } from "../types";

class VedorFactory {
    constructor(public vendor: Vendors) {}

    CreateOrder(data: CreateOrder) {
        switch (this.vendor) {
            case "JNE":
                return new Jne().createOrder(data);
            case "SAP":
                return new Sap().createOrder(data);
        }
    }
}

export default VedorFactory;
