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
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

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
  onClick: (
    imageURL: string,
    text: string,
    tagText: string,
    currency: keyof typeof symbols,
    value: string
  ) => void
}

export const drinks: string[] = ['Pepsi', 'Fanta']

export const PopDishes = ({ products, onClick }: Props) => {
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
                  height="280px"
                  alignItems="center"
                  clickable={true}
                  onClick={() => console.log('Clicked')}
                >
                  <Stack flexDirection="column" alignItems="flex-start">
                    <Link
                      key={imageURL}
                      to={`/ProductDetails`}
                      state={{ text, textp, tagText, imageURL, currency, value }}
                    >
                      <Stack
                        flexDirection="column"
                        alignItems="center"
                        clickable={true}
                        onClick={() => console.log('Clicked')}
                      >
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
                      </Stack>

                      <Stack
                        flexDirection="column"
                        alignItems="center"
                        gap="20px"
                        justifyContent="center"
                      >
                        <Stack
                          justifyContent="space-around"
                          alignItems="center"
                          width="max-content"
                          gap="20px"
                          clickable={true}
                          onClick={() => console.log('Clicked')}
                        >
                          <Price fontSize={30} currency={currency} value={value} />
                          <Tag text={tagText} />
                        </Stack>
                      </Stack>
                    </Link>
                    <Stack justifyContent="center" width="200px" margin="10px 0 0 0">
                      <IconButton
                        size="xl"
                        variant={variant}
                        iconName={iconNameButton}
                        onClick={() => {
                          onClick(imageURL, text, tagText, currency, value)
                        }}
                        disabled={!available}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </StyledRow>
            )
        }
      ),
    [products]
  )

  return <StyledList>{optionsElements}</StyledList>
}
