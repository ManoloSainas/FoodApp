import { useCallback } from 'react'
import { Button } from '../../../../../../../Shared Components/Button'
import TextArea from '../../../../../../../Shared Components/TextArea'
import { IconButton } from '../../../../../../../Composite Components/IconButton'
import { Stack } from '../../../../../../../Shared Components/Stack'
import { Text } from '../../../../../../../Shared Components/Text'

export const WriteReviewCard = () => {
  const handleIconButtonClick = useCallback(() => {
    console.log('Clicked!')
  }, [])

  const handleTextAreaChange = useCallback((value: string) => {
    console.log(value)
  }, [])

  const handleButtonClick = useCallback(() => {
    console.log('Clicked!')
  }, [])

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
      <Stack justifyContent="space-between" width="100%" alignItems="center">
        <Text variant="h2" color="white">
          Write a review
        </Text>
        <IconButton
          color="#6C6D73"
          variant="greyIcon"
          iconName="Xmark"
          onClick={handleIconButtonClick}
        />
      </Stack>

      <Stack justifyContent="center" width="100%">
        <TextArea
          placeholder="Tell us what you liked or disliked about this product..."
          onChange={handleTextAreaChange}
        />
      </Stack>

      <Stack width="100%" justifyContent="flex-end">
        <Button onClick={handleButtonClick}>Send</Button>
      </Stack>
    </Stack>
  )
}
