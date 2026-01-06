export interface Product {
    id: number;
    name: string;
    price: number;
}

export const PRODUCTS = {
    BLUE_TOP: {
        id: 1,
        name: 'Blue Top',
        price: 500
    },
    MEN_TSHIRT: {
        id: 2,
        name: 'Men Tshirt',
        price: 400
    }
} as const;
