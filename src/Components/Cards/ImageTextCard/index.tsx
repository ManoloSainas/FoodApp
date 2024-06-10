import { useCallback, useEffect, useState } from 'react'
import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledImageText } from './styled'

export type CardData = {
  imageUrl: string
  text: string
  hidden?: boolean
}

type Props = {
  cards: CardData[]
  onClick: (imageURL: string) => void
}

export const ImageTextCard = ({ cards, onClick }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string>('')

  useEffect(() => {
    const firstVisibleCard = cards.find((card) => card.hidden !== true)
    if (firstVisibleCard) setSelectedCard(firstVisibleCard.imageUrl)
  }, [cards])

  const handleClick = useCallback(
    (imageUrl: string) => {
      setSelectedCard(imageUrl)
      onClick(imageUrl)
    },
    [onClick]
  )

  return (
    <>
      {cards.map((card) => {
        const isSelected = card.imageUrl === selectedCard

        if (card.hidden !== true)
          return (
            <StyledImageText
              key={card.imageUrl}
              $isSelected={isSelected}
              onClick={() => handleClick(card.imageUrl)}
            >
              <Image className="card-image" imageUrl={card.imageUrl} />
              <Text className="card-text">{card.text}</Text>
            </StyledImageText>
          )
      })}
    </>
  )
}
