import { StyledQuantitySelector } from './styled'
import { IconButton } from '../IconButton'
import { Text } from '../Text'
import { useMemo } from 'react'

type Props = {
  quantity?: number
  onClickPlus: () => void
  onClickMinus: () => void
}

export const QuantitySelector = ({ quantity = 1, onClickPlus, onClickMinus }: Props) => {
  const isMinusDisabled = useMemo(() => quantity <= 1, [quantity])

  return (
    <StyledQuantitySelector>
      <IconButton
        size="xs"
        iconName="Plus"
        onClick={onClickPlus}
        variant="greyIcon"
        paddingVar="icon"
      />
      <Text className="quant-select-text" variant="span">
        {quantity}
      </Text>
      <IconButton
        size="xs"
        iconName="Minus"
        onClick={onClickMinus}
        disabled={isMinusDisabled}
        variant="greyIcon"
        paddingVar="icon"
      />
    </StyledQuantitySelector>
  )
}
