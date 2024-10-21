import { useSelector } from 'react-redux'
import { ShoppingCard } from './ShoppingCard'
import { selectCart, selectCartTotalPrice } from '../../../features/cart/selectors'
import { StyledCardDetailsBox, StyledCart } from './styled'
import { Stack } from '../../../Shared Components/Stack'
import { Text } from '../../../Shared Components/Text'
import { ToPay } from '../../../Composite Components/ToPay'
import { useContext } from 'react'
import { CurrencyContext } from '../..'
import { symbols } from '../../../constants'
import { CardDetails } from './CardDetails'
import { MyState } from '../../../features/cart/model'

export const Cart = () => {
  const cart = useSelector(selectCart)
  const currency = useContext(CurrencyContext) as keyof typeof symbols
  const priceToPay = useSelector((state: { cart: MyState }) =>
    selectCartTotalPrice(state, currency)
  )

  console.log(cart)

  return (
    <StyledCart>
      <Stack flex={1} height="100%" flexDirection="column">
        <Text fontSize={30} color="white">
          Shopping Cart
        </Text>
        {cart.length > 0 ? (
          <>
            <Stack width="100%" justifyContent="end">
              <ToPay currency={currency} value={priceToPay.toString()} />
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
    </StyledCart>
  )
}
