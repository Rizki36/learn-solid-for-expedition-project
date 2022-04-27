import { IRequestCreateOrder, IResponseCreateOrder } from "../dto/createOrder";

abstract class Vendor {
    abstract id: string;
    abstract name: string;

    /** @var string orderEndPoint url for create order */
    abstract orderEndPoint: string;

    /** @method createOrder method for create order */
    abstract createOrder(data: IRequestCreateOrder): Promise<IResponseCreateOrder>;
}

export default Vendor;
