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

        <ShoppingCard
          options={cart}
          onClick={(value) => dispatch(deleteProduct(value))}
        />
      </Stack>
      <StyledCardDetails>
        <Text color="red">SHOPPING CART</Text>
      </StyledCardDetails>
    </StyledCart>
  )
}
