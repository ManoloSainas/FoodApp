import { Input } from '../Form/Input'
import { ImageRadio } from '../ImageRadio'
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
    </StyledCardDetails>
  )
}
