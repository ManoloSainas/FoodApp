import { IconButton } from '../../../../Composite Components/IconButton'
import { Stack } from '../../../../Shared Components/Stack'
import { Text } from '../../../../Shared Components/Text'
import { DeliverySelect } from './DeliverySelect'
// import { IngredientsSelect } from './IngredientsSelect'
import { PriceSelect } from './PriceSelect'

export type Props = {
  updateDelivery: (value: string | string[]) => void
  updateSortPrice: (value: string | string[]) => void
}

export const CatalogPopDishHeader = ({ updateDelivery, updateSortPrice }: Props) => {
  return (
    <Stack
      id="stack-popdish-title"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Text className="popdish-title" variant="h1">
        Popular dishes
      </Text>

      <Stack alignItems="center" gap="20px" margin="0px 40px 0px 0px">
        <Stack gap="1px">
          <DeliverySelect updateDelivery={updateDelivery} />

          {/* <IngredientsSelect /> */}

          <PriceSelect updateSortPrice={updateSortPrice} />
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
