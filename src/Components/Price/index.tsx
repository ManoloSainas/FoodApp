import { Text } from '../Text'
import { StyledPrice } from './styled'

type Props = {
  value: string
  currency: keyof typeof symbols
}

export const Price = ({ value, currency }: Props) => {
  return (
    <StyledPrice>
      <Text className="price-text">{symbols[currency]}</Text>
      <Text className="price-text">{value}</Text>
    </StyledPrice>
  )
}

export const symbols = {
  USD: '$',
  EUR: '€',
  JPY: '¥'
}
