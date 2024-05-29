import { LeftSide } from '../AppPieces/LeftSide'
import { TopSide } from '../AppPieces/TopSide'
import { Stack } from '../Components/Stack'

export const Root = () => {
  return (
    <Stack flexDirection="column">
      <TopSide />
      <LeftSide />
    </Stack>
  )
}
