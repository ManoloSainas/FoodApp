import { useEffect, useState } from 'react'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'
import { CardData, ImageTextCard } from '../../../Components/Cards/ImageTextCard'

type fetchedTag = {
  id: string
  name: string
  namePlural: string
  hidden: true
  imageUrl: string
}

export type Props = {
  updateId: React.Dispatch<React.SetStateAction<string>>
}

export const HomeTopCards = ({ updateId }: Props) => {
  const [data, setData] = useState<CardData[]>([
    { text: 'All', imageUrl: 'src/assets/Images/All.png', id: 'All' }
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true)
      try {
        const cards = await apiClient.get('tags')
        const newData = cards.map((item: fetchedTag) => ({
          imageUrl: item.imageUrl,
          text: item.namePlural,
          hidden: item.hidden,
          id: item.id
        }))
        const finalData = [...data, ...newData]
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
