import { Text } from '../Text'
import { StyledRating } from './styled'

type Props = {
  value: string
}

export const Rating = ({ value }: Props) => {
  const roundedValue = Math.round(Number(value))

  return (
    <StyledRating>
      <Text color="#929293">Rating </Text>
      <Text>{roundedValue >= 1 ? '⭐️'.repeat(roundedValue) : '⭐️'}</Text>
    </StyledRating>
  )
}
