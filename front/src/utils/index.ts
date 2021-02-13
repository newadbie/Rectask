import { ProductProps } from "../types";

export const CountAllProductsInBasket = (products: Array<ProductProps>): number => {
    let itemsInBasket = 0;
    products.forEach(product => itemsInBasket += product.qty);

    return itemsInBasket;
}