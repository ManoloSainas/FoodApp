import { conversionRates, symbols } from '../../constants'
import { convertValue } from '../../utils/convertValues'
import { CurrencyContext } from '../../Layout'
import { Text } from '../Text'
import { StyledPrice } from './styled'
import { useContext } from 'react'

type Props = {
  value: string
  currency: keyof typeof symbols
  fontSize?: number
}

export const Price = ({ value, currency, fontSize }: Props) => {
  const selectedCurrency = useContext(CurrencyContext)

  return (
    <StyledPrice>
      <Text fontSize={fontSize} className="price-text">
        {symbols[selectedCurrency as keyof typeof symbols]}
      </Text>
      <Text fontSize={fontSize} className="price-text">
        {convertValue(
          { type: currency, value },
          selectedCurrency as keyof typeof symbols,
          conversionRates
        ) ?? '0'}
      </Text>
    </StyledPrice>
  )
}
