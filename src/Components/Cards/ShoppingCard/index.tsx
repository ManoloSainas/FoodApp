import { QuantitySelector } from '../../QuantitySelector'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledRow, StyledTable } from './styled'
import { Stack } from '../../Stack'
import { useMemo } from 'react'
import { CartObject } from '../../../reducers/cartReducer'

type Props = {
  options: CartObject[]
  onClick: (value: string) => void
}

export const ShoppingCard = ({ options, onClick }: Props) => {
  const optionsElements = useMemo(
    () =>
      options.map(({ imageURL, text, tagText, currency, value }) => (
        <StyledRow key={imageURL}>
          <Image className="shopping-image" imageUrl={imageURL} />
          <Stack flexDirection="column">
            <Text className="shopping-text" variant="h2">
              {text}
            </Text>
            <Tag text={tagText} />
          </Stack>

          <QuantitySelector />
          <Price currency={currency} value={value} />
          <IconButton
            variant="redIcon"
            iconName="Xmark"
            onClick={() => onClick(imageURL)}
          />
        </StyledRow>
      )),
    [options, onClick]
  )
  return <StyledTable>{optionsElements}</StyledTable>
}
