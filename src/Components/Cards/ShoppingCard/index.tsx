import { QuantitySelector } from '../../QuantitySelector'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledRow } from './styled'
import { Stack } from '../../Stack'
import { symbols } from '../../Price'
import { useCallback, useMemo } from 'react'

type Props = {
  options: {
    imageUrl: string
    text: string
    tagText: string
    currency: keyof typeof symbols
    value: string
  }[]
  onClick: () => void
}

export const ShoppingCard = ({ options, onClick }: Props) => {
  const memorizedOnClick = useCallback(onClick, [])

  const optionsElements = useMemo(
    () =>
      options.map(({ imageUrl, text, tagText, currency, value }) => (
        <StyledRow key={imageUrl}>
          <Image className="shopping-image" imageUrl={imageUrl} />
          <Stack flexDirection="column">
            <Text className="shopping-text" variant="h2">
              {text}
            </Text>
            <Tag text={tagText} />
          </Stack>

          <QuantitySelector />
          <Price currency={currency} value={value} />
          <IconButton variant="redIcon" iconName="Xmark" onClick={memorizedOnClick} />
        </StyledRow>
      )),
    [options, memorizedOnClick]
  )
  return <ul>{optionsElements}</ul>
}
