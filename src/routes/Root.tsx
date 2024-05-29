import { Outlet } from 'react-router-dom'
import { LeftSide } from '../AppPieces/LeftSide'
import { TopSide } from '../AppPieces/TopSide'
import { Stack } from '../Components/Stack'

export const Root = () => {
  return (
    <Stack flexDirection="column">
      <TopSide />
      <Stack>
        <LeftSide />
        <Outlet />
      </Stack>
    </Stack>
  )
}
