import { Text } from '../Text'
import { StyledPrice } from './styled'

type Props = {
  value: string
  currency: keyof typeof symbols
  fontSize?: number
}

export const Price = ({ value, currency, fontSize }: Props) => {
  return (
    <StyledPrice>
      <Text fontSize={fontSize} className="price-text">
        {symbols[currency]}
      </Text>
      <Text fontSize={fontSize} className="price-text">
        {value}
      </Text>
    </StyledPrice>
  )
}

export const symbols = {
  USD: '$',
  EUR: '€',
  JPY: '¥'
}
