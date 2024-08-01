import { useState } from 'react'
import { Stack } from '../../Components/Stack'
import { CatalogPopDishBody } from './CatalogPopDishBody'
import { CatalogPopDishHeader } from './CatalogPopDishHeader'
import { StyledCatalog } from './styled'
import { CatalogTopCards } from './CatalogTopCards'

export const Catalog = () => {
  const [selectedId, setSelectedId] = useState<string>('All')
  const [selectedDelivery, setSelectedDelivery] = useState<string | string[]>('')
  const [selectSortPrice, setSelectedSortPrice] = useState<string | string[]>('')

  return (
    <StyledCatalog>
      <CatalogTopCards updateId={setSelectedId} />
      <Stack flexDirection="column">
        <CatalogPopDishHeader
          updateDelivery={setSelectedDelivery}
          updateSortPrice={setSelectedSortPrice}
        />
        <CatalogPopDishBody
          currentId={selectedId}
          currentDelivery={selectedDelivery}
          currentSortPrice={selectSortPrice}
        />
      </Stack>
    </StyledCatalog>
  )
}
