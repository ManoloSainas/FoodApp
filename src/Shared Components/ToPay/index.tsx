import { Price } from '../Price'
import { Text } from '../Text'
import { StyledToPay } from './styled'
import { symbols } from '../../constants'

type Props = {
  value?: string
  currency: keyof typeof symbols
}

export const ToPay = ({ currency, value = '0' }: Props) => {
  return (
    <StyledToPay>
      <Text fontWeight="bold" fontSize={20}>
        To pay:
      </Text>
      <Price fontSize={20} currency={currency} value={value} />
    </StyledToPay>
  )
}
