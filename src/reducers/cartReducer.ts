import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { symbols } from '../Components/Price'

export type CountCartObject = {
  cartObjectURL: string
  quantityCartObject: number
  currency: keyof typeof symbols
  value: string
}

export type CartObject = {
  imageURL: string
  text: string
  tagText: string
  currency: keyof typeof symbols
  value: string
}

type MyState = {
  cart: CartObject[]
  quantity: CountCartObject[]
}

const initialState: MyState = {
  cart: [],
  quantity: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartObject>) => {
      if (!state.cart.some((obj) => obj.imageURL === action.payload.imageURL)) {
        state.cart.push(action.payload)
      }

      const quantityItem = state.quantity.find(
        (obj) => obj.cartObjectURL === action.payload.imageURL
      )
      if (quantityItem) {
        quantityItem.quantityCartObject += 1
      } else {
        state.quantity.push({
          cartObjectURL: action.payload.imageURL,
          quantityCartObject: 1,
          currency: action.payload.currency,
          value: action.payload.value
        })
      }
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      const quantityItem = state.quantity.find(
        (obj) => obj.cartObjectURL === action.payload
      )
      if (quantityItem) {
        if (quantityItem.quantityCartObject > 1) {
          quantityItem.quantityCartObject -= 1
        } else {
          state.quantity = state.quantity.filter(
            (obj) => obj.cartObjectURL !== action.payload
          )
          state.cart = state.cart.filter((obj) => obj.imageURL !== action.payload)
        }
      }
    }
  }
})

export const { addProduct, deleteProduct } = cartSlice.actions

// Selettore per ottenere la lista dei prodotti
export const selectCart = (state: { cart: MyState }) => state.cart.cart

// Selettore per ottenere il numero totale di prodotti presenti nell'array
export const selectCartTotal = (state: { cart: MyState }) =>
  state.cart.quantity.reduce((total, item) => total + item.quantityCartObject, 0)

export default cartSlice.reducer
