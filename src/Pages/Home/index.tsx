import { useState } from 'react'
import { Stack } from '../../Components/Stack'
import { HomePopDishBody } from './HomePopDishBody'
import { HomePopDishHeader } from './HomePopDishHeader'
import { HomeTopCards } from './HomeTopCards'
import { StyledHome } from './styled'

export const Home = () => {
  const [selectedId, setSelectedId] = useState<string>('All')
  const [selectedDelivery, setSelectedDelivery] = useState<string | string[]>('')
  const [selectSortPrice, setSelectedSortPrice] = useState<string | string[]>('')

  console.log('value->', selectSortPrice)

  return (
    <StyledHome>
      <HomeTopCards updateId={setSelectedId} />
      <Stack flexDirection="column">
        <HomePopDishHeader
          updateDelivery={setSelectedDelivery}
          updateSortPrice={setSelectedSortPrice}
        />
        <HomePopDishBody
          currentId={selectedId}
          currentDelivery={selectedDelivery}
          currentSortPrice={selectSortPrice}
        />
      </Stack>
    </StyledHome>
  )
}
