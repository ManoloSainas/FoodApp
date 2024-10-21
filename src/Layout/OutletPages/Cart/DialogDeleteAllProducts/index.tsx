import { useDispatch } from 'react-redux'
import { Button } from '../../../../Shared Components/Button'
import { Stack } from '../../../../Shared Components/Stack'
import { Text } from '../../../../Shared Components/Text'
import { useCallback } from 'react'
import { clearCart } from '../../../../features/cart/reducer'
import { StyledDialogDeleteAllProducts } from './styled'

type Props = {
  onClose: () => void
}

export const DialogDeleteAllProducts = ({ onClose }: Props) => {
  const dispatch = useDispatch()

  const handleDeleteProduct = useCallback(() => {
    dispatch(clearCart())
    onClose()
  }, [dispatch, onClose])

  return (
    <StyledDialogDeleteAllProducts>
      <Stack flexDirection="column" alignItems="center">
        <Text variant="h2" fontWeight="bold">
          Are you sure you want to remove all items from your cart?
        </Text>
        <Text>
          Once removed, you will need to add the items again if you change your mind.
        </Text>
      </Stack>

      <Stack justifyContent="center" width="100%" gap="50px">
        <Button
          ariaLabel="delete product"
          variant="redIcon"
          onClick={() => handleDeleteProduct()}
        >
          Confirm
        </Button>
        <Button ariaLabel="cancel" variant="greyIcon" onClick={onClose}>
          Cancel
        </Button>
      </Stack>
    </StyledDialogDeleteAllProducts>
  )
}
