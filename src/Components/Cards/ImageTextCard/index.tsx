import { useCallback, useState } from 'react'
import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledImageText } from './styled'

type Props = {
  imageURL: string
  text: string
  width?: string
  height?: string
  onClick: () => void
  classImage?: string
  classText?: string
}

export const ImageTextCard = ({
  imageURL,
  text,
  width = '100px',
  height = '100px',
  onClick,
  classImage,
  classText
}: Props) => {
  const [isSelected, setIsSelected] = useState(false)
  const handleClick = useCallback(() => {
    setIsSelected((prevSelected) => !prevSelected)
    onClick()
  }, [onClick])

  return (
    <StyledImageText
      $width={width}
      $height={height}
      $isSelected={isSelected}
      onClick={handleClick}
    >
      <Image className={classImage} imageURL={imageURL} />
      <Text className={classText}>{text}</Text>
    </StyledImageText>
  )
}
