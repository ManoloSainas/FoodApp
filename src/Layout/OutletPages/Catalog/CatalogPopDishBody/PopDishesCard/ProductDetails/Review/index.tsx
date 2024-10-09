import { Stack } from '../../../../../../../Shared Components/Stack'
import { ReviewBody } from './ReviewBody'
import { ReviewHeader } from './ReviewHeader'

export const Review = () => {
  return (
    <Stack flexDirection="column">
      <ReviewHeader />
      <ReviewBody productId="e39943a5-6ca9-48bf-80d9-292c110d7948" />
    </Stack>
  )
}
