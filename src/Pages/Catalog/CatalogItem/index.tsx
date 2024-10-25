import { useState, useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { StyledCatalogItem } from './styled'
import { Button } from '../../../shared components/Button'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
import { Image } from '../../../shared components/Image'
import { Price } from '../../../shared components/Price'
import { Rating } from '../../../shared components/Rating'
import { convertValue } from '../../../utils/convertValues'
import { CurrencyContext } from '../../../Layout'
import { symbols } from '../../../constants'
import { conversionRates } from '../../../constants'
import { notifyProductAdded } from '../../../features/Toaster'
import { weirdSizeDrinks } from '../../../constants'
import { ButtonVariant } from '../../../shared components/Button/styled'
import { updateProductQuantity } from '../../../features/cart/reducer'

type Props = {
  text: string
  textp: string
  tagText: string
  imageURL: string
  currency: keyof typeof symbols
  value: string
  rating: string
  discountRate: number
  id: string
  delivery: string
}

export const CatalogItem = ({
  text,
  textp,
  tagText,
  imageURL,
  currency,
  value,
  rating,
  discountRate,
  id,
  delivery
}: Props) => {
  const dispatch = useDispatch()
  const selectedCurrency = useContext(CurrencyContext) as keyof typeof symbols

  const convertedValue =
    convertValue({ type: currency, value }, selectedCurrency, conversionRates) || ''

  const [buttonState, setButtonState] = useState<{
    variant: ButtonVariant
    buttonText: string
  }>({
    variant: 'primary',
    buttonText: 'Order Now'
  })

  const handleClick = useCallback(() => {
    const product = {
      imageURL,
      text,
      tagText,
      currency,
      value,
      discountRate,
      id,
      delivery
    }

    dispatch(updateProductQuantity({ product: product, quantity: 1 }))
    setButtonState({ variant: 'redIcon', buttonText: 'Added to cart' })

    setTimeout(() => {
      setButtonState({ variant: 'primary', buttonText: 'Order Now' })
    }, 1000)
  }, [dispatch, imageURL, text, tagText, currency, value, discountRate, id, delivery])

  return (
    <StyledCatalogItem>
      <Stack justifyContent="end" width="65%">
        <Link to="/catalog">
          <Button
            ariaLabel="return to catalog"
            onClick={() => console.log('clicked')}
            paddingVar="button"
            variant="outlined"
          >
            Return to catalog
          </Button>
        </Link>
      </Stack>

      <Stack flexDirection="column">
        <Stack>
          <Text fontWeight="bold" color="white" fontSize={50}>
            {text}
          </Text>
        </Stack>

        <Rating value={rating} />

        <Stack height="400px" gap="15px">
          <Stack
            flexDirection="column"
            justifyContent="space-between"
            height="90%"
            width="300px"
          >
            <Stack>
              <Text color="#404042" variant="h5">
                {textp}
              </Text>
            </Stack>

            <Stack flexDirection="column" gap="30px">
              <Stack alignItems="center" justifyContent="space-between" gap="35px">
                <Price fontSize={40} currency={selectedCurrency} value={convertedValue} />
              </Stack>

              <Button
                ariaLabel="order now"
                variant={buttonState.variant}
                paddingVar="button"
                onClick={() => {
                  handleClick()
                  notifyProductAdded(text)
                }}
              >
                {buttonState.buttonText}
              </Button>
            </Stack>
          </Stack>

          <Stack height="100%" alignItems="center">
            {weirdSizeDrinks.includes(text) ? (
              <Image className="pop-dish-image" imageUrl={imageURL} />
            ) : (
              <Image className="pop-dish-image-drink" imageUrl={imageURL} />
            )}
          </Stack>
        </Stack>
      </Stack>
    </StyledCatalogItem>
  )
}
