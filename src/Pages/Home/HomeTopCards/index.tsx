import { useEffect, useState } from 'react'
import { ImageTextCard } from '../../../Components/Cards/ImageTextCard'
import { Stack } from '../../../Components/Stack'
import { apiClient } from '../../../../api-client'

export const HomeTopCards = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true)
      try {
        const cards = await apiClient.get('tags')
        const newData = cards.map((item: any) => ({
          imageURL: item.imageUrl,
          text: item.namePlural,
          hidden: item.hidden
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

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Stack gap="17px" flexWrap="wrap" width="100%">
      <ImageTextCard onClick={(value) => console.log(value)} cards={data} />
    </Stack>
  )
}
