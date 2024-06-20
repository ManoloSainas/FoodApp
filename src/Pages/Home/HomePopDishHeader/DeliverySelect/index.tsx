import { useEffect, useState } from 'react'
import { apiClient } from '../../../../../api-client'
import { Select } from '../../../../Components/Form/Select'

export type Props = {
  updateDelivery: React.Dispatch<React.SetStateAction<string | string[]>>
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

  return <Select onChange={(value) => updateDelivery(value)} elements={delivery} />
}
