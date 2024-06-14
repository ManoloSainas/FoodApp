import { useEffect, useState } from 'react'
import { Select } from '../../../Components/Form/Select'
import { IconButton } from '../../../Components/IconButton'
import { Stack } from '../../../Components/Stack'
import { Text } from '../../../Components/Text'
import { apiClient } from '../../../../api-client'

export type fetchedDelivery = {
  id: string
  name: string
}

export type Props = {
  updateDelivery: React.Dispatch<React.SetStateAction<string | string[]>>
}

export const HomePopDishHeader = ({ updateDelivery }: Props) => {
  const [delivery, setDelivery] = useState<
    { id: string; value: string; label: string }[]
  >([{ id: '', value: '', label: 'Delivery' }])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        setLoading(true)
        const deliveryValues = await apiClient.get('deliveries')
        const newData = deliveryValues.map((item: fetchedDelivery) => ({
          id: item.id,
          value: item.name,
          label: item.name
        }))
        setDelivery([...delivery, ...newData])
      } catch (err) {
        console.error(`Error: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchDelivery()
  }, [])

  return (
    <Stack id="stack-popdish-title" alignItems="center" gap="300px">
      <Text className="popdish-title" variant="h1">
        Popular dishes
      </Text>

      <Stack alignItems="center" gap="20px">
        <Stack gap="1px">
          <Select onChange={(value) => updateDelivery(value)} deliveries={delivery} />
          <Select
            onChange={(value) => console.log(value)}
            deliveries={[
              { id: 'Ingredients', value: 'Ingredients', label: 'Ingredients' }
            ]}
          />
          <Select
            onChange={(value) => console.log(value)}
            deliveries={[{ id: 'Price', value: 'Price', label: 'Price' }]}
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
