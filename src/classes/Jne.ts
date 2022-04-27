import axios, { AxiosResponse } from "axios";
import env from "../configs/env";
import { IRequestCreateOrder, IResponseCreateOrder } from "../dto/createOrder";
import { IResponseCreateOrderJNE } from "../dto/createOrder/jne";

import { IResponse } from "../types/helpers/methods";
import Vendor from "./Vendor";

class Jne extends Vendor {
    id = "JNE";
    name = "Jne";
    orderEndPoint = env.jne.createOrderEndpoint;

    async createOrder(data: IRequestCreateOrder) {
        const response = await axios.post<
            {},
            AxiosResponse<IResponse<IResponseCreateOrderJNE, null>>
        >(this.orderEndPoint, data);

        /** validate response data */
        if (!response.data.data) throw "No response";
        if (!response.data.data.detail.length) throw "No length response";

        const { cnote_no } = response.data.data.detail[0];

        const output: IResponseCreateOrder = {
            awb: cnote_no,
            reference: cnote_no,
        };

        return output;
    }
}

export default Jne;
