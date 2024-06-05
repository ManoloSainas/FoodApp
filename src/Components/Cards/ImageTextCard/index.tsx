import { useCallback, useState } from 'react'
import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledImageText } from './styled'

type CardData = {
  imageURL: string
  text: string
}

type Props = {
  cards: CardData[]
  onClick: (imageURL: string) => void
}

export const ImageTextCard = ({ cards, onClick }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string>(cards[0].imageURL)

  return (
    <>
      {cards.map((card) => {
        const isSelected = card.imageURL === selectedCard
        const handleClick = useCallback(() => {
          setSelectedCard(card.imageURL)
          onClick(card.imageURL)
        }, [onClick, card.imageURL])

        return (
          <StyledImageText
            key={card.imageURL}
            $isSelected={isSelected}
            onClick={handleClick}
          >
            <Image className="card-image" imageURL={card.imageURL} />
            <Text className="card-text">{card.text}</Text>
          </StyledImageText>
        )
      })}
    </>
  )
}
