import { useDispatch, useSelector } from 'react-redux'
import { ShoppingCard } from '../../Components/Cards/ShoppingCard'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { StyledCardDetails, StyledCart } from './styled'
import { deleteProduct, selectCart } from '../../reducers/cartReducer'

export const Cart = () => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  return (
    <StyledCart>
      <Stack flex={1} height="100%" flexDirection="column">
        <Text fontSize={25} color="white">
          Shopping Cart
        </Text>
        {cart.length > 0 ? (
          <ShoppingCard
            options={cart}
            onClick={(value) => dispatch(deleteProduct(value))}
          />
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
