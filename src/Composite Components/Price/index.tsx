import { symbols } from '../../constants'
import { Text } from '../../Shared Components/Text'
import { StyledPrice } from './styled'
import { useMemo } from 'react'

type Props = {
  value: string
  currency: keyof typeof symbols
  fontSize?: number
}

export const Price = ({ value, currency, fontSize }: Props) => {
  const symbol = useMemo(() => symbols[currency], [currency])

  return (
    <StyledPrice>
      <Text fontSize={fontSize} className="price-text">
        {symbol}
      </Text>
      <Text fontSize={fontSize} className="price-text">
        {value}
      </Text>
    </StyledPrice>
  )
}