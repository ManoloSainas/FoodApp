import { ImageTextCard } from '../Components/Cards/ImageTextCard'
import { Stack } from '../Components/Stack'

export const Home = () => {
  return (
    <Stack flexDirection="column">
      <Stack gap="15px">
        <ImageTextCard
          onClick={(value) => console.log(value)}
          classImage="image"
          classText="text"
          cards={[
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
          ]}
        />
      </Stack>
      <Stack></Stack>
    </Stack>
  )
}
