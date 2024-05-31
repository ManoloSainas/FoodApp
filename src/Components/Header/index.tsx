import { IconButton } from '../IconButton'
import { SearchBar } from '../SearchBar'
import { Stack } from '../Stack'
import { StyledHeader } from './styled'

export const Header = () => {
  return (
    <StyledHeader>
      <SearchBar
        type="text"
        iconName="SearchLens"
        onClick={() => console.log('Clicked')}
        onChange={(value) => console.log(value)}
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
