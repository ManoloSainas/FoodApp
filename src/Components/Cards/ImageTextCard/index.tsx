import { useCallback, useEffect, useMemo, useState } from 'react'
import { Image } from '../../../Shared Components/Image'
import { Text } from '../../../Shared Components/Text'
import { StyledImageText } from './styled'

export type CardData = {
  imageUrl: string
  text: string
  hidden?: boolean
  id: string
}

type Props = {
  cards: CardData[]
  onClick: (id: string) => void
}

// Card con immagine e testo
export const ImageTextCard = ({ cards, onClick }: Props) => {
  const [selectedCard, setSelectedCard] = useState<string>('')

  useEffect(() => {
    const firstVisibleCard = cards.find((card) => !card.hidden)
    if (firstVisibleCard) setSelectedCard(firstVisibleCard.imageUrl)
  }, [cards])

  const handleClick = useCallback(
    (imageUrl: string, id: string) => {
      setSelectedCard(imageUrl)
      onClick(id)
    },
    [onClick]
  )

  const renderedCards = useMemo(
    () =>
      cards
        .filter((card) => !card.hidden)
        .map((card) => {
          const isSelected = card.imageUrl === selectedCard
          return (
            <StyledImageText
              key={card.imageUrl}
              $isSelected={isSelected}
              onClick={() => handleClick(card.imageUrl, card.id)}
            >
              <Image className="card-image" imageUrl={card.imageUrl} />
              <Text className="card-text">{card.text}</Text>
            </StyledImageText>
          )
        }),
    [cards, handleClick, selectedCard]
  )

  return <>{renderedCards}</>
}
