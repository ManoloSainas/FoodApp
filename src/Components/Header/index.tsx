import { useState } from 'react'
import { IconButton } from '../IconButton'
import { SearchBar } from '../SearchBar'
import { Stack } from '../Stack'
import { StyledHeader } from './styled'

type Props = {
  setText: (text: string) => void
}

export const Header = ({ setText }: Props) => {
  const [inputText, setInputText] = useState('')

  return (
    <StyledHeader>
      <SearchBar
        type="text"
        iconName="SearchLens"
        onClick={() => setText(inputText)}
        onChange={(value) => setInputText(value)}
        placeholder="Search..."
        variant="transparent"
      />

      <Stack gap="10px">
        <IconButton
          variant="greyIcon"
          iconName="Bell"
          onClick={() => console.log('Clicked')}
        />
        <IconButton
          variant="greyIcon"
          iconName="BagShopping"
          onClick={() => console.log('Clicked')}
        />
        <IconButton
          variant="redIcon"
          iconName="DoorOpen"
          onClick={() => console.log('Clicked')}
        />
      </Stack>
    </StyledHeader>
  )
}
