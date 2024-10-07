import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { Image } from '../Image'
import { Price, symbols } from '../Price'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../features/cart/reducer'
import { weirdSizeDrinks } from '../Cards/PopDishesCard'
import { StyledCatalogItem } from './styled'
import { ButtonVariant } from '../Button/styled'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import { selectQuantityByImageURL } from '../../features/cart/selectors'
// import { MyState } from '../../features/cart/model'

import { notify } from '../../features/Toaster'

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

  // const quantityCartObject = useSelector((state: { cart: MyState }) =>
  //   selectQuantityByImageURL(state, imageURL)
  // )

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

  function handleClick() {
    dispatch(addProduct(product))

    setButtonState({ variant: 'redIcon', buttonText: 'Added to cart' })

    setTimeout(() => {
      setButtonState({ variant: 'primary', buttonText: 'Order Now' })
    }, 1000)
  }

  return (
    <StyledCatalogItem>
      <Stack justifyContent="end" width="100%">
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
                  handleClick(), notify(text)
                }}
              >
                {buttonState.buttonText}
              </Button>
            </Stack>
          </Stack>

          <Stack height="100%" alignItems="center">
            {!weirdSizeDrinks.includes(text) ? (
              <Image className="pop-dish-image-drink" imageUrl={imageURL} />
            ) : (
              <Image className="pop-dish-image" imageUrl={imageURL} />
            )}
          </Stack>
        </Stack>
      </Stack>
      <ToastContainer />
    </StyledCatalogItem>
  )
}
