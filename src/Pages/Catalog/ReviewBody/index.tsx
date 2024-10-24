import { useEffect, useState } from 'react'
import { Review, ReviewCard } from '../ReviewCard'
import { apiClient } from '../../../features/api/api-client'
import { Text } from '../../../shared components/Text'
import { Stack } from '../../../shared components/Stack'

type fetchedReview = {
  date: string
  text: string
  productId: string
  author: string
}

type Props = {
  productId: string
}

export const ReviewBody = ({ productId }: Props) => {
  const [data, setData] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true)
        const reviews: fetchedReview[] = await apiClient.get(`reviews/${productId}`)
        const newData = reviews.map((review: fetchedReview) => ({
          date: review.date,
          text: review.text,
          productId: review.productId,
          author: review.author
        }))
        setData(newData)
      } catch (err) {
        console.error(`Error fetching reviews: ${err}`)
      } finally {
        setLoading(false)
      }
    }
    fetchReview()
  }, [productId])

  if (loading) {
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )
  }

  return (
    <Stack gap="20px">
      {data.length > 0 ? (
        <ReviewCard reviewList={data} />
      ) : (
        <Text color="#F73E55" variant="h3">
          There are no Reviews for this product.
        </Text>
      )}
    </Stack>
  )
}
