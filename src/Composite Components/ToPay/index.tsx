import { Price } from '../Price'
import { Text } from '../../Shared Components/Text'
import { StyledToPay } from './styled'
import { symbols } from '../../constants'

type Props = {
  value?: string
  currency: keyof typeof symbols
}

export const ToPay = ({ currency, value = '0' }: Props) => {
  return (
    <StyledToPay>
      <Text>To pay:</Text>
      <Price currency={currency} value={value} />
    </StyledToPay>
  )
}
