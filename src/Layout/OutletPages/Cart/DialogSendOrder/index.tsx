import { useSelector } from 'react-redux'
import { Button } from '../../../../Shared Components/Button'
import { Stack } from '../../../../Shared Components/Stack'
import { Text } from '../../../../Shared Components/Text'
import { useCallback } from 'react'
import { StyledDialogSendOrder } from './styled'
import { selectCart } from '../../../../features/cart/selectors'
import { apiClient } from '../../../../features/api/api-client'
import { notifyOrder } from '../../../../features/Toaster'

type Props = {
  onClose: () => void
}

export const DialogSendOrder = ({ onClose }: Props) => {
  const cart = useSelector(selectCart)

  const handleButtonClick = useCallback(() => {
    const sendOrder = async () => {
      try {
        await apiClient.post('order', {
          userId: 'Manolo Sainas',
          items: cart.map((item) => {
            return {
              id: item.id,
              quantity: item.quantityCartObject
            }
          })
        })
        onClose()
        notifyOrder(true)
      } catch (err) {
        console.error(`Error sending order: ${err}`)
        notifyOrder(false)
      }
    }
    sendOrder()
  }, [cart, onClose])

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
        <Button variant="redIcon" onClick={handleButtonClick}>
          Confirm
        </Button>
        <Button variant="greyIcon" onClick={onClose}>
          Cancel
        </Button>
      </Stack>
    </StyledDialogSendOrder>
  )
}
