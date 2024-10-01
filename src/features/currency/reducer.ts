import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MyCurrency } from './model'

export const initialState: MyCurrency = {
  currency: 'USD'
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<MyCurrency>) => {
      state.currency = action.payload.currency
    }
  }
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer
