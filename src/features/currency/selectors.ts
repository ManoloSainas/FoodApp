import { MyCurrency } from './model'

export const selectCurrency = (state: { currency: MyCurrency }) => state.currency.currency
