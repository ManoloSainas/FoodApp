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
      width="max-content"
      height="max-content"
      padding="10px 40px 30px 40px"
      gap="20px"
    >
      <Stack
        justifyContent="space-between"
        width="100%"
        height="100%"
        alignItems="center"
      >
        <Text variant="h2" color="white">
          Write a review
        </Text>
        <IconButton
          color="#6C6D73"
          variant="greyIcon"
          iconName="Xmark"
          onClick={() => console.log('Clicked!')}
        ></IconButton>
      </Stack>

      <Stack justifyContent="center" width="100%">
        <TextArea></TextArea>
      </Stack>

      <Stack width="100%" justifyContent="flex-end">
        <Button onClick={() => console.log('Clicked!')}>Send</Button>
      </Stack>
    </Stack>
  )
}
