import { ImageTextCard } from '../../Components/Cards/ImageTextCard'
import { Select } from '../../Components/Form/Select'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { StyledHome } from './styled'

export const Home = () => {
  return (
    <StyledHome>
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
            }
          ]}
        />
      </Stack>
      <Stack>
        <Stack alignItems="center">
          <Text variant="h1">Popular dishes</Text>
          <Stack>
            <Select
              onChange={(value) => console.log(value)}
              options={[{ value: 'Delivery', label: 'Delivery' }]}
            />
            <Select
              onChange={(value) => console.log(value)}
              options={[{ value: 'Ingredients', label: 'Ingredients' }]}
            />
            <Select
              onChange={(value) => console.log(value)}
              options={[{ value: 'Price', label: 'Price' }]}
            />
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
    </StyledHome>
  )
}
