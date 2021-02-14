export interface ProductProps {
  id: string;
  title: string;
  price: number;
  cover_url: string;
  currency: string;
  qty: number;
}

export interface BookProps extends ProductProps {
  author: string;
  pages: number;
}

export interface BasketState {
  productsInBasket: number;
  products: Array<ProductProps>;
  steps: Array<string>
  activeStep: number
}

export interface RootState {
  basketState: BasketState;
}
