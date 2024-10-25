import { symbols } from '../../constants'

export type Product = {
  imageURL: string
  text: string
  tagText: string
  currency: keyof typeof symbols
  value: string
  discountRate: number
  id: string
  delivery: string
}

export type CartProduct = {
  product: Product
  quantity: number
}

export type MyState = {
  cart: CartProduct[]
}
