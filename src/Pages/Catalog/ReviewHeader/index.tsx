import React, { useState } from 'react'
import { StyledReviewHeader } from './styled'
import { WriteReviewCard } from '../WriteReviewCard'
import { Text } from '../../../shared components/Text'
import { IconButton } from '../../../shared components/IconButton'
import { Overlay } from '../../../shared components/Overlay/styled'

type Props = {
  productId: string
}

export const ReviewHeaderComponent = ({ productId }: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleIconButtonClick = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <StyledReviewHeader>
      <Text color="#EFEFEF" variant="h1">
        Reviews
      </Text>
      <IconButton
        id="iconReview"
        iconName="AngleBracket"
        onClick={handleIconButtonClick}
        variant="leaveReview"
        paddingVar="review"
      >
        Leave a review
      </IconButton>
      {isPopupOpen && <Overlay />}
      {isPopupOpen && (
        <WriteReviewCard productId={productId} onClose={handleClosePopup} />
      )}
    </StyledReviewHeader>
  )
}

export const ReviewHeader = React.memo(ReviewHeaderComponent)
