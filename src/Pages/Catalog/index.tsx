import { useState } from 'react'
import { CatalogPopDishBody } from './CatalogPopDishBody'
import { CatalogPopDishHeader } from './CatalogPopDishHeader'
import { StyledCatalog } from './styled'
import { CatalogTopCards } from './CatalogTopCards'
import { Stack } from '../../shared components/Stack'

export const Catalog = () => {
  const [selectedId, setSelectedId] = useState<string>('All')
  const [selectedDelivery, setSelectedDelivery] = useState<string | string[]>('')
  const [selectSortPrice, setSelectedSortPrice] = useState<string>('')

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
