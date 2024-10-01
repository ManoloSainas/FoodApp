import { useCallback, useState } from 'react'

import { StyledQuantitySelector } from './styled'
import { IconButton } from '../IconButton'
import { Text } from '../Text'
import { useDispatch } from 'react-redux'

import { deleteOneProduct } from '../../features/cart/reducer'
import { addOneProduct } from '../../features/cart/reducer'

type Props = {
  initalQuantity?: number
  product: string
}

export const QuantitySelector = ({ initalQuantity = 1, product }: Props) => {
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState(initalQuantity)

  const handleIncrement = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1)
    dispatch(addOneProduct(product))
  }, [])

  const handleDecrement = useCallback(() => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1)
      dispatch(deleteOneProduct(product))
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
