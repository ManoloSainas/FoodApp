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

export type product = {
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
  available: boolean
  tags: string[]
  delivery: string
  price: { type: keyof typeof symbols; value: string }
}

type Props = {
  products: product[]
  onClick: () => void
}

export const drinks: string[] = ['Pepsi', 'Fanta']

export const PopDishes = ({ products, onClick }: Props) => {
  const memorizedOnClick = useCallback(onClick, [])

  const optionsElements = useMemo(
    () =>
      products.map(
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
          showIconInCorner = false,
          available,
          tags
        }) => {
          if (available === true)
            return (
              <StyledRow key={imageURL}>
                <Stack
                  flexDirection="column"
                  width="max-content"
                  height="max-content"
                  alignItems="center"
                >
                  <Stack flexDirection="column" alignItems="flex-start">
                    {showIconInCorner && <Icon iconName={iconNameOptional} />}
                    <Stack justifyContent="center" width="198px">
                      {tags.includes('534ed6f7-be81-4af3-9c27-ebb8acd2e946') &&
                      !drinks.includes(text) ? (
                        <Image className="pop-dish-image-drink" imageUrl={imageURL} />
                      ) : (
                        <Image className="pop-dish-image" imageUrl={imageURL} />
                      )}
                    </Stack>

                    <Text className="pop-dish-text" variant="h2">
                      {text}
                    </Text>
                    <Text className="pop-dish-textp">{textp}</Text>

                    <Stack
                      alignItems="center"
                      justifyContent="space-between"
                      width="195px"
                      gap="10px"
                    >
                      <Price currency={currency} value={value} />
                      <Stack alignItems="center" gap="7px">
                        <Tag text={tagText} />
                        <IconButton
                          size="lg"
                          variant={variant}
                          iconName={iconNameButton}
                          onClick={memorizedOnClick}
                          disabled={!available}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </StyledRow>
            )
        }
      ),
    [products, memorizedOnClick]
  )

  return <StyledList>{optionsElements}</StyledList>
}
