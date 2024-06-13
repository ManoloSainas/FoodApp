import { useEffect, useMemo, useState } from 'react'
import { PopDishes, product } from '../../../Components/Cards/PopDishesCard'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'

type fetchedProduct = {
  id: string
  name: string
  description: string
  available: true
  new: true
  stock: 0
  rating: 0
  delivery: string
  discountRate: 0
  price: {
    type: string
    value: 0
  }
  size: {
    type: string
    value: 0
  }
  tags: [string]
  imageUrl: string
}

export type Props = {
  currentId: string
  currentDelivery: string | string[]
}

export const HomePopDishBody = ({ currentId, currentDelivery }: Props) => {
  const [data, setData] = useState<product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true)
        const cards = await apiClient.get('products')
        const newData = cards.map((item: fetchedProduct) => ({
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

  const filteredData = useMemo(
    () =>
      data.filter((element: product) => {
        const tagMatch = element.tags.includes(currentId)

        let deliveryMatch = false

        deliveryMatch =
          typeof currentDelivery === 'string'
            ? element.delivery.includes(currentDelivery)
            : (deliveryMatch = currentDelivery.some((delivery) =>
                element.delivery.includes(delivery)
              ))

        return tagMatch && deliveryMatch
      }),
    [currentId, data, currentDelivery]
  )

  return (
    <Stack flexDirection="row">
      <PopDishes
        products={filteredData.length > 0 ? filteredData : data}
        onClick={() => console.log('Clicked!')}
      ></PopDishes>
    </Stack>
  )
}
