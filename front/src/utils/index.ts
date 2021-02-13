import { Product } from "../types";

export const CountAllProductsInBasket = (products: Array<Product>): number => {
    let itemsInBasket = 0;
    products.forEach(product => itemsInBasket += product.qty);

    return itemsInBasket;
}