import { Text } from '../../../../../../../Shared Components/Text'
import { StyledReview } from './styled'
import { useMemo } from 'react'

type Review = {
  id: string
  title: string
  date: string
  rev: string
}

type Props = {
  reviewList: Review[]
}

export const ReviewCard = ({ reviewList }: Props) => {
  const reviewListElements = useMemo(
    () =>
      reviewList.map(({ id, title, date, rev }) => (
        <StyledReview key={id}>
          <Text className="review-title" variant="h2">
            {title}
          </Text>
          <Text className="review-date" variant="h3">
            {date}
          </Text>
          <Text className="review-text">{rev}</Text>
        </StyledReview>
      )),
    [reviewList]
  )

  return <ul>{reviewListElements}</ul>
}
