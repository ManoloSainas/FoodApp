import { Text } from '../Text'
import { StyledPrice } from './styled'

type Props = {
  value: string
  currency: keyof typeof symbols
}

export const Price = ({ value, currency }: Props) => {
  return (
    <StyledPrice>
      <Text>{symbols[currency]}</Text>
      <Text>{value}</Text>
    </StyledPrice>
  )
}

const symbols = {
  Dollar: '$',
  Euro: '€',
  PoundSterling: '£',
  Yen: '¥'
}
