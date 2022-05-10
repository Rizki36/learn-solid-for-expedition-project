import VendorFactory from "./factories/VendorFactory";

async function app() {
    const vendorFactory = new VendorFactory("JNE");

    try {
        const res = await vendorFactory.CreateOrder({
            awb: "12345",
            reference: "12345",
            sender: {
                name: "Jene Doe",
                phone: "08123456789",
                location: {
                    address: "Jl. Kebon Jeruk No. 1",
                    city: "Bandung",
                    areaCode: "40123",
                    postalCode: "40123",
                    district: "Kebon Jeruk",
                    region: "Bandung",
                    country: "Indonesia",
                    lat: -6.91748,
                    lon: 107.61912,
                },
            },
            customer: {
                name: "John Doe",
                phone: "08123456789",
                location: {
                    address: "Jl. Kebon Jeruk No. 1",
                    city: "Bandung",
                    areaCode: "40123",
                    postalCode: "40123",
                    district: "Kebon Jeruk",
                    region: "Bandung",
                    country: "Indonesia",
                    lat: -6.91748,
                    lon: 107.61912,
                },
            },
            package: {
                cod_value: 0,
                item_value: 0,
                description: "test",
                qty: 0,
                weight: 0,
            },
            shipment: {
                instructions: "",
                pickup_date: "",
                pickup_service: "",
                pickup_time: "",
                pickup_vehicle: "",
            },
        });
        console.log("res", res);
    } catch (error) {
        console.log(error);
    }
}

app();
