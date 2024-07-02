import { IconButton } from '../../../Components/IconButton'
import { Stack } from '../../../Components/Stack'
import { Text } from '../../../Components/Text'
import { DeliverySelect } from './DeliverySelect'
import { IngredientsSelect } from './IngredientsSelect'

export type Props = {
  updateDelivery: (value: string | string[]) => void
}

export const HomePopDishHeader = ({ updateDelivery }: Props) => {
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

          <IngredientsSelect />
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
