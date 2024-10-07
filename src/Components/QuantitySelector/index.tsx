import { StyledQuantitySelector } from './styled'
import { IconButton } from '../IconButton'
import { Text } from '../Text'

type Props = {
  quantity?: number
  onClickPlus: () => void
  onClickMinus: () => void
}

export const QuantitySelector = ({ quantity = 1, onClickPlus, onClickMinus }: Props) => {
  return (
    <StyledQuantitySelector>
      <IconButton size="xs" iconName="Plus" onClick={onClickPlus} variant="greyIcon" />
      <Text className="quant-select-text" variant="span">
        {quantity}
      </Text>
      <IconButton
        size="xs"
        iconName="Minus"
        onClick={onClickMinus}
        disabled={quantity <= 1}
        variant="greyIcon"
      />
    </StyledQuantitySelector>
  )
}
