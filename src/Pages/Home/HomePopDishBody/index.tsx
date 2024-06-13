import { useEffect, useMemo, useState } from 'react'
import { PopDishes } from '../../../Components/Cards/PopDishesCard'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'

export const HomePopDishBody = ({ currentId, currentDelivery }: any) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true)
        const cards = await apiClient.get('products')
        const newData = cards.map((item: any) => ({
          imageURL: item.imageUrl,
          text: item.name,
          textp: item.description,
          tagText: item.size.value + item.size.type,
          currency: item.price.type,
          value: item.price.value,
          iconNameOptional: 'flame',
          iconNameButton: 'Plus',
          available: item.available,
          tags: item.tags,
          delivery: item.delivery
        }))
        setData(newData)
      } catch (err) {
        console.error(`Error: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  console.log('the delivery:', currentDelivery)

  const filteredData = useMemo(
    () =>
      data.filter(
        (value: any) =>
          value.tags.includes(currentId) || value.delivery.includes(currentDelivery)
      ),
    [currentId, data, currentDelivery]
  )

  return (
    <Stack flexDirection="row">
      <PopDishes
        options={filteredData.length > 0 ? filteredData : data}
        onClick={() => console.log('Clicked!')}
      ></PopDishes>
    </Stack>
  )
}
