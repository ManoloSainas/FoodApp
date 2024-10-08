import { useCallback, useMemo, useState } from 'react'
import { Image } from '../../Shared Components/Image'
import { StyledImageRadio } from './styled'
import { Input } from '../Form/Input'
import { Stack } from '../../Shared Components/Stack'

type Props = {
  images: string[]
  width?: string
  height?: string
  onChange: (selectedCard: string) => void
  id?: string
}

export const ImageRadio = ({
  images,
  width = '100px',
  height = '100px',
  onChange,
  id
}: Props) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(images[0])

  const handleRadioChange = useCallback(
    (card: string) => {
      setSelectedCard(card)
      onChange(card)
    },
    [onChange]
  )

  const memoizedImages = useMemo(() => images, [images])

  return (
    <Stack gap="10px">
      {memoizedImages.map((currCard) => (
        <StyledImageRadio
          key={currCard}
          $width={width}
          $height={height}
          $isSelected={currCard === selectedCard}
          id={id}
        >
          <Input
            type="radio"
            id={`radio-${currCard}`}
            value={currCard}
            checked={currCard === selectedCard}
            onChange={() => handleRadioChange(currCard)}
          />
          <label htmlFor={`radio-${currCard}`}>
            <Image className="radio-image" imageUrl={currCard} />
          </label>
        </StyledImageRadio>
      ))}
    </Stack>
  )
}
