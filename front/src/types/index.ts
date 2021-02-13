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

export interface AccountState {
  productsInBasket: number;
  products: Array<ProductProps>;
}

export interface RootState {
  accountState: AccountState;
}
