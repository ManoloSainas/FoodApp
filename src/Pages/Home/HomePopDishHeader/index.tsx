import { IconButton } from '../../../Components/IconButton'
import { Stack } from '../../../Components/Stack'
import { Text } from '../../../Components/Text'
import { DeliverySelect } from './DeliverySelect'
import { IngredientsSelect } from './IngredientsSelect'
import { PriceSelect } from './PriceSelect'

import { Dispatch, SetStateAction } from 'react'

export type Props = {
  updateDelivery: Dispatch<SetStateAction<string | string[]>>
  updatePrice: Dispatch<SetStateAction<string | string[]>>
}

export const HomePopDishHeader = ({ updateDelivery, updatePrice }: Props) => {
  return (
    <Stack id="stack-popdish-title" alignItems="center" gap="300px">
      <Text className="popdish-title" variant="h1">
        Popular dishes
      </Text>

      <Stack alignItems="center" gap="20px">
        <Stack gap="1px">
          <DeliverySelect updateDelivery={updateDelivery} />

          <IngredientsSelect />

          <PriceSelect updatePrice={updatePrice} />
        </Stack>

        <Stack gap="5px">
          <IconButton
            size="lg"
            variant="greyIcon"
            onClick={() => console.log('premuto')}
            iconName="Bars"
          />
          <IconButton
            size="lg"
            variant="redIcon"
            onClick={() => console.log('premuto')}
            iconName="Category"
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
