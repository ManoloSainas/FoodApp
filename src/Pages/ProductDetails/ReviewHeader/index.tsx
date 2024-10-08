import React from 'react'
import { IconButton } from '../../../Components/IconButton'
import { Text } from '../../../Components/Text'
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
        Leave a review &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </IconButton>
    </StyledReviewHeader>
  )
}

export const ReviewHeader = React.memo(ReviewHeaderComponent)
