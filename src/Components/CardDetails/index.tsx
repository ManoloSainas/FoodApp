import { Input } from '../Form/Input'
import { Select } from '../Form/Select'
import { ImageRadio } from '../ImageRadio'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledCardDetails } from './styled'

type Props = {
  images: string[]
}

export const CardDetails = ({ images }: Props) => {
  return (
    <StyledCardDetails>
      <Text variant="h2">Card Details</Text>
      <label>
        Payment method
        <ImageRadio
          width="100px"
          height="100px"
          images={images}
          onChange={(value) => console.log(value)}
        />
      </label>

      <label htmlFor="nameId">Name and surname</label>
      <Input
        className="name-surname"
        type="text"
        id="nameId"
        onChange={(value) => console.log(value)}
      />

      <label htmlFor="cardNumberId">Card Number</label>
      <Input
        maxLength={16}
        className="card-number"
        type="text"
        id="cardNumberId"
        onChange={(value) => console.log(value)}
      />

      <label>
        <Stack flexDirection="column">
          Expiration date
          <Select options={months} onChange={(value) => console.log(value)} />
        </Stack>
      </label>
    </StyledCardDetails>
  )
}

export const months = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' }
]
