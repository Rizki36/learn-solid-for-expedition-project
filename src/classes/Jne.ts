import axios, { AxiosResponse } from "axios";
import env from "../configs/env";
import {
    CreateOrder,
    IResponseCreateOrderJNE,
    ResponseOrder,
} from "../dto/order/CreateOrder";
import { IResponse } from "../types/helpers/methods";
import Vendor from "./Vendor";

class Jne extends Vendor {
    id = "JNE";
    name = "Jne";
    orderEndPoint = env.jne.createOrderEndpoint;

    async createOrder(data: CreateOrder) {
        const response = await axios.post<
            {},
            AxiosResponse<IResponse<IResponseCreateOrderJNE, null>>
        >(this.orderEndPoint, data);

        /** validate response data */
        if (!response.data.data) throw "No response";
        if (!response.data.data.detail.length) throw "No length response";

        const { cnote_no } = response.data.data.detail[0];

        const output: ResponseOrder = {
            awb: cnote_no,
            reference: cnote_no,
        };

        return output;
    }
}

export default Jne;
