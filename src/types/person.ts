export interface Person {
    name: string;
    address: string;
    areaCode: string;
}

export interface Customer extends Person {}

export interface Sender extends Person {}