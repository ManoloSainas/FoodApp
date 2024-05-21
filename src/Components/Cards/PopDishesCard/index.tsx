import { buttonVariants } from '../../Button/styled'
import { Icon } from '../../Icon'
import { IconName } from '../../Icon/config'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Stack } from '../../Stack'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledRow } from './styled'

type Props = {
  options: {
    imageURL: string
    text: string
    textp: string
    tagText: string
    currency: keyof typeof symbols
    value: string
    onClick: () => void
    iconName: IconName
    IconName2: IconName
    variant: keyof typeof buttonVariants
  }[]
}

export const PopDishes = ({ options }: Props) => {
  return (
    <ul>
      {options.map(
        ({
          imageURL,
          text,
          textp,
          tagText,
          currency,
          value,
          onClick,
          iconName,
          IconName2,
          variant
        }) => (
          <StyledRow key={imageURL}>
            <Icon iconName={iconName} />
            <Image imageURL={imageURL} />
            <Text color="#E6E5E8" variant="h2">
              {text}
            </Text>
            <Text color="#58585C">{textp}</Text>
            <Price currency={currency} value={value} />
            <Tag text={tagText} />
            <IconButton variant={variant} iconName={IconName2} onClick={onClick} />
          </StyledRow>
        )
      )}
    </ul>
  )
}

const symbols = {
  Dollar: '$',
  Euro: '€',
  PoundSterling: '£',
  Yen: '¥'
}
