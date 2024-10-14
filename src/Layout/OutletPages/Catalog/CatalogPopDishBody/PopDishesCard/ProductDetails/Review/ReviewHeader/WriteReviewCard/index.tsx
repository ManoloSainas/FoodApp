import { useCallback, useState } from 'react'
import { Button } from '../../../../../../../../../Shared Components/Button'
import TextArea from '../../../../../../../../../Shared Components/TextArea'
import { IconButton } from '../../../../../../../../../Composite Components/IconButton'
import { Stack } from '../../../../../../../../../Shared Components/Stack'
import { Text } from '../../../../../../../../../Shared Components/Text'
import { StyledWriteReviewCard } from './styled'
import { apiClient } from '../../../../../../../../../features/api/api-client'

type Props = {
  productId?: string
  onClose: () => void
}

// type Review = {
//   text: string
//   author: string
//   productId: string
// }

export const WriteReviewCard = ({ productId, onClose }: Props) => {
  const [textReview, setTextReview] = useState<string>('')

  const handleTextAreaChange = useCallback(
    (value: string) => {
      setTextReview(value)
    },
    [textReview, setTextReview]
  )

  console.log({ textReview }, { productId })

  const handleButtonClick = useCallback(() => {
    const sendReview = async () => {
      try {
        await apiClient.post('/reviews', {
          text: textReview,
          author: 'Manolo Sainas',
          productId: productId
        })
      } catch (err) {
        console.error(`Error sending review: ${err}`)
      } finally {
        console.log('Review sent!')
      }
    }

    sendReview()
  }, [])

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
        <Button onClick={handleButtonClick}>Send</Button>
      </Stack>
    </StyledWriteReviewCard>
  )
}
