import { symbols } from '../../constants'

export type CartObject = {
  imageURL: string
  text: string
  tagText: string
  currency: keyof typeof symbols
  value: string
  quantityCartObject: number
  discountRate: number
  id: string
  delivery: string
}

export type MyState = {
  cart: CartObject[]
}
