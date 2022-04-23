import axios, { AxiosResponse } from "axios";
import { CreateOrder, ResponseOrder } from "../dto/order/CreateOrder";
import Vendor from "./Vendor";

class Jne extends Vendor {
    id = "JNE";
    name = "Jne";
    orderEndPoint = "https://api.jne.co.id/v1/public/order";

    async createOrder(data: CreateOrder) {
        const response = await axios.post<{}, AxiosResponse<ResponseOrder>>(
            this.orderEndPoint,
            data
        );

        return response.data;
    }
}

export default Jne;
