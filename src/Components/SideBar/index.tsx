import { Avatar } from '../../Composite Components/Avatar'
import { IconName } from '../../Shared Components/Icon/config'
import { SideList } from '../SideList'
import { StyledSideBar } from './styled'
import { useCallback } from 'react'

export const SideBar = () => {
  const changePage = useCallback((icon: IconName) => {
    console.log(icon)
  }, [])

  return (
    <StyledSideBar>
      <Avatar imageUrl="src/assets/Images/cheong.jpg" text="Joseph Cheong" />
      <SideList
        onChange={changePage}
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
