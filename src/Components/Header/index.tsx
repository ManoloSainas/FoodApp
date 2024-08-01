import { useState } from 'react'
import { IconButton } from '../IconButton'
import { SearchBar } from '../SearchBar'
import { Stack } from '../Stack'
import { StyledHeader } from './styled'
import { Text } from '../Text'
import { CurrencySelect } from './CurrencySelect'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../features/cart/selectors'

type Props = {
  setSearchedText: (text: string) => void
  setSelectedCurrency: (price: string | string[]) => void
}

export const Header = ({ setSearchedText, setSelectedCurrency }: Props) => {
  const [inputText, setInputText] = useState('')

  const TotCartObjects = useSelector(selectCartTotal)

  return (
    <StyledHeader>
      <SearchBar
        type="text"
        iconName="SearchLens"
        onClick={() => setSearchedText(inputText)}
        onChange={(value) => setInputText(value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setSearchedText(inputText)
          }
        }}
        placeholder="Search..."
        variant="transparent"
      />

      <Stack gap="10px" alignItems="center">
        <Stack alignItems="center" flexDirection="column" margin="0px 50px 0px 0px">
          <Text variant="h4">Select your currency</Text>
          <CurrencySelect updatePrice={setSelectedCurrency} />
        </Stack>

        <Stack gap="5px">
          <IconButton
            variant="greyIcon"
            iconName="Bell"
            onClick={() => console.log('Clicked')}
          />

          <Stack position="relative" alignItems="center" justifyContent="center">
            <IconButton
              variant="greyIcon"
              iconName="ShoppingCart"
              onClick={() => console.log('Clicked')}
            />

            {TotCartObjects > 0 && (
              <Stack
                position="absolute"
                backgroundColor="#F74158"
                borderRadius={50}
                width="12px"
                height="12px"
                alignItems="center"
                justifyContent="center"
                transform="translate(45%, 45%)"
              >
                <Text fontSize={8}>{TotCartObjects}</Text>
              </Stack>
            )}
          </Stack>

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
