import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartObject, MyState } from './model'

export const initialState: MyState = {
  cart: []
}

export type AddProductPayload = {
  product: CartObject
  quantity: number
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
          quantityCartObject: 1,
          discountRate: action.payload.discountRate
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
    },

    addMoreProduct: (state, action: PayloadAction<AddProductPayload>) => {
      const { product, quantity } = action.payload
      const Item = state.cart.find((obj) => obj.imageURL === product.imageURL)
      if (Item) {
        Item.quantityCartObject += quantity
        Item.value = (parseFloat(Item.value) + parseFloat(product.value) * quantity)
          .toFixed(2)
          .toString()
      } else {
        state.cart.push({
          ...product,
          quantityCartObject: quantity
        })
      }
    }
  }
})

export const {
  addProduct,
  deleteProduct,
  deleteOneProduct,
  addOneProduct,
  addMoreProduct
} = cartSlice.actions

export default cartSlice.reducer
