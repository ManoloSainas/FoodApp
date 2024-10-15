import { ImageRadio } from '../../../../Composite Components/ImageRadio'
import { Input } from '../../../../Shared Components/Input'
import { Stack } from '../../../../Shared Components/Stack'
import { Text } from '../../../../Shared Components/Text'
import { StyledCardDetails, StyledHr } from './styled'

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
          onChange={() => console.log('carta')}
          images={[
            'src\\assets\\Images\\visa.png',
            'src\\assets\\Images\\mastercard.png'
          ]}
        />
      </Stack>
      <Stack flexDirection="column" gap="15px" margin="20px 0 20px 0">
        <Text variant="p" color="#312F3B">
          Name and Surname
        </Text>
        <Input type="text" onChange={() => console.log('nome')} />
        <StyledHr />
      </Stack>

      <Stack flexDirection="column" gap="15px" margin="20px 0 20px 0">
        <Text variant="p" color="#312F3B">
          Card Number
        </Text>
        <Input maxLength={16} type="text" onChange={() => console.log('numero')} />
        <StyledHr />
      </Stack>
    </StyledCardDetails>
  )
}
