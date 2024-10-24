import { ImageRadio } from '../../../../Composite Components/ImageRadio'
import { Button } from '../../../../Shared Components/Button'
import { Hr } from '../../../../Shared Components/Hr'
import { Input } from '../../../../Shared Components/Input'
import { Stack } from '../../../../Shared Components/Stack'
import { Text } from '../../../../Shared Components/Text'
import { CardExpiration } from './CardExpiration'
import { StyledCardDetails } from './styled'
import { useCallback, useState } from 'react'
import { DialogSendOrder } from '../DialogSendOrder'
import { useSelector } from 'react-redux'
import { selectCart } from '../../../../features/cart/selectors'
import { notifyOrder } from '../../../../features/Toaster'
import { Overlay } from '../../../../Shared Components/Overlay/styled'

export const CardDetails = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const cart = useSelector(selectCart)

  const handleButtonClick = useCallback(() => {
    cart.length > 0 ? setIsPopupOpen(true) : notifyOrder(false)
  }, [cart])

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false)
  }, [])

  return (
    <StyledCardDetails>
      <Text fontSize={30} color="white">
        Card Details
      </Text>
      <Stack flexDirection="column" gap="15px" margin="0 0 20px 0">
        <Text fontSize={22} variant="p" color="#e4e4e4eb">
          Payment method
        </Text>
        <ImageRadio
          width="100%"
          onChange={() => console.log('card')}
          images={[
            'src\\assets\\Images\\visa.png',
            'src\\assets\\Images\\mastercard.png'
          ]}
        />
      </Stack>
      <Stack flexDirection="column" gap="15px">
        <Text fontSize={22} variant="p" color="#e4e4e4eb">
          Name and Surname
        </Text>
        <Input
          placeholder="E.g. James Sunderland"
          type="text"
          onChange={() => console.log('name')}
        />
        <Hr />
      </Stack>
      <Stack flexDirection="column" gap="15px" margin="20px 0 20px 0">
        <Text fontSize={22} variant="p" color="#e4e4e4eb">
          Card Number
        </Text>
        <Input
          placeholder="E.g. 1234 5678 1234 5678"
          maxLength={16}
          type="text"
          onChange={() => console.log('number')}
        />
        <Hr />
      </Stack>
      <Stack gap="20px" margin="20px 0 20px 0">
        <Stack flexDirection="column" padding="0 0 20px 0 " gap="30px">
          <Text fontSize={22} variant="p" color="#e4e4e4eb">
            Expiration Date
          </Text>

          <CardExpiration />
        </Stack>

        <Stack flexDirection="column" gap="23px">
          <Text fontSize={22} variant="p" color="#e4e4e4eb">
            CVV
          </Text>
          <Input
            placeholder="E.g. 753"
            maxLength={3}
            type="text"
            onChange={() => console.log('cvv')}
          />
          <Hr className="cvv" />
        </Stack>
      </Stack>
      <Stack justifyContent="center">
        <Stack margin="20px 0 0 0">
          <Button onClick={handleButtonClick} ariaLabel="send order">
            Check Out
          </Button>
          {isPopupOpen && <Overlay />}
          {isPopupOpen && <DialogSendOrder onClose={handleClosePopup} />}
        </Stack>
      </Stack>
    </StyledCardDetails>
  )
}
