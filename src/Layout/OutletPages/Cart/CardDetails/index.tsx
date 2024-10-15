import { useSelector } from 'react-redux'
import { CardDetailsBody } from './CardDetailsBody'
import { StyledCardDetails } from './styled'
import { selectCart } from '../../../../features/cart/selectors'

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
  const cart = useSelector(selectCart)

  return (
    <StyledCardDetails>
      <CardDetailsBody />
    </StyledCardDetails>
  )
}
