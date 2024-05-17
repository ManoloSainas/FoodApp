import { Price } from '../Price'
import { Text } from '../Text'
import { StyledToPay } from './styled'

type Props = {
  value?: string
  currency: keyof typeof symbols
}

export const ToPay = ({ currency, value = '0' }: Props) => {
  return (
    <StyledToPay>
      <Text>To pay:</Text>
      <Price currency={currency} value={value}></Price>
    </StyledToPay>
  )
}

const symbols = {
  Dollar: '$',
  Euro: '€',
  PoundSterling: '£',
  Yen: '¥'
}
