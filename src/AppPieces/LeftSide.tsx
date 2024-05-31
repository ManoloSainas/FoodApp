import { Avatar } from '../Components/Avatar'
import { IconName } from '../Components/Icon/config'
import { SideBar } from '../Components/SideBar'
import { Stack } from '../Components/Stack'

export const LeftSide = () => {
  const changePage = (icon: IconName) => {
    return console.log(icon)
  }

  return (
    <Stack
      flexDirection="column"
      backgroundColor="#17171C"
      width="max-content"
      padding="00px 45px 0px 45px"
      justifyContent="flex-start"
      alignItems="center"
      height="100vh"
    >
      <Avatar imageURL="src\assets\Images\cheong.jpg" text="Joseph Cheong" />
      <SideBar
        onChange={(icon: IconName) => changePage(icon)}
        options={[
          { icon: 'Home', text: 'Home' },
          { icon: 'Catalog', text: 'Catalog' },
          { icon: 'Category', text: 'Category' },
          { icon: 'Map', text: 'Map' },
          { icon: 'Delivery', text: 'Delivery' },
          { icon: 'Settings', text: 'Settings' }
        ]}
      />
    </Stack>
  )
}
