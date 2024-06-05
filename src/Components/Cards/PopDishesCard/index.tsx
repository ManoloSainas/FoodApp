import { buttonVariants } from '../../Button/styled'
import { Icon } from '../../Icon'
import { IconName } from '../../Icon/config'
import { IconButton } from '../../IconButton'
import { Image } from '../../Image'
import { Price } from '../../Price'
import { Stack } from '../../Stack'
import { Tag } from '../../Tag'
import { Text } from '../../Text'
import { StyledList, StyledRow } from './styled'
import { symbols } from '../../Price'
import { useCallback, useMemo } from 'react'

type Props = {
  options: {
    imageURL: string
    text: string
    textp: string
    tagText: string
    currency: keyof typeof symbols
    value: string
    iconNameOptional: IconName
    iconNameButton: IconName
    variant?: keyof typeof buttonVariants
    showIconInCorner?: boolean
  }[]
  onClick: () => void
}

export const PopDishes = ({ options, onClick }: Props) => {
  const memorizedOnClick = useCallback(onClick, [])

  const optionsElements = useMemo(
    () =>
      options.map(
        ({
          imageURL,
          text,
          textp,
          tagText,
          currency,
          value,
          iconNameOptional,
          iconNameButton,
          variant,
          showIconInCorner = false
        }) => {
          return (
            <StyledRow key={imageURL}>
              <Stack
                flexDirection="column"
                width="max-content"
                height="max-content"
                alignItems="center"
              >
                <Stack>
                  {showIconInCorner && <Icon iconName={iconNameOptional} />}
                  <Image className="pop-dish-image" imageURL={imageURL} />
                </Stack>

                <Stack flexDirection="column" alignItems="flex-start">
                  <Text className="pop-dish-text" variant="h2">
                    {text}
                  </Text>
                  <Text className="pop-dish-textp">{textp}</Text>
                </Stack>

                <Stack gap="35px" alignItems="center">
                  <Price currency={currency} value={value} />
                  <Stack alignItems="center" gap="10px">
                    <Tag text={tagText} />
                    <IconButton
                      size="lg"
                      variant={variant}
                      iconName={iconNameButton}
                      onClick={memorizedOnClick}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </StyledRow>
          )
        }
      ),
    [options, memorizedOnClick]
  )

  return <StyledList>{optionsElements}</StyledList>
}
