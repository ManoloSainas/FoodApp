import { Button } from '../../Button'
import { TextArea } from '../../Form/TextArea'
import { IconButton } from '../../IconButton'
import { Stack } from '../../Stack'
import { Text } from '../../Text'

export const WriteReview = () => {
  return (
    <Stack
      flexDirection="column"
      margin="20px"
      borderRadius={20}
      backgroundColor="#22222A"
      padding="5px 25px"
      width="610px"
      height="253px"
    >
      <Stack justifyContent="space-between" width="100%" alignItems="center">
        <Text variant="h4" color="white">
          Write a review
        </Text>
        <IconButton
          color="#6C6D73"
          variant="greyIcon"
          iconName="Xmark"
          onClick={() => console.log('Clicked!')}
        ></IconButton>
      </Stack>

      <Stack>
        <TextArea></TextArea>
      </Stack>

      <Stack>
        <Button></Button>
      </Stack>
    </Stack>
  )
}
