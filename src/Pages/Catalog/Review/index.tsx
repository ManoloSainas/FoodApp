import { Stack } from '../../../shared components/Stack'
import { ReviewBody } from '../ReviewBody'
import { ReviewHeader } from '../ReviewHeader'

type Props = {
  id: string
}

export const Review = ({ id }: Props) => {
  return (
    <Stack flexDirection="column">
      <ReviewHeader productId={id} />
      <ReviewBody productId={id} />
    </Stack>
  )
}
