import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || "development",
    jne: {
        createOrderEndpoint: process.env.JNE_CREATE_ORDER_ENDPOINT || "",
    },
    sap: {
        createOrderEndpoint: process.env.SAP_CREATE_ORDER_ENDPOINT || "",
    },
};
