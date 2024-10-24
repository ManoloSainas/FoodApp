import { useEffect, useState } from 'react'
import { CardData, ImageTextCard } from '../ImageTextCard'
import { Stack } from '../../../shared components/Stack'
import { Text } from '../../../shared components/Text'
import { apiClient } from '../../../features/api/api-client'

type fetchedTag = {
  id: string
  name: string
  namePlural: string
  hidden: true
  imageUrl: string
}

export type Props = {
  updateId: (value: string) => void
}

export const CatalogTopCards = ({ updateId }: Props) => {
  const [data, setData] = useState<CardData[]>([
    { text: 'All', imageUrl: 'src/assets/Images/All.png', id: 'All' }
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true)
      try {
        const cards: fetchedTag[] = await apiClient.get('tags')
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

  if (loading)
    return (
      <Text variant="h1" color="red">
        Loading...
      </Text>
    )

  return (
    <Stack gap="17px" flexWrap="wrap" width="100%">
      <ImageTextCard onClick={(value) => updateId(value)} cards={data} />
    </Stack>
  )
}
