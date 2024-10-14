import { symbols } from '../../constants'

export function convertValue(
  price: { type: keyof typeof symbols; value: string },
  selectedCurrency: keyof typeof symbols
) {
  const numericValue = Number(price.value)
  switch (selectedCurrency) {
    case 'EUR':
      return price.type === 'EUR'
        ? numericValue.toString()
        : price.type === 'JPY'
        ? (numericValue * 0.0058).toFixed(2).toString()
        : (numericValue * 0.931808).toFixed(2).toString()
    case 'JPY':
      return price.type === 'JPY'
        ? numericValue.toString()
        : price.type === 'EUR'
        ? (numericValue * 173.253).toFixed(2).toString()
        : (numericValue * 161.438).toFixed(2).toString()
    default:
      return price.type === 'USD'
        ? numericValue.toString()
        : price.type === 'JPY'
        ? (numericValue * 0.0062).toFixed(2).toString()
        : (numericValue * 1.0732).toFixed(2).toString()
  }
}
