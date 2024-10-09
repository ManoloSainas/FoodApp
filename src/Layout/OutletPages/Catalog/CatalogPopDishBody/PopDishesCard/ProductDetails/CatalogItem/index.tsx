import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Price, symbols } from '../../../../../../../Composite Components/Price'
import { useDispatch } from 'react-redux'
import { ButtonVariant } from '../../../../../../../Shared Components/Button/styled'
import { addProduct } from '../../../../../../../features/cart/reducer'
import { StyledCatalogItem } from './styled'
import { Stack } from '../../../../../../../Shared Components/Stack'
import { Button } from '../../../../../../../Shared Components/Button'
import { Text } from '../../../../../../../Shared Components/Text'
import { notify } from '../../../../../../../features/Toaster'
import { weirdSizeDrinks } from '../..'
import { Image } from '../../../../../../../Shared Components/Image'

type Props = {
  text: string
  textp: string
  tagText: string
  imageURL: string
  currency: keyof typeof symbols
  value: string
}

export const CatalogItem = ({
  text,
  textp,
  tagText,
  imageURL,
  currency,
  value
}: Props) => {
  const dispatch = useDispatch()

  const [buttonState, setButtonState] = useState<{
    variant: ButtonVariant
    buttonText: string
  }>({
    variant: 'primary',
    buttonText: 'Order Now'
  })

  const product = {
    imageURL,
    text,
    tagText,
    currency,
    value,
    quantityCartObject: 1
  }

  const handleClick = useCallback(() => {
    dispatch(addProduct(product))
    setButtonState({ variant: 'redIcon', buttonText: 'Added to cart' })

    setTimeout(() => {
      setButtonState({ variant: 'primary', buttonText: 'Order Now' })
    }, 1000)
  }, [dispatch, product])

  return (
    <StyledCatalogItem>
      <Stack justifyContent="end" width="65%">
        <Link to="/catalog">
          <Button
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
                <Price fontSize={40} currency={currency} value={value} />
              </Stack>

              <Button
                variant={buttonState.variant}
                paddingVar="button"
                onClick={() => {
                  handleClick()
                  notify(text)
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
      <ToastContainer />
    </StyledCatalogItem>
  )
}
