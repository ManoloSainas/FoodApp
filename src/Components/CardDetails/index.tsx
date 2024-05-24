import { useState } from 'react'
import { Input } from '../Form/Input'
import { Select } from '../Form/Select'
import { ImageRadio } from '../ImageRadio'
import { Stack } from '../Stack'
import { Text } from '../Text'
import { StyledCardDetails } from './styled'

type Props = {
  images: string[]
  value?: string
}

export const CardDetails = ({ images }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [nameSurname, setNameSurname] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expDate, setExpDate] = useState('')
  const [cvv, setCvv] = useState('')

  const handleSubmit = () => {
    const data = {
      paymentMethod,
      nameSurname,
      cardNumber,
      expDate,
      cvv
    }

    console.log(data) // gestire dati
  }
  return (
    <StyledCardDetails>
      <Text variant="h2">Card Details</Text>
      <label htmlFor="cardDetails">
        Payment method
        <ImageRadio
          id="cardDetails"
          width="100px"
          height="100px"
          images={images}
          onChange={(value) => setPaymentMethod(value)}
        />
      </label>

      <label htmlFor="nameId">Name and surname</label>
      <Input
        className="name-surname"
        type="text"
        id="nameId"
        onChange={(value) => setNameSurname(value)}
      />

      <label htmlFor="cardNumberId">Card Number</label>
      <Input
        maxLength={16}
        className="card-number"
        type="text"
        id="cardNumberId"
        onChange={(value) => setCardNumber(value)}
      />
      <Stack width="100%" justifyContent="space-between">
        <label htmlFor="expDate">
          <Stack flexDirection="column">
            Expiration date
            <Select
              id="expDate"
              options={months}
              onChange={(valueM) =>
                setExpDate(Array.isArray(valueM) ? valueM[0] : valueM)
              }
            />
          </Stack>
        </label>

        <label htmlFor="cvv">
          <Stack flexDirection="column">
            CVV
            <Input
              maxLength={3}
              className="cvv"
              type="text"
              id="cvv"
              onChange={(value) => setCvv(value)}
            />
          </Stack>
        </label>
      </Stack>
      <button onClick={handleSubmit}>Submit</button>
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
