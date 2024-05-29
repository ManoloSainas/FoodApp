import { IconButton } from '../Components/IconButton'
import { SearchBar } from '../Components/SearchBar'
import { Stack } from '../Components/Stack'

export const TopSide = () => {
  return (
    <Stack
      backgroundColor="#17171C"
      width="100%"
      padding="0 70px 0 330px"
      alignItems="center"
      justifyContent="space-between"
    >
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
    </Stack>
  )
}
