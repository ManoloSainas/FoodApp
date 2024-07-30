// Importa la funzione createSlice da Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { symbols } from '../Components/Price'

export type CartObject = {
  imageURL: string
  text: string
  tagText: string
  currency: keyof typeof symbols
  value: string
}

type MyState = {
  cart: CartObject[]
}

const initialState: MyState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartObject>) => {
      if (!state.cart.some((obj) => obj.imageURL === action.payload.imageURL)) {
        state.cart.push(action.payload)
      }
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((obj) => obj.imageURL !== action.payload)
    }
  }
})

export const { addProduct, deleteProduct } = cartSlice.actions

// Selettore per ottenere la lista dei prodotti
export const selectCart = (state: { cart: MyState }) => state.cart.cart

// Selettore per ottenere il numero totale di prodotti presenti nell'array
export const selectCartTotal = (state: { cart: MyState }) => state.cart.cart.length

export default cartSlice.reducer
