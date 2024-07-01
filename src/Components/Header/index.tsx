import { useState } from 'react'
import { IconButton } from '../IconButton'
import { SearchBar } from '../SearchBar'
import { Stack } from '../Stack'
import { StyledHeader } from './styled'
import { PriceSelect } from '../../Pages/Home/HomePopDishHeader/PriceSelect'
import { Text } from '../Text'

type Props = {
  setSearchedText: (text: string) => void
  setSelectedCurrency: (price: string | string[]) => void
}

export const Header = ({ setSearchedText, setSelectedCurrency }: Props) => {
  const [inputText, setInputText] = useState('')

  return (
    <StyledHeader>
      <SearchBar
        type="text"
        iconName="SearchLens"
        onClick={() => setSearchedText(inputText)}
        onChange={(value) => setInputText(value)}
        placeholder="Search..."
        variant="transparent"
      />

      <Stack gap="10px" alignItems="center">
        <Stack alignItems="center" flexDirection="column" margin="0px 50px 0px 0px">
          <Text variant="h4">Select your currency</Text>
          <PriceSelect updatePrice={setSelectedCurrency} />
        </Stack>

        <Stack gap="5px">
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
      </Stack>
    </StyledHeader>
  )
}
