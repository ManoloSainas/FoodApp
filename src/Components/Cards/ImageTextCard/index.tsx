import { useCallback, useState } from 'react'
import { Image } from '../../Image'
import { Text } from '../../Text'
import { StyledImageText } from './styled'

type CardData = {
  imageURL: string
  text: string
  width?: string
  height?: string
}

type Props = {
  cards: CardData[]
  onClick: (imageURL: string) => void
  classImage?: string
  classText?: string
}

export const ImageTextCard = ({ cards, onClick, classImage, classText }: Props) => {
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
            $width={card.width || '70px'}
            $height={card.height || '90px'}
            $isSelected={isSelected}
            onClick={handleClick}
          >
            <Image className={classImage} imageURL={card.imageURL} />
            <Text className={classText}>{card.text}</Text>
          </StyledImageText>
        )
      })}
    </>
  )
}
