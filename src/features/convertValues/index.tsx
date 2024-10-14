import { symbols } from '../../constants'

export function convertValue(
  price: { type: keyof typeof symbols; value: string },
  selectedCurrency: keyof typeof symbols
) {
  const numericValue = Number(price.value)
  switch (selectedCurrency) {
    case 'EUR':
      return price.type === 'EUR'
        ? numericValue.toString() // EUR to EUR
        : price.type === 'JPY'
        ? (numericValue * 0.0058).toFixed(2).toString() // JPY to EUR
        : (numericValue * 0.931808).toFixed(2).toString() // USD to EUR
    case 'JPY':
      return price.type === 'JPY'
        ? numericValue.toString() // JPY to JPY
        : price.type === 'EUR'
        ? (numericValue * 173.253).toFixed(2).toString() // EUR to JPY
        : (numericValue * 161.438).toFixed(2).toString() // USD to JPY
    default:
      return price.type === 'USD'
        ? numericValue.toString() // USD to USD
        : price.type === 'JPY'
        ? (numericValue * 0.0062).toFixed(2).toString() // JPY to USD
        : (numericValue * 1.0732).toFixed(2).toString() // EUR to USD
  }
}
