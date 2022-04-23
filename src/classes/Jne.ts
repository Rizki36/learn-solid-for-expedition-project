import axios, { AxiosResponse } from "axios";
import env from "../configs/env";
import { CreateOrder, ResponseOrder } from "../dto/order/CreateOrder";
import { IResponse } from "../types/helpers/methods";
import Vendor from "./Vendor";

class Jne extends Vendor {
    id = "JNE";
    name = "Jne";
    orderEndPoint = env.jne.createOrderEndpoint;

    async createOrder(data: CreateOrder) {
        const response = await axios.post<
            {},
            AxiosResponse<IResponse<ResponseOrder, null>>
        >(this.orderEndPoint, data);

        if (!response.data.data) throw "No response";

        return response.data.data;
    }
}

export default Jne;
