export interface Product {
    id: string
    price: number
    qty: number
}

export interface BookProps extends Product {
    title: string
    author: string
    cover_url: string
    pages: number
    currency: string
}

export interface AccountState {
    products: Array<Product>
}

export interface RootState {
    accountState: AccountState
}