import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledImageText } from './styled'

type Props = {
  imageURL: string
  text: string
  width?: string
  height?: string
}

export const ImageText = ({
  imageURL,
  text,
  width = '150px',
  height = '100px'
}: Props) => {
  return (
    <StyledImageText $width={width} $height={height}>
      <Image imageURL={imageURL} />
      <Text>{text}</Text>
    </StyledImageText>
  )
}
