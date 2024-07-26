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
  objects: CartObject[]
}

const initialState: MyState = {
  objects: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartObject>) => {
      if (!state.objects.some((obj) => obj.imageURL === action.payload.imageURL)) {
        state.objects.push(action.payload)
      }
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.objects = state.objects.filter((obj) => obj.imageURL !== action.payload)
    }
  }
})

export const { addProduct, deleteProduct } = cartSlice.actions

// Selettore per ottenere la lista dei prodotti
export const selectCart = (state: { cart: MyState }) => state.cart.objects

// Selettore per ottenere il numero totale di prodotti presenti nell'array
export const selectCartTotal = (state: { cart: MyState }) => state.cart.objects.length

export default cartSlice.reducer
