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
      <Image imageURL={imageURL}></Image>
      <Text variant="h4">{text}</Text>
    </StyledAvatar>
  )
}

// creare styled per il div
// non funziona
