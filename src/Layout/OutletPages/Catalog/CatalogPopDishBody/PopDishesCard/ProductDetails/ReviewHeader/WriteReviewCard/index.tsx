import { useCallback } from 'react'
import { Button } from '../../../../../../../../Shared Components/Button'
import TextArea from '../../../../../../../../Shared Components/TextArea'
import { IconButton } from '../../../../../../../../Composite Components/IconButton'
import { Stack } from '../../../../../../../../Shared Components/Stack'
import { Text } from '../../../../../../../../Shared Components/Text'
import { StyledWriteReviewCard } from './styled'

type Props = {
  onClose: () => void
}

export const WriteReviewCard = ({ onClose }: Props) => {
  const handleTextAreaChange = useCallback((value: string) => {
    console.log(value)
  }, [])

  const handleButtonClick = useCallback(() => {
    console.log('Clicked!')
  }, [])

  return (
    <StyledWriteReviewCard>
      <Stack justifyContent="space-between" width="100%" alignItems="center">
        <Text variant="h2" color="white">
          Write a review
        </Text>
        <IconButton
          color="#6C6D73"
          variant="greyIcon"
          iconName="Xmark"
          onClick={onClose}
          paddingVar="icon"
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
    </StyledWriteReviewCard>
  )
}
