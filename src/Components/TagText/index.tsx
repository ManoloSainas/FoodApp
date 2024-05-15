import { Text } from '../Text'
import { StyledTagText } from './styled'

type Props = {
  text: string
}

export const TagText = ({ text }: Props) => {
  return (
    <StyledTagText>
      <Text>{text}</Text>
    </StyledTagText>
  )
}

// creare styled per il div
