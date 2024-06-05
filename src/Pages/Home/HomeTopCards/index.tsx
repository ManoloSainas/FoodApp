import { useEffect, useState } from 'react'
import { ImageTextCard } from '../../../Components/Cards/ImageTextCard'
import { Stack } from '../../../Components/Stack'

export const HomeTopCards = () => {
  const [data, setData] = useState([
    {
      imageURL: 'src/assets/Images/banana.jpg',
      text: 'banana'
    },
    {
      imageURL: 'src/assets/Images/cherry.jpg',
      text: 'cherry'
    },
    {
      imageURL: 'src/assets/Images/orange.jpg',
      text: 'orange'
    },
    {
      imageURL: 'src/assets/Images/pineapple.jpg',
      text: 'pineapple'
    },
    {
      imageURL: 'src/assets/Images/strawberry.jpg',
      text: 'strawberry'
    },
    {
      imageURL: 'src/assets/Images/watermelon.jpg',
      text: 'watermelon'
    }
  ])

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  return (
    <Stack gap="17px" flexWrap="wrap" width="100%">
      <ImageTextCard onClick={(value) => console.log(value)} cards={data} />
    </Stack>
  )
}
