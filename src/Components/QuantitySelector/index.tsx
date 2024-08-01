import { useCallback, useState } from 'react'

import { StyledQuantitySelector } from './styled'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

type Props = {
  initalQuantity?: number
}

export const QuantitySelector = ({ initalQuantity = 1 }: Props) => {
  const [quantity, setQuantity] = useState(initalQuantity)

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }, [quantity])

  return (
    <StyledQuantitySelector>
      <IconButton
        size="xs"
        iconName="Plus"
        onClick={handleIncrement}
        variant="greyIcon"
      />
      <Text className="quant-select-text" variant="span">
        {quantity}
      </Text>
      <IconButton
        size="xs"
        iconName="Minus"
        onClick={handleDecrement}
        disabled={quantity <= 1}
        variant="greyIcon"
      />
    </StyledQuantitySelector>
  )
}
