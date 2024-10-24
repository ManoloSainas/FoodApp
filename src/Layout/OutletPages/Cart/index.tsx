import { useSelector } from 'react-redux'
import { ShoppingCard } from './ShoppingCard'
import { selectCart, selectCartTotalPrice } from '../../../features/cart/selectors'
import { StyledCardDetailsBox, StyledCart } from './styled'
import { Stack } from '../../../Shared Components/Stack'
import { Text } from '../../../Shared Components/Text'
import { ToPay } from '../../../Composite Components/ToPay'
import { useCallback, useContext, useState } from 'react'
import { CurrencyContext } from '../..'
import { symbols } from '../../../constants'
import { CardDetails } from './CardDetails'
import { MyState } from '../../../features/cart/model'
import { Button } from '../../../Shared Components/Button'
import { DialogDeleteAllProducts } from './DialogDeleteAllProducts'
import { Overlay } from '../../../Shared Components/Overlay/styled'

export const Cart = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const currency = useContext(CurrencyContext) as keyof typeof symbols
  const cart = useSelector(selectCart)
  const priceToPay = useSelector((state: { cart: MyState }) =>
    selectCartTotalPrice(state, currency)
  )

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false)
  }, [])

  return (
    <StyledCart>
      <Stack flex={1} height="100%" flexDirection="column">
        <Text fontSize={30} color="white">
          Shopping Cart
        </Text>
        {cart.length > 0 ? (
          <>
            <Stack
              width="100%"
              justifyContent="center"
              alignItems="center"
              gap="15px"
              margin="40px 0 15px 0"
            >
              <ToPay currency={currency} value={priceToPay.toString()} />
              <Button
                paddingVar="deleteProducts"
                variant="redIcon"
                onClick={() => setIsPopupOpen(true)}
                ariaLabel="Delete all products"
              >
                Delete all products
              </Button>
            </Stack>
            <ShoppingCard options={cart} />
          </>
        ) : (
          <Stack justifyContent="center" alignItems="center" width="100%" height="40%">
            <Text color="#F00C2C" variant="h1">
              Cart is empty
            </Text>
          </Stack>
        )}
      </Stack>
      <StyledCardDetailsBox>
        <CardDetails />
      </StyledCardDetailsBox>
      {isPopupOpen && <Overlay />}
      {isPopupOpen && <DialogDeleteAllProducts onClose={handleClosePopup} />}
    </StyledCart>
  )
}
