export interface PayData {
  name: string,
  surname: string,
  address: string,
  zip_code: string
}

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
  payData: PayData
}

export interface RootState {
  basketState: BasketState;
}
