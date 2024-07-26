import { Avatar } from '../Avatar'
import { IconName } from '../Icon/config'
import { SideList } from '../SideList'
import { StyledSideBar } from './styled'

export const SideBar = () => {
  const changePage = (icon: IconName) => {
    return console.log(icon)
  }

  return (
    <StyledSideBar>
      <Avatar imageUrl="src\assets\Images\cheong.jpg" text="Joseph Cheong" />
      <SideList
        onChange={(icon: IconName) => changePage(icon)}
        options={[
          { icon: 'Home', text: 'Home' },
          { icon: 'Catalog', text: 'Catalog' },
          { icon: 'ShoppingCart', text: 'Cart' },
          { icon: 'Map', text: 'Map' },
          { icon: 'Delivery', text: 'Delivery' },
          { icon: 'Settings', text: 'Settings' }
        ]}
      />
    </StyledSideBar>
  )
}
