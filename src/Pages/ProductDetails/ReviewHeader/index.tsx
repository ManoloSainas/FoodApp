import React from 'react'
import { IconButton } from '../../../Composite Components/IconButton'
import { Text } from '../../../Shared Components/Text'
import { StyledReviewHeader } from './styled'

export const ReviewHeaderComponent = () => {
  return (
    <StyledReviewHeader>
      <Text color="#EFEFEF" variant="h1">
        Reviews
      </Text>
      <IconButton
        iconName="AngleBracket"
        onClick={() => console.log('ciao')}
        variant="leaveReview"
      >
        Leave a review
      </IconButton>
    </StyledReviewHeader>
  )
}

export const ReviewHeader = React.memo(ReviewHeaderComponent)
