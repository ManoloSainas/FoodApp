import { SearchBar } from '../Components/SearchBar'
import { Stack } from '../Components/Stack'

export const TopSide = () => {
  return (
    <Stack backgroundColor="#17171C" width="100%" padding="0 0 0 330px">
      <SearchBar
        type="text"
        iconName="SearchLens"
        onClick={() => console.log('Clicked')}
        onChange={(value) => console.log(value)}
        placeholder="Search..."
        variant="transparent"
      />
    </Stack>
  )
}
