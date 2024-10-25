import { conversionRates, symbols } from '../../constants'
import { convertValue } from '../../utils/convertValues'
import { MyState } from './model'

// Selettore per ottenere la lista dei prodotti
export const selectCart = (state: { cart: MyState }) => state.cart.cart

// Selettore per ottenere il numero totale di prodotti presenti nell'array
export const selectCartTotal = (state: { cart: MyState }) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0)

// Selettore per ottenere il prezzo totale dei prodotti presenti nell'array
export const selectCartTotalPrice = (
  state: { cart: MyState },
  selectedCurrency: keyof typeof symbols
) =>
  state.cart.cart
    .reduce(
      (total, item) =>
        total +
        parseFloat(
          convertValue(
            {
              type: item.product.currency,
              value: (parseFloat(item.product.value) * item.quantity)
                .toFixed(2)
                .toString()
            },
            selectedCurrency,
            conversionRates
          ) || '0'
        ),
      0
    )
    .toFixed(2)

// Selettore per ottenere la quantità di un prodotto dato il suo imageURL
export const selectQuantityByImageURL = (state: { cart: MyState }, imageURL: string) => {
  const item = state.cart.cart.find((item) => item.product.imageURL === imageURL)
  return item ? item.quantity : 0
}
