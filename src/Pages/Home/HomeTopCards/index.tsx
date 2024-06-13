import { useEffect, useState } from 'react'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'
import { CardData, ImageTextCard } from '../../../Components/Cards/ImageTextCard'

export const HomeTopCards = ({ updateId }: any) => {
  const [data, setData] = useState<CardData[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true)
      try {
        const cards = await apiClient.get('tags')
        const newData = cards.map((item: any) => ({
          imageUrl: item.imageUrl,
          text: item.namePlural,
          hidden: item.hidden,
          id: item.id
        }))
        const finalData = [
          { text: 'All', imageUrl: 'src/assets/Images/All.png', id: '' },
          ...newData
        ]
        setData(finalData)
      } catch (err) {
        console.error(`Error: ${err}`)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  return (
    <Stack gap="17px" flexWrap="wrap" width="100%">
      <ImageTextCard onClick={(value) => updateId(value)} cards={data} />
    </Stack>
  )
}
