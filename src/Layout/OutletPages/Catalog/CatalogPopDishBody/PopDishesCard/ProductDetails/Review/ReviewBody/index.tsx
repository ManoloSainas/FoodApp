import { useEffect, useState } from 'react'
import { Stack } from '../../../../../../../../Shared Components/Stack'
import { Text } from '../../../../../../../../Shared Components/Text'
import { Review, ReviewCard } from './ReviewCard'
import { apiClient } from '../../../../../../../../features/api/api-client'

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
  }, [])

  if (loading) {
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )
  }

  return (
    <Stack gap="20px">
      <ReviewCard reviewList={data} />
    </Stack>
  )
}
