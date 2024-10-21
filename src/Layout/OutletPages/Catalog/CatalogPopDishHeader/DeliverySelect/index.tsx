import { useEffect, useState } from 'react'
import { apiClient } from '../../../../../features/api/api-client'
import { Select } from '../../../../../Shared Components/Select'
import { Text } from '../../../../../Shared Components/Text'

export type Props = {
  updateDelivery: (value: string | string[]) => void
}

export type FetchedDelivery = {
  id: string
  name: string
}

export const DeliverySelect = ({ updateDelivery }: Props) => {
  const [delivery, setDelivery] = useState<
    { id: string; value: string; label: string }[]
  >([{ id: '', value: '', label: 'Delivery' }])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        setLoading(true)
        const deliveryValues: FetchedDelivery[] = await apiClient.get('deliveries')
        const newData = deliveryValues.map((item: FetchedDelivery) => ({
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

  if (loading)
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )

  return (
    <Select
      arialLabel="delivery select"
      onChange={(value) => updateDelivery(value)}
      elements={delivery}
    />
  )
}
