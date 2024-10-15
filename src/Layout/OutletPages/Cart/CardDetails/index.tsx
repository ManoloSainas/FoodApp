import { ImageRadio } from '../../../../Composite Components/ImageRadio'
import { Hr } from '../../../../Shared Components/Hr'
import { Input } from '../../../../Shared Components/Input'
import { Stack } from '../../../../Shared Components/Stack'
import { Text } from '../../../../Shared Components/Text'
import { CardExpiration } from './CardExpiration'
import { StyledCardDetails } from './styled'

type order = [
  {
    date: string
    id: string
    items: [
      {
        delivery: string
        id: string
        quantity: 0
        price: {
          value: 0
          type: string
        }
      }
    ]
  }
]

export const CardDetails = () => {
  return (
    <StyledCardDetails>
      <Text fontSize={28} color="white">
        Card Details
      </Text>
      <Stack flexDirection="column" gap="15px" margin="0 0 20px 0">
        <Text variant="p" color="#312F3B">
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
        <Text variant="p" color="#312F3B">
          Name and Surname
        </Text>
        <Input type="text" onChange={() => console.log('name')} />
        <Hr />
      </Stack>

      <Stack flexDirection="column" gap="15px" margin="20px 0 20px 0">
        <Text variant="p" color="#312F3B">
          Card Number
        </Text>
        <Input maxLength={16} type="text" onChange={() => console.log('number')} />
        <Hr />
      </Stack>

      <Stack gap="20px" margin="20px 0 20px 0">
        <Stack flexDirection="column" padding="0 0 20px 0 " gap="30px">
          <Text variant="p" color="#312F3B">
            Expiration Date
          </Text>

          <CardExpiration />
        </Stack>

        <Stack flexDirection="column" gap="23px">
          <Text variant="p" color="#312F3B">
            CVV
          </Text>
          <Input maxLength={3} type="text" onChange={() => console.log('cvv')} />
          <Hr />
        </Stack>
      </Stack>
    </StyledCardDetails>
  )
}
