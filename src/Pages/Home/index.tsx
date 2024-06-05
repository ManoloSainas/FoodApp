import { Stack } from '../../Components/Stack'
import { HomePopDishBody } from './HomePopDishBody'
import { HomePopDishHeader } from './HomePopDishHeader'
import { HomeTopCards } from './HomeTopCards'
import { StyledHome } from './styled'

export const Home = () => {
  return (
    <StyledHome>
      <HomeTopCards />
      <Stack flexDirection="column">
        <HomePopDishHeader />
        <HomePopDishBody />
      </Stack>
    </StyledHome>
  )
}
