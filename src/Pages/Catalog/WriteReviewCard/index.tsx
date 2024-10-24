import { useCallback, useState } from 'react'
import { StyledWriteReviewCard } from './styled'
import { Button } from '../../../shared components/Button'
import TextArea from '../../../shared components/TextArea'
import { IconButton } from '../../../shared components/IconButton'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
import { apiClient } from '../../../features/api/api-client'
import { notifyReview } from '../../../features/Toaster'

type Props = {
  productId?: string
  onClose: () => void
}

export const WriteReviewCard = ({ productId, onClose }: Props) => {
  const [textReview, setTextReview] = useState<string>('')

  const handleTextAreaChange = useCallback(
    (value: string) => {
      setTextReview(value)
    },
    [setTextReview]
  )

  const handleButtonClick = useCallback(() => {
    const sendReview = async () => {
      try {
        await apiClient.post('reviews', {
          text: textReview,
          author: 'Manolo Sainas',
          productId: productId
        })

        onClose()
        notifyReview(true)
      } catch (err) {
        console.error(`Error sending review: ${err}`)
        notifyReview(false)
      }
    }
    textReview.length > 0 ? sendReview() : notifyReview(false)
  }, [textReview, productId, onClose])

  return (
    <StyledWriteReviewCard>
      <Stack justifyContent="space-between" width="100%" alignItems="center">
        <Text variant="h2" color="white">
          Write a review
        </Text>
        <IconButton
          color="#6C6D73"
          variant="greyIcon"
          iconName="Xmark"
          onClick={onClose}
          paddingVar="icon"
        />
      </Stack>

      <Stack justifyContent="center" width="100%">
        <TextArea
          placeholder="Tell us what you liked or disliked about this product..."
          onChange={handleTextAreaChange}
        />
      </Stack>

      <Stack width="100%" justifyContent="flex-end">
        <Button ariaLabel="send review" onClick={handleButtonClick}>
          Send
        </Button>
      </Stack>
    </StyledWriteReviewCard>
  )
}
