import VendorFactory from "./factories/VendorFactory";

const vendorFactory = new VendorFactory("SAP");

const res = vendorFactory.CreateOrder({
    awb: "12345",
    reference: "12345",
    sender: {
        name: "Jene Doe",
        address: "Pandanwangi",
        areaCode: "JBG",
    },
    customer: {
        name: "John Doe",
        address: "Pandanwangi",
        areaCode: "JBG",
    },
});

console.log("res", res);
