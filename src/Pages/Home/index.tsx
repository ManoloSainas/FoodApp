import { useState } from 'react'
import { Stack } from '../../Components/Stack'
import { HomePopDishBody } from './HomePopDishBody'
import { HomePopDishHeader } from './HomePopDishHeader'
import { HomeTopCards } from './HomeTopCards'
import { StyledHome } from './styled'

export const Home = () => {
  const [selectedId, setSelectedId] = useState<string>('All')
  const [selectedDelivery, setSelectedDelivery] = useState<string | string[]>('')
  const [selectedPrice, setSelectedPrice] = useState<string | string[]>('')

  return (
    <StyledHome>
      <HomeTopCards updateId={setSelectedId} />
      <Stack flexDirection="column">
        <HomePopDishHeader
          updateDelivery={setSelectedDelivery}
          updatePrice={setSelectedPrice}
        />
        <HomePopDishBody
          currentId={selectedId}
          currentDelivery={selectedDelivery}
          currentPrice={selectedPrice}
        />
      </Stack>
    </StyledHome>
  )
}
