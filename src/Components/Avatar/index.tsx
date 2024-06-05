import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

type Props = {
  imageURL: string
  text: string
}

export const Avatar = ({ imageURL, text }: Props) => {
  return (
    <StyledAvatar>
      <Image className="avatar-image" imageURL={imageURL} />
      <Text className="avatar-text" variant="h4">
        {text}
      </Text>
    </StyledAvatar>
  )
}
