import { CreateOrder, ResponseOrder } from "../dto/order/CreateOrder";

abstract class Vendor {
    abstract id: string;
    abstract name: string;

    /** @var string orderEndPoint url for create order */
    abstract orderEndPoint: string;

    /** @method createOrder method for create order */
    abstract createOrder(data: CreateOrder): ResponseOrder;
}

export default Vendor;
