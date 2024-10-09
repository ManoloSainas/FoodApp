import { Text } from '../../../../../../../../../Shared Components/Text'
import { StyledReview, StyledReviewList } from './styled'
import { useMemo } from 'react'

export type Review = {
  date: string
  text: string
  productId: string
  author: string
}

type Props = {
  reviewList: Review[]
}

export const ReviewCard = ({ reviewList }: Props) => {
  const reviewListElements = useMemo(
    () =>
      reviewList.map(({ date, text, productId, author }) => (
        <StyledReview key={productId}>
          <Text className="review-title" variant="h2">
            {author}
          </Text>
          <Text className="review-date" variant="h3">
            {date}
          </Text>
          <Text className="review-text">{text}</Text>
        </StyledReview>
      )),
    [reviewList]
  )

  return <StyledReviewList>{reviewListElements}</StyledReviewList>
}
