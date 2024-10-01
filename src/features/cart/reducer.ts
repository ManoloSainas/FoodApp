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
      const Item = state.cart.find((obj) => obj.imageURL === action.payload.imageURL)
      if (Item) {
        Item.quantityCartObject += 1
        Item.value = (parseFloat(Item.value) + parseFloat(action.payload.value))
          .toFixed(2)
          .toString()
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
    },

    deleteOneProduct: (state, action: PayloadAction<string>) => {
      const Item = state.cart.find((obj) => obj.imageURL === action.payload)
      if (Item && Item.quantityCartObject > 0) {
        Item.quantityCartObject -= 1
        Item.value = (
          parseFloat(Item.value) -
          parseFloat(Item.value) / (Item.quantityCartObject + 1)
        )
          .toFixed(2)
          .toString()
      }
    },

    addOneProduct: (state, action: PayloadAction<string>) => {
      const Item = state.cart.find((obj) => obj.imageURL === action.payload)
      if (Item) {
        Item.quantityCartObject += 1
        Item.value = (
          parseFloat(Item.value) +
          parseFloat(Item.value) / (Item.quantityCartObject - 1)
        )
          .toFixed(2)
          .toString()
      }
    }
  }
})

export const { addProduct, deleteProduct, deleteOneProduct, addOneProduct } =
  cartSlice.actions

export default cartSlice.reducer
