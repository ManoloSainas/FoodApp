import { IconButton } from '../../../shared components/IconButton'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
import { DeliverySelect } from '../DeliverySelect'
import { PriceSelect } from '../PriceSelect'

export type Props = {
  updateDelivery: (value: string | string[]) => void
  updateSortPrice: (value: string) => void
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

          <PriceSelect updateSortPrice={updateSortPrice} />
        </Stack>

        <Stack gap="5px">
          <IconButton
            size="lg"
            variant="greyIcon"
            onClick={() => console.log('premuto')}
            iconName="Bars"
            paddingVar="icon"
          />
          <IconButton
            size="lg"
            variant="redIcon"
            onClick={() => console.log('premuto')}
            iconName="Category"
            paddingVar="icon"
          />
        </Stack>
      </Stack>
    </Stack>
  )
}
