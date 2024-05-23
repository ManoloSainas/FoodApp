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
    imageURL: string
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
      options.map(({ imageURL, text, tagText, currency, value }) => (
        <StyledRow key={imageURL}>
          <Image className="image" imageURL={imageURL} />
          <Stack flexDirection="column">
            <Text className="text" variant="h2">
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
