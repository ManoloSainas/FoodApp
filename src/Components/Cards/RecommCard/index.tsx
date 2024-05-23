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
import { useCallback, useMemo } from 'react'
import { Icon } from '../../Icon'

type Props = {
  options: {
    imageURL: string
    text: string
    textp: string
    tagText: string
    currency: keyof typeof symbols
    value: string
    variant?: keyof typeof buttonVariants
    iconName: IconName
    iconNameButton: IconName
    showIconInCorner?: boolean
  }[]
  onClick: () => void
}
export const RecommCard = ({ options, onClick }: Props) => {
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
          variant,
          iconName,
          iconNameButton,
          showIconInCorner = false
        }) => (
          <StyledRow key={imageURL}>
            <Image className="image" imageURL={imageURL} />
            <Stack flexDirection="column">
              <Stack>
                <Text className="text" variant="h2">
                  {text}
                </Text>
                {showIconInCorner && <Icon iconName={iconName} />}
              </Stack>

              <Text className="textp">{textp}</Text>
              <Tag text={tagText} />
              <Stack justifyContent="space-between">
                <Price currency={currency} value={value} />
                <IconButton
                  variant={variant}
                  iconName={iconNameButton}
                  onClick={memorizedOnClick}
                />
              </Stack>
            </Stack>
          </StyledRow>
        )
      ),
    [options, memorizedOnClick]
  )
  return <ul>{optionsElements}</ul>
}
