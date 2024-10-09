import React, { useState } from 'react'
import { IconButton } from '../../../../../../../Composite Components/IconButton'
import { Text } from '../../../../../../../Shared Components/Text'
import { StyledReviewHeader } from './styled'
import { WriteReviewCard } from './WriteReviewCard'
export const ReviewHeaderComponent = () => {
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
      {isPopupOpen && <WriteReviewCard onClose={handleClosePopup} />}
    </StyledReviewHeader>
  )
}

export const ReviewHeader = React.memo(ReviewHeaderComponent)
