import { PopDishes } from '../../../Components/Cards/PopDishesCard'
import { Stack } from '../../../Components/Stack'

export const HomePopDishBody = () => {
  return (
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
            iconNameOptional: 'Flame',
            iconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/cherry.jpg',
            text: 'Cherry',
            textp:
              'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
            tagText: '150g',
            currency: 'Euro',
            value: '42',
            iconNameOptional: 'Flame',
            iconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/orange.jpg',
            text: 'Orange',
            textp:
              'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
            tagText: '50g',
            currency: 'Euro',
            value: '77',
            iconNameOptional: 'Flame',
            iconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/pineapple.jpg',
            text: 'Pineapple',
            textp:
              'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
            tagText: '780g',
            currency: 'Euro',
            value: '9',
            iconNameOptional: 'Flame',
            iconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/strawberry.jpg',
            text: 'Strawberry',
            textp:
              'Smoked salmon, red caviar, boiled potatoes, boiled carrots, frozen green peas, salt.',
            tagText: '64g',
            currency: 'Euro',
            value: '88',
            iconNameOptional: 'Flame',
            iconNameButton: 'Plus'
          },
          {
            imageURL: 'src/assets/Images/watermelon.jpg',
            text: 'Watermelon',
            textp:
              'This is a watermelon. This is a watermelon. This is a watermelon. This is a watermelon. This is a watermelon.',
            tagText: '10g',
            currency: 'Euro',
            value: '19',
            iconNameOptional: 'Flame',
            iconNameButton: 'Plus'
          }
        ]}
        onClick={() => console.log('Clicked!')}
      ></PopDishes>
    </Stack>
  )
}
