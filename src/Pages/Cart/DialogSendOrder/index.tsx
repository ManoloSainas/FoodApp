import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { StyledDialogSendOrder } from './styled'
import { Button } from '../../../shared components/Button'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
import { notifyOrder } from '../../../features/Toaster'
import { apiClient } from '../../../features/api/api-client'
import { clearCart } from '../../../features/cart/reducer'
import { selectCart } from '../../../features/cart/selectors'

type Props = {
  onClose: () => void
}

export const DialogSendOrder = ({ onClose }: Props) => {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()

  const handleButtonClick = useCallback(() => {
    const sendOrder = async () => {
      try {
        await apiClient.post('order', {
          userId: 'Manolo Sainas',
          items: cart.map((item) => {
            return {
              id: item.product.id,
              quantity: item.quantity
            }
          })
        })

        onClose()
        notifyOrder(true)
        dispatch(clearCart())
      } catch (err) {
        console.error(`Error sending order: ${err}`)
        notifyOrder(false)
      }
    }
    sendOrder()
  }, [cart, dispatch, onClose])

  return (
    <StyledDialogSendOrder>
      <Stack flexDirection="column" alignItems="center">
        <Text variant="h2" fontWeight="bold">
          Would you like to submit the order?
        </Text>
        <Text>
          You are about to remove the products from the cart and submit the order.
        </Text>
      </Stack>

      <Stack justifyContent="center" width="100%" gap="50px">
        <Button
          ariaLabel="submit the order"
          variant="redIcon"
          onClick={handleButtonClick}
        >
          Confirm
        </Button>
        <Button ariaLabel="cancel" variant="greyIcon" onClick={onClose}>
          Cancel
        </Button>
      </Stack>
    </StyledDialogSendOrder>
  )
}
