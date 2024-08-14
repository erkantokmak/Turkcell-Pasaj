import { Product } from "./product";

export type CartItem = {
    product: Product;
    quantity: number;
    options: { [key: string]: string}
}