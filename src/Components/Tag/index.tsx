import { Text } from '../Text'
import { StyledTag } from './styled'

type Props = {
  text: string
}

export const Tag = ({ text }: Props) => {
  return (
    <StyledTag>
      <Text className="tag-text">{text}</Text>
    </StyledTag>
  )
}
