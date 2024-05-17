export interface product {
    _id: string;
    name: string;
    price: number;
    img: string;
    active: boolean;
    des: string;
    slug: string;
    type: string[];
    size: { name: string; price: number; _id: string }[];
    topping: {
        name: string;
        price: number;
        _id: string;
    }[];
}

export interface databill {
    _id: string;
    name: string;
    price: number;
    img: string;
    size: { name: string; price: number; _id: string } | null;
    quantity: number;
    topping: {
        name: string;
        price: number;
        _id: string;
        quantity: number;
    } | null;
    note: string;
    keys: number;
}

export interface dataorder {
    name: string;
    phone: string;
    guid: string;
    bill: databill[];
    code: string;
    address: string;
    methodpay: { method: string; keys: string };
    statuspay: string;
    connect: string;
    status: string;
    date: string;
}
