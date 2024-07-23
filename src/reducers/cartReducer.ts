// Importa la funzione createSlice da Redux Toolkit
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { symbols } from '../Components/Price'

type MyObject = {
  imageUrl: string
  text: string
  tagText: string
  currency: keyof typeof symbols
  value: string
}

type MyState = {
  objects: MyObject[]
}

const initialState: MyState = {
  objects: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<MyObject>) => {
      state.objects.push(action.payload)
    },

    deleteProduct: (state, action: PayloadAction<number>) => {
      state.objects = state.objects.filter(
        (obj) => obj.imageUrl !== action.payload.toString()
      )
    }
  }
})

export const { addProduct, deleteProduct } = cartSlice.actions

export default cartSlice.reducer
