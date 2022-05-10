export interface Location {
    city: string;
    district: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    areaCode: string;
    address: string;
    postalCode: string;
}

export interface Person {
    name: string;
    location: Location;
    phone: string;
}

export interface Customer extends Person {}

export interface Sender extends Person {}
