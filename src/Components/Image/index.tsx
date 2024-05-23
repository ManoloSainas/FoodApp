// import { StyledImage } from "./styled";

import { StyledImage } from './styled'

type Props = {
  imageURL: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

export const Image = ({ imageURL, alt, width, height, className }: Props) => {
  return (
    <StyledImage
      className={className}
      src={imageURL}
      alt={alt}
      $width={width}
      $height={height}
    />
  )
}
