import { Avatar } from '../Avatar'
import { IconName } from '../Icon/config'
import { SideBarDaCambiare } from '../SideBarDaCambiare'
import { StyledSideBar } from './styled'

export const SideBar = () => {
  const changePage = (icon: IconName) => {
    return console.log(icon)
  }

  return (
    <StyledSideBar>
      <Avatar imageURL="src\assets\Images\cheong.jpg" text="Joseph Cheong" />
      <SideBarDaCambiare
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
    </StyledSideBar>
  )
}
