import { useEffect, useState } from 'react'
import { PopDishes } from '../../../Components/Cards/PopDishesCard'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'

export const HomePopDishBody = () => {
  const [data, setData] = useState([])
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
          iconNameButton: 'Plus'
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

  return (
    <Stack flexDirection="row">
      <PopDishes options={data} onClick={() => console.log('Clicked!')}></PopDishes>
    </Stack>
  )
}
