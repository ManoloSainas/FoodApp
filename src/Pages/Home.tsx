import { ImageTextCard } from '../Components/Cards/ImageTextCard'
import { Stack } from '../Components/Stack'

export const Home = () => {
  return (
    <Stack
      height="100%"
      width="100%"
      flexDirection="column"
      backgroundColor="#eeff00"
      borderRadius={20}
    >
      <Stack gap="30px" flexWrap="wrap" width="100%">
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
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
            },
            {
              imageURL: 'src/assets/Images/watermelon.jpg',
              text: 'watermelon'
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
