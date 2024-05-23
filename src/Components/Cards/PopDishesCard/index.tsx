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
    iconName: IconName
    IconNameButton: IconName
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
          iconName,
          IconNameButton,
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
                gap="10px"
              >
                <Stack>
                  {showIconInCorner && <Icon iconName={iconName} />}
                  <Image className="image" width={100} height={100} imageURL={imageURL} />
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

  return <ul>{optionsElements}</ul>
}
