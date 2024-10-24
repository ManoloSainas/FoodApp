import { useDispatch } from 'react-redux'
import { StyledDialogDeleteProduct } from './styled'
import { useCallback } from 'react'
import { Button } from '../../../shared components/Button'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
import { deleteProduct } from '../../../features/cart/reducer'

type Props = {
  onClose: () => void
  productId: string
}

export const DialogDeleteProduct = ({ onClose, productId }: Props) => {
  const dispatch = useDispatch()

  const handleDeleteProduct = useCallback(
    (value: string) => {
      dispatch(deleteProduct(value))
      onClose()
    },
    [dispatch, onClose]
  )

  return (
    <StyledDialogDeleteProduct>
      <Stack flexDirection="column" alignItems="center">
        <Text variant="h2" fontWeight="bold">
          Are you sure you want to remove this item from your cart?
        </Text>
        <Text>
          Once removed, you will need to add the item again if you change your mind.
        </Text>
      </Stack>

      <Stack justifyContent="center" width="100%" gap="50px">
        <Button
          ariaLabel="delete the product"
          variant="redIcon"
          onClick={() => handleDeleteProduct(productId)}
        >
          Confirm
        </Button>
        <Button ariaLabel="cancel" variant="greyIcon" onClick={onClose}>
          Cancel
        </Button>
      </Stack>
    </StyledDialogDeleteProduct>
  )
}
