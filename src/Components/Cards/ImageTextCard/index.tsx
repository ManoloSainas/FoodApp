import { useCallback, useState } from 'react'
import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledImageText } from './styled'

type CardData = {
  imageURL: string
  text: string
  width?: string
  height?: string
  onClick: () => void
  classImage?: string
  classText?: string
}

type Props = {
  cards: CardData[]
}

export const ImageTextCard = ({ cards }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string>(cards[0].imageURL)

  return (
    <>
      {cards.map((card) => {
        const isSelected = card.imageURL === selectedCard
        const handleClick = useCallback(() => {
          setSelectedCard(card.imageURL)
          card.onClick()
        }, [card.onClick, card.imageURL])

        return (
          <StyledImageText
            key={card.imageURL}
            $width={card.width || '100px'}
            $height={card.height || '100px'}
            $isSelected={isSelected}
            onClick={handleClick}
          >
            <Image className={card.classImage} imageURL={card.imageURL} />
            <Text className={card.classText}>{card.text}</Text>
          </StyledImageText>
        )
      })}
    </>
  )
}
