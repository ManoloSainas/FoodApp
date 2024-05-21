import { QuantitySelector } from '../../QuantitySelector'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledRow } from './styled'

type Props = {
  options: {
    imageURL: string
    text: string
    tagText: string
    currency: keyof typeof symbols
    value: string
    onClick: () => void
  }[]
}

export const ShoppingCard = ({ options }: Props) => {
  return (
    <ul>
      {options.map(({ imageURL, text, tagText, currency, value, onClick }) => (
        <StyledRow key={imageURL}>
          <Image imageURL={imageURL} />
          <Text color="#E6E5E8" variant="h2">
            {text}
          </Text>
          <Tag text={tagText} />
          <QuantitySelector />
          <Price currency={currency} value={value} />
          <IconButton variant="redIcon" iconName="Xmark" onClick={onClick} />
        </StyledRow>
      ))}
    </ul>
  )
}

const symbols = {
  Dollar: '$',
  Euro: '€',
  PoundSterling: '£',
  Yen: '¥'
}
