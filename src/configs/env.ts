import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    dummy_server_port: process.env.DUMMY_SERVER_PORT || 3001,
    environment: process.env.NODE_ENV || "development",
    jne: {
        createOrderEndpoint: process.env.JNE_CREATE_ORDER_ENDPOINT || "",
    
        apiKey: process.env.JNE_API_KEY || "",
        username: process.env.JNE_USERNAME || "",
        customerId: process.env.JNE_CUSTOMER_ID || "",
    },
    sap: {
        createOrderEndpoint: process.env.SAP_CREATE_ORDER_ENDPOINT || "",
    },
};
