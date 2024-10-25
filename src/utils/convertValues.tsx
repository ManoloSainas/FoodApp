import { symbols } from '../constants'

type CurrencyCode = keyof typeof symbols

export function convertValue(
  price: { type: CurrencyCode; value: string },
  selectedCurrency: CurrencyCode,
  conversionRates: { [key in CurrencyCode]: { [key in CurrencyCode]?: number } }
) {
  const numericValue = Number(price.value)

  // se la valuta è quella già selezionata restituisce il valore numerico
  if (price.type === selectedCurrency) {
    return numericValue.toString()
  }

  // seleziona il tasso di conversione
  const conversionRate = conversionRates[price.type]?.[selectedCurrency]

  if (conversionRate) {
    // converte il valore numerico
    const convertedValue = (numericValue * conversionRate).toFixed(2)
    return convertedValue
  }
}
