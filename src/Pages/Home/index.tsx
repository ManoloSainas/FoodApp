import { ImageTextCard } from '../../Components/Cards/ImageTextCard'
import { PopDishes } from '../../Components/Cards/PopDishesCard'
import { Select } from '../../Components/Form/Select'
import { IconButton } from '../../Components/IconButton'
import { Stack } from '../../Components/Stack'
import { Text } from '../../Components/Text'
import { StyledHome } from './styled'

export const Home = () => {
  return (
    <StyledHome>
      <Stack gap="17px" flexWrap="wrap" width="100%">
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
      <Stack flexDirection="column">
        <Stack id="stackPop" alignItems="center" gap="330px">
          <Text className="popDis" variant="h1">
            Popular dishes
          </Text>

          <Stack alignItems="center" gap="25px">
            <Stack gap="5px">
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

            <Stack gap="5px">
              <IconButton
                size="lg"
                variant="greyIcon"
                onClick={() => console.log('premuto')}
                iconName="Bars"
              />
              <IconButton
                size="lg"
                variant="redIcon"
                onClick={() => console.log('premuto')}
                iconName="Category"
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack flexDirection="row">
          <PopDishes
            options={[
              {
                imageURL: 'src/assets/Images/banana.jpg',
                text: 'Banana',
                textp:
                  'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
                tagText: '330g',
                currency: 'Euro',
                value: '50',
                iconName: 'Flame',
                IconNameButton: 'Plus'
              },
              {
                imageURL: 'src/assets/Images/cherry.jpg',
                text: 'cherry',
                textp:
                  'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
                tagText: '150g',
                currency: 'Euro',
                value: '42',
                iconName: 'Flame',
                IconNameButton: 'Plus'
              },
              {
                imageURL: 'src/assets/Images/orange.jpg',
                text: 'orange',
                textp:
                  'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
                tagText: '50g',
                currency: 'Euro',
                value: '77',
                iconName: 'Flame',
                IconNameButton: 'Plus'
              },
              {
                imageURL: 'src/assets/Images/pineapple.jpg',
                text: 'pineapple',
                textp:
                  'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
                tagText: '780g',
                currency: 'Euro',
                value: '9',
                iconName: 'Flame',
                IconNameButton: 'Plus'
              },
              {
                imageURL: 'src/assets/Images/strawberry.jpg',
                text: 'strawberry',
                textp:
                  'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
                tagText: '64g',
                currency: 'Euro',
                value: '88',
                iconName: 'Flame',
                IconNameButton: 'Plus'
              },
              {
                imageURL: 'src/assets/Images/watermelon.jpg',
                text: 'watermelon',
                textp:
                  'This is a watermelon. This is a watermelon. This is a watermelon. This is a watermelon. This is a watermelon.',
                tagText: '10g',
                currency: 'Euro',
                value: '19',
                iconName: 'Flame',
                IconNameButton: 'Plus'
              }
            ]}
            onClick={() => console.log('Clicked!')}
          ></PopDishes>
        </Stack>
      </Stack>
    </StyledHome>
  )
}
