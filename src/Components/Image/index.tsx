import { StyledImage } from './styled'

type Props = {
  imageUrl: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

export const Image = ({ imageUrl, alt = '', width, height, className }: Props) => {
  return (
    <StyledImage
      className={className}
      src={imageUrl}
      alt={alt}
      $width={width}
      $height={height}
    />
  )
}
