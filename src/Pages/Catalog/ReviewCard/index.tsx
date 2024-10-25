import { Button } from '../../../shared components/Button'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
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

  // Arrotonda un numero decimale per eccesso
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
    <Stack flexDirection="column" margin="25px 0 0 0">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        margin="0px 0px 10px 0px"
        gap="5px"
        alignItems="center"
      >
        <Button
          ariaLabel="previous page"
          variant="pagination"
          onClick={handlePreviousPage}
          disabled={pageId === 0}
        >
          ⬅
        </Button>
        {/* <Stack
          gap="5px"
          backgroundColor="black"
          borderRadius={15}
          padding="0 7px 0 7px"
          border="1px solid #18C458"
        >
          <Text color="#efefef" variant="h2">
            Page:
          </Text>
          <Text color="#18C458" variant="h2">
            {pageId + 1 + '/' + totalPages}
          </Text>
        </Stack> */}

        <Button
          ariaLabel="next page"
          variant="pagination"
          onClick={handleNextPage}
          disabled={pageId === totalPages - 1}
        >
          ⮕
        </Button>
      </Stack>
      <StyledReviewList>{reviewListElements}</StyledReviewList>
    </Stack>
  )
}
