import { buttonVariants } from '../../Button/styled'
import { IconName } from '../../Icon/config'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Stack } from '../../Stack'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledRow } from '../RecommCard/styled'
import { symbols } from '../../Price'

type Props = {
  options: {
    imageURL: string
    text: string
    textp: string
    tagText: string
    currency: keyof typeof symbols
    value: string
    onClick: () => void
    variant?: keyof typeof buttonVariants
    iconName: IconName
  }[]
}
export const RecommCard = ({ options }: Props) => {
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
          variant,
          iconName
        }) => (
          <StyledRow key={imageURL}>
            <Image imageURL={imageURL} />
            <Stack flexDirection="column">
              <Text color="#E6E5E8" variant="h2">
                {text}
              </Text>
              <Text color="#58585C">{textp}</Text>
              <Tag text={tagText} />
              <Stack justifyContent="space-between">
                <Price currency={currency} value={value} />
                <IconButton variant={variant} iconName={iconName} onClick={onClick} />
              </Stack>
            </Stack>
          </StyledRow>
        )
      )}
    </ul>
  )
}
