//import { StyledImageRadio } from "./styled";
import { useState } from 'react'
import { Image } from '../Image'
import { StyledImageRadio } from './styled'

type Props = {
  images: string[]
  width?: string
  height?: string
  onChange: (selectedCard: string) => void
}

export const ImageRadio = ({ images, width, height, onChange }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  const handleRadioChange = (card: string) => {
    setSelectedCard(card)
    onChange(card)
  }

  return (
    <StyledImageRadio $width={width} $height={height}>
      {images.map((currCard, index) => (
        <div key={currCard}>
          <input
            type="radio"
            id={`radio-${index}`}
            value={currCard}
            checked={currCard === selectedCard}
            onChange={() => handleRadioChange(currCard)}
          />
          <label htmlFor={`radio-${index}`}>
            <Image className="image" imageURL={currCard} />
          </label>
        </div>
      ))}
    </StyledImageRadio>
  )
}
