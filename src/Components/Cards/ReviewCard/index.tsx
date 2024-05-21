import { Text } from '../../Text'
import { StyledReview } from './styled'

type Props = {
  reviewList: { title: string; date: string; rev: string }[]
}

export const ReviewCard = ({ reviewList }: Props) => {
  return (
    <ul>
      {reviewList.map(({ title, date, rev }) => (
        <StyledReview key={title}>
          <Text variant="h2" color="#C8C8C9">
            {title}
          </Text>
          <Text variant="h3" color="#B83345">
            {date}
          </Text>
          <Text fontStyle="italic" color="#757579">
            {rev}
          </Text>
        </StyledReview>
      ))}
    </ul>
  )
}
