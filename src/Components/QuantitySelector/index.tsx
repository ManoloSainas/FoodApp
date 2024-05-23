import { useCallback, useState } from 'react'

import { StyledQuantitySelector } from './styled'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

export const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1)

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
      <IconButton iconName="Plus" onClick={handleIncrement} />
      <Text className="text" variant="span">
        {quantity}
      </Text>
      <IconButton iconName="Minus" onClick={handleDecrement} disabled={quantity <= 0} />
    </StyledQuantitySelector>
  )
}
