import { Link } from 'react-router-dom'
import { Image } from '../Image'
import { Text } from '../Text'
import { StyledAvatar } from './styled'

type Props = {
  imageURL: string
  text: string
}

export const Avatar = ({ imageURL, text }: Props) => {
  return (
    <Link to="/">
      <StyledAvatar>
        <Image height={100} width={100} className="image" imageURL={imageURL}></Image>
        <Text className="text" variant="h4">
          {text}
        </Text>
      </StyledAvatar>
    </Link>
  )
}
