import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { StyledShoppingCart } from './styled'

export const ShoppingCart = () => {
  return (
    <StyledShoppingCart>
      <Stack height="100%" width="100%">
        <Stack flex={1} justifyContent="center" alignItems="center" height="100%">
          <Text color="red">SHOPPING CART</Text>
        </Stack>
        <Stack flex={1} justifyContent="center" alignItems="center" height="100%">
          <Text color="red">SHOPPING CART</Text>
        </Stack>
      </Stack>
    </StyledShoppingCart>
  )
}
