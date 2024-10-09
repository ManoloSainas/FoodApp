import { Stack } from '../../../../../../../../../Shared Components/Stack'
import { Text } from '../../../../../../../../../Shared Components/Text'
import { Button } from '../../../../../../../../../Shared Components/Button'
import { StyledReview, StyledReviewList } from './styled'
import { useMemo, useState } from 'react'

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
  const [pageId, setPageId] = useState<number>(0)
  const reviewsPerPage = 4

  const totalPages = Math.ceil(reviewList.length / reviewsPerPage)

  const handleNextPage = () => {
    setPageId((prevPageId) => Math.min(prevPageId + 1, totalPages - 1))
  }

  const handlePreviousPage = () => {
    setPageId((prevPageId) => Math.max(prevPageId - 1, 0))
  }

  const reviewListElements = useMemo(
    () =>
      reviewList
        .slice(pageId * reviewsPerPage, (pageId + 1) * reviewsPerPage)
        .map(({ date, text, productId, author }) => (
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
    [reviewList, pageId]
  )

  return (
    <Stack flexDirection="column">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        margin="0px 0px 10px 0px"
        gap="5px"
      >
        <Button variant="pagination" onClick={handlePreviousPage} disabled={pageId === 0}>
          Previous page
        </Button>
        <Button
          variant="pagination"
          onClick={handleNextPage}
          disabled={pageId === totalPages - 1}
        >
          Next page
        </Button>
      </Stack>
      <StyledReviewList>{reviewListElements}</StyledReviewList>
    </Stack>
  )
}
