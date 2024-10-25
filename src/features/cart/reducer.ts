import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProduct, MyState } from './model'

export const initialState: MyState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Modifica la quantità di un prodotto nel carrello
    updateProductQuantity: (state, action: PayloadAction<CartProduct>) => {
      const Item = state.cart.find((obj) => obj.product.id === action.payload.product.id)
      if (Item) {
        Item.quantity += action.payload.quantity
      } else {
        state.cart.push({
          ...action.payload
        })
      }
    },

    // Elimina un prodotto dal carrello
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((obj) => obj.product.id !== action.payload)
    },

    // Svuota il carrello
    clearCart: (state) => {
      state.cart = []
    }
  }
})

export const { updateProductQuantity, deleteProduct, clearCart } = cartSlice.actions

export default cartSlice.reducer
