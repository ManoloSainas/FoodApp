import { Text } from '../../Text'
import { StyledReview } from './styled'
import { useMemo } from 'react'

type Props = {
  reviewList: { id: string; title: string; date: string; rev: string }[]
}

export const ReviewCard = ({ reviewList }: Props) => {
  const reviewListElements = useMemo(
    () =>
      reviewList.map(({ id, title, date, rev }) => (
        <StyledReview key={id}>
          <Text className="title" variant="h2">
            {title}
          </Text>
          <Text className="date" variant="h3">
            {date}
          </Text>
          <Text className="rev">{rev}</Text>
        </StyledReview>
      )),
    [reviewList]
  )

  return <ul>{reviewListElements}</ul>
}
