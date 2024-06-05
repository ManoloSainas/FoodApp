import { Select } from '../../../Components/Form/Select'
import { IconButton } from '../../../Components/IconButton'
import { Stack } from '../../../Components/Stack'
import { Text } from '../../../Components/Text'

export const HomePopDishHeader = () => {
  return (
    <Stack id="stack-popdish-title" alignItems="center" gap="330px">
      <Text className="popdish-title" variant="h1">
        Popular dishes
      </Text>

      <Stack alignItems="center" gap="25px">
        <Stack gap="5px">
          <Select
            onChange={(value) => console.log(value)}
            options={[{ value: 'Delivery', label: 'Delivery' }]}
          />
          <Select
            onChange={(value) => console.log(value)}
            options={[{ value: 'Ingredients', label: 'Ingredients' }]}
          />
          <Select
            onChange={(value) => console.log(value)}
            options={[{ value: 'Price', label: 'Price' }]}
          />
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
