import {
  ButtonVariant,
  buttonVariants
} from '../../../../../Shared Components/Button/styled'
import { Icon } from '../../../../../Shared Components/Icon'
import { IconName } from '../../../../../Shared Components/Icon/config'
import { IconButton } from '../../../../../Composite Components/IconButton'
import { Image } from '../../../../../Shared Components/Image'
import { Price } from '../../../../../Composite Components/Price'
import { Stack } from '../../../../../Shared Components/Stack'
import { Tag } from '../../../../../Composite Components/Tag'
import { Text } from '../../../../../Shared Components/Text'
import { StyledList, StyledRow } from './styled'
import { useMemo, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notifyProductAdded } from '../../../../../features/Toaster'
import { drinks, symbols } from '../../../../../constants'

export type product = {
  id: string
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
    id: string,
    imageURL: string,
    text: string,
    tagText: string,
    currency: keyof typeof symbols,
    value: string
  ) => void
}

export const PopDishes = ({ products, onClick }: Props) => {
  const [iconButtonStates, setIconButtonStates] = useState<{
    [key: string]: { variant: ButtonVariant; icon: IconName }
  }>({})

  const handleClick = useCallback((imageURL: string) => {
    setIconButtonStates((prevState) => ({
      ...prevState,
      [imageURL]: { variant: 'redIcon', icon: 'Check' }
    }))
    setTimeout(() => {
      setIconButtonStates((prevState) => ({
        ...prevState,
        [imageURL]: { variant: 'primary', icon: 'Plus' }
      }))
    }, 1000)
  }, [])

  const optionsElements = useMemo(
    () =>
      products.map(
        ({
          id,
          imageURL,
          text,
          textp,
          tagText,
          currency,
          value,
          iconNameOptional,
          showIconInCorner = false,
          available,
          tags
        }) => {
          const iconButtonState = iconButtonStates[imageURL] || {
            variant: 'primary',
            icon: 'Plus'
          }
          if (available)
            return (
              <StyledRow key={id}>
                <Stack
                  flexDirection="column"
                  width="max-content"
                  height="280px"
                  alignItems="center"
                  clickable
                  onClick={() => console.log('Clicked')}
                >
                  <Stack flexDirection="column" alignItems="flex-start">
                    <Link
                      key={imageURL}
                      to={`/ProductDetails`}
                      state={{ id, text, textp, tagText, imageURL, currency, value }}
                    >
                      <Stack
                        flexDirection="column"
                        alignItems="center"
                        clickable
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
                          clickable
                          onClick={() => console.log('Clicked')}
                        >
                          <Price fontSize={27} currency={currency} value={value} />
                          <Tag text={tagText} />
                        </Stack>
                      </Stack>
                    </Link>
                    <Stack justifyContent="center" width="200px" margin="10px 0 0 0">
                      <IconButton
                        size="xl"
                        variant={iconButtonState.variant}
                        iconName={iconButtonState.icon}
                        onClick={() => {
                          onClick(id, imageURL, text, tagText, currency, value)
                          handleClick(imageURL)
                          notifyProductAdded(text)
                        }}
                        disabled={!available}
                        paddingVar="icon"
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </StyledRow>
            )
        }
      ),
    [products, iconButtonStates, handleClick, onClick]
  )

  return (
    <>
      <StyledList>{optionsElements}</StyledList>
      <ToastContainer />
    </>
  )
}
