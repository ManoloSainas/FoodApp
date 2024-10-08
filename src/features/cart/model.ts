import { symbols } from '../../Composite Components/Price'

export type CartObject = {
  imageURL: string
  text: string
  tagText: string
  currency: keyof typeof symbols
  value: string
  quantityCartObject: number
}

export type MyState = {
  cart: CartObject[]
}
