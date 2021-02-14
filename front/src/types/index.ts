export interface PayData {
  name: string;
  surname: string;
  address: string;
  zip_code: string;
}

export interface OrderAPIProps {
  order: Array<{
    id: number;
    quantity: number;
  }>;
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

export interface ProductProps {
  id: number;
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
  steps: Array<string>;
  activeStep: number;
  payData: PayData;
  isOrderedSuccessfully: boolean
}

export interface RootState {
  basketState: BasketState;
}
