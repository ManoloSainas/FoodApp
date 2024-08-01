import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartObject, MyState } from './model'

export const initialState: MyState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartObject>) => {
      const quantityItem = state.cart.find(
        (obj) => obj.imageURL === action.payload.imageURL
      )
      if (quantityItem) {
        quantityItem.quantityCartObject += 1
        quantityItem.value = (
          parseFloat(quantityItem.value) + parseFloat(action.payload.value)
        ).toString()
      } else {
        state.cart.push({
          imageURL: action.payload.imageURL,
          text: action.payload.text,
          tagText: action.payload.tagText,
          currency: action.payload.currency,
          value: action.payload.value,
          quantityCartObject: 1
        })
      }
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((obj) => obj.imageURL !== action.payload)
    }
  }
})

export const { addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer
