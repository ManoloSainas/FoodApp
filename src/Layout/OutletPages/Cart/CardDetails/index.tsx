import { CardDetailsBody } from './CardDetailsBody'
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
      <CardDetailsBody />
    </StyledCardDetails>
  )
}
