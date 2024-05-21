//import { StyledImageRadio } from "./styled";
import { Image } from '../Image'
import { StyledImageRadio } from './styled'

type Props = {
  images: string[]
}

export const ImageRadio = ({ images }: Props) => {
  return (
    <StyledImageRadio>
      {images.map((currImage) => (
        <Image imageURL={currImage} />
      ))}
    </StyledImageRadio>
  )
}
