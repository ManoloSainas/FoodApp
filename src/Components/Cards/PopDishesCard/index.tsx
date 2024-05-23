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
    IconNameButton: IconName
    variant?: keyof typeof buttonVariants
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
          IconNameButton,
          variant
        }) => (
          <StyledRow key={imageURL}>
            <Stack
              flexDirection="column"
              width="max-content"
              height="max-content"
              alignItems="center"
              gap="10px"
            >
              <Stack>
                <Icon iconName={iconName} />
                <Image width={100} height={100} imageURL={imageURL} />
              </Stack>

              <Stack flexDirection="column" alignItems="center">
                <Text color="#E6E5E8" variant="h2">
                  {text}
                </Text>
                <Text color="#58585C">{textp}</Text>
              </Stack>

              <Stack gap="30px">
                <Price currency={currency} value={value} />
                <Stack>
                  <Tag text={tagText} />
                  <IconButton
                    variant={variant}
                    iconName={IconNameButton}
                    onClick={onClick}
                  />
                </Stack>
              </Stack>
            </Stack>
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
