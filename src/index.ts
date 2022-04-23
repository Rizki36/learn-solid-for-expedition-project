import VendorFactory from "./factories/VendorFactory";

async function app() {
    const vendorFactory = new VendorFactory("JNE");

    try {
        const res = await vendorFactory.CreateOrder({
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
    } catch (error) {
        console.log(error);
    }
}

app();
