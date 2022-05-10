import axios, { AxiosResponse } from "axios";
import qs from "qs";
import env from "../configs/env";
import { IRequestCreateOrder, IResponseCreateOrder } from "../dto/createOrder";
import { IResponseCreateOrderJNE } from "../dto/createOrder/jne";

import Vendor from "./Vendor";
import { mapDataCreateOrderJNE } from "../helpers/orderHelpers";

class Jne extends Vendor {
    id = "JNE";
    name = "Jne";
    orderEndPoint = env.jne.createOrderEndpoint;

    async createOrder(data: IRequestCreateOrder) {
        const requestBody = mapDataCreateOrderJNE(data);

        const response = await axios.post<
            {},
            AxiosResponse<IResponseCreateOrderJNE>
        >(this.orderEndPoint, qs.stringify(requestBody), {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        });

        /** validate response data */
        if (!response.data) throw "No response";
        if (response.data.error) throw response.data.error;
        if (!response.data.detail?.length) throw "No length response";

        const { cnote_no } = response.data.detail[0];

        const output: IResponseCreateOrder = {
            awb: cnote_no,
            reference: cnote_no,
        };

        return output;
    }
}

export default Jne;
