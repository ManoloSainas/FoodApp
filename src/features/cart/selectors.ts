import { MyState } from './model'

// Selettore per ottenere la lista dei prodotti
export const selectCart = (state: { cart: MyState }) => state.cart.cart

// Selettore per ottenere il numero totale di prodotti presenti nell'array
export const selectCartTotal = (state: { cart: MyState }) =>
  state.cart.cart.reduce((total, item) => total + item.quantityCartObject, 0)

// Selettore per ottenere il prezzo totale dei prodotti presenti nell'array
export const selectCartTotalPrice = (state: { cart: MyState }) =>
  state.cart.cart.reduce((total, item) => total + parseFloat(item.value), 0)

// Selettore per ottenere la quantità di un prodotto dato il suo imageURL
export const selectQuantityByImageURL = (state: { cart: MyState }, imageURL: string) => {
  const item = state.cart.cart.find((item) => item.imageURL === imageURL)
  return item ? item.quantityCartObject : 0
}
