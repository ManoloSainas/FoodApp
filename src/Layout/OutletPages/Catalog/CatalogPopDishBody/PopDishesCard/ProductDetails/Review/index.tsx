import { Stack } from '../../../../../../../Shared Components/Stack'
import { ReviewBody } from './ReviewBody'
import { ReviewHeader } from './ReviewHeader'

export const Review = () => {
  return (
    <Stack flexDirection="column">
      <ReviewHeader />
      <ReviewBody productId="d1b57f6f-6bbb-43a9-b0c5-9a69c0b81c18" />
    </Stack>
  )
}
