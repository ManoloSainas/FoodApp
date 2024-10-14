import { useSelector } from 'react-redux'
import { ShoppingCard } from './ShoppingCard'
import { selectCart } from '../../../features/cart/selectors'
import { StyledCardDetails, StyledCart } from './styled'
import { Stack } from '../../../Shared Components/Stack'
import { Text } from '../../../Shared Components/Text'

export const Cart = () => {
  const cart = useSelector(selectCart)

  return (
    <StyledCart>
      <Stack flex={1} height="100%" flexDirection="column">
        <Text fontSize={25} color="white">
          Shopping Cart
        </Text>
        {cart.length > 0 ? (
          <>
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
      <StyledCardDetails>
        <Text color="red">SHOPPING CART</Text>
      </StyledCardDetails>
    </StyledCart>
  )
}
