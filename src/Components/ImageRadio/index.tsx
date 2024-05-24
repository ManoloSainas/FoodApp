//import { StyledImageRadio } from "./styled";
import { useCallback, useState } from 'react'
import { Image } from '../Image'
import { StyledImageRadio } from './styled'
import { Input } from '../Form/Input'
import { Stack } from '../Stack'

type Props = {
  images: string[]
  width?: string
  height?: string
  onChange: (selectedCard: string) => void
}

export const ImageRadio = ({ images, width, height, onChange }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleRadioChange = useCallback(
    (card: string) => {
      setSelectedCard(card)
      onChange(card)
    },
    [onChange]
  )

  return (
    <Stack gap="10px">
      {images.map((currCard) => (
        <StyledImageRadio
          key={currCard}
          $width={width}
          $height={height}
          $isSelected={currCard === selectedCard}
        >
          <Input
            type="radio"
            id={`radio-${currCard}`}
            value={currCard}
            checked={currCard === selectedCard}
            onChange={() => handleRadioChange(currCard)}
          />
          <label htmlFor={`radio-${currCard}`}>
            <Image className="image" imageURL={currCard} />
          </label>
        </StyledImageRadio>
      ))}
    </Stack>
  )
}
